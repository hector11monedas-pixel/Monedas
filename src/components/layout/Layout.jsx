import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import Modal from '../common/Modal';
import './Layout.css';

import { useNavigate, useLocation } from 'react-router-dom';
import { useCoin } from '../../context/CoinContext';
import { useAuth } from '../../context/AuthContext';
import { Settings, Download, Upload, LogOut, LogIn } from 'lucide-react';
import './SidebarUser.css';

const Layout = () => {
  const [isSettingsOpen, setIsSettingsOpen] = React.useState(false);
  const { items, importData } = useCoin();
  const { currentUser, logout } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  const handleLogout = async () => {
    try {
      await logout();
      navigate('/login');
    } catch (e) {
      console.error(e);
    }
  };

  const handleExport = () => {
    const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(items));
    const downloadAnchorNode = document.createElement('a');
    downloadAnchorNode.setAttribute("href", dataStr);
    downloadAnchorNode.setAttribute("download", "coleccion_numismatica.json");
    document.body.appendChild(downloadAnchorNode); // required for firefox
    downloadAnchorNode.click();
    downloadAnchorNode.remove();
  };

  const handleImport = (event) => {
    const fileReader = new FileReader();
    fileReader.readAsText(event.target.files[0], "UTF-8");
    fileReader.onload = e => {
      try {
        const parsedData = JSON.parse(e.target.result);
        importData(parsedData);
        setIsSettingsOpen(false);
        alert("Colección importada correctamente.");
      } catch {
        alert("Error al importar el archivo. Asegúrate de que es un JSON válido.");
      }
    };
  };

  return (
    <div className="app-container">
      <aside className="sidebar glass-panel">
        <div className="logo-container">
          <NavLink to="/" className="logo-link">
            <h1>Numis<span className="text-gold">App</span></h1>
          </NavLink>
        </div>

        <button
          className="settings-btn"
          onClick={() => setIsSettingsOpen(true)}
        >
          <Settings size={24} />
          <span>Ajustes</span>
        </button>

        <div className="sidebar-user">
          {currentUser ? (
            <>
              <img src={currentUser.photoURL} alt="User" className="user-avatar" />
              <span className="user-name">{currentUser.displayName}</span>
              <button className="auth-btn" onClick={handleLogout}>
                <LogOut size={16} style={{ marginRight: '5px' }} /> Salir
              </button>
            </>
          ) : (
            location.pathname !== '/login' && (
              <button className="auth-btn login" onClick={() => navigate('/login')}>
                <LogIn size={16} style={{ marginRight: '5px' }} /> Entrar
              </button>
            )
          )}
        </div>
      </aside>

      <main className="main-content">
        <Outlet />
      </main>

      {/* Settings Modal */}
      <Modal
        isOpen={isSettingsOpen}
        onClose={() => setIsSettingsOpen(false)}
        title="Ajustes y Datos"
      >
        <div className="settings-options">
          <div className="setting-item">
            <p>Guarda una copia seguridad de tu colección.</p>
            <button className="action-btn export" onClick={handleExport}>
              <Download size={20} />
              Exportar Colección (JSON)
            </button>
          </div>

          <hr className="divider" />

          <div className="setting-item">
            <p>Restaura una copia de seguridad.</p>
            <label className="action-btn import">
              <Upload size={20} />
              Importar Colección
              <input
                type="file"
                accept=".json"
                onChange={handleImport}
                style={{ display: 'none' }}
              />
            </label>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default Layout;
