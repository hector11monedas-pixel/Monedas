import React, { Suspense } from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import Modal from '../common/Modal';
import LoadingFallback from '../common/LoadingFallback';
import './Layout.css';

import { useCoin } from '../../hooks/useCoin';
import { useAuth } from '../../hooks/useAuth';
import { useNavigate, useLocation } from 'react-router-dom';
import {
  Settings, Download, Upload, LogOut, LogIn, Languages, Trash2,
  Home, Coins, Globe, Banknote, Share2, BarChart3, Heart,
  Sun, Moon, Palette, Database, Image as ImageIcon,
  CloudUpload, CheckCircle2, RefreshCw, Menu as MenuIcon, X, ChevronDown, ShieldCheck
} from 'lucide-react';
import './SidebarUser.css';

const Layout = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { currentUser, isAdmin, logout } = useAuth();
  const {
    t,
    darkMode,
    setDarkMode,
    language,
    setLanguage,
    germanMintsEnabled,
    toggleGermanMints,
    greeceMintsEnabled,
    toggleGreeceMints,
    commemorativeVariantsEnabled,
    toggleCommemorativeVariants,
    resetCollection,
    isSaving,
  } = useCoin();

  const [isSidebarOpen, setIsSidebarOpen] = React.useState(window.innerWidth > 768);
  const [isSettingsOpen, setIsSettingsOpen] = React.useState(false);
  const [isEuroSettingsOpen, setIsEuroSettingsOpen] = React.useState(false);
  const [isResetting, setIsResetting] = React.useState(false);

  // Close sidebar on mobile when navigating
  React.useEffect(() => {
    if (window.innerWidth <= 768) {
      setIsSidebarOpen(false);
    }
  }, [location.pathname]);

  // Handle window resize
  React.useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) {
        setIsSidebarOpen(true);
      } else {
        setIsSidebarOpen(false);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleReset = async () => {
    if (window.confirm(t('resetConfirm'))) {
      setIsResetting(true);
      try {
        await resetCollection();
        setIsSettingsOpen(false);
        alert("✓ Colección borrada.");
      } catch (e) {
        alert("Error: " + e.message);
      } finally {
        setIsResetting(false);
      }
    }
  };

  const handleLogout = async () => {
    try {
      await logout();
      navigate('/login');
    } catch (e) {
      console.error(e);
    }
  };

  /* Legacy inline export/import removed in favor of /data page */

  return (
    <div className={`app-container ${isSidebarOpen ? 'sidebar-open' : 'sidebar-closed'}`}>
      {/* Top Navbar for mobile and when sidebar is closed on desktop */}
      <header className="top-navbar glass-panel">
        <div className="top-navbar-content">
          <button
            className="mobile-menu-toggle"
            onClick={() => setIsSidebarOpen(!isSidebarOpen)}
            aria-label="Menu"
          >
            <MenuIcon size={24} />
          </button>

          <div className="top-navbar-logo">
            <NavLink to="/" className="logo-link mini">
              <h1>Numis<span className="text-gold">App</span></h1>
            </NavLink>
          </div>

          <div className="top-navbar-actions">
            {/* Optional: Add quick actions like search or user profile here */}
          </div>
        </div>
      </header>

      {/* Backdrop for mobile */}
      {isSidebarOpen && window.innerWidth <= 768 && (
        <div className="sidebar-overlay" onClick={() => setIsSidebarOpen(false)}></div>
      )}

      <aside className={`sidebar glass-panel ${isSidebarOpen ? 'open' : 'closed'}`}>
        <div className="sidebar-header-internal">
          <div className="logo-container">
            <NavLink to="/" className="logo-link">
              <h1>Numis<span className="text-gold">App</span></h1>
            </NavLink>
          </div>
          <button
            className="sidebar-close-btn"
            onClick={() => setIsSidebarOpen(false)}
          >
            <X size={20} />
          </button>
        </div>

        <div className="sidebar-user">
          {currentUser ? (
            <>
              <img src={currentUser.photoURL} alt="User" className="user-avatar" />
              <div className="user-info">
                <p className="user-name">{currentUser?.displayName || 'Usuario'}</p>
                <p className="user-email" style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
                  {currentUser?.email || 'Modo Local'}
                  {isSaving ? (
                    <CloudUpload size={14} className="text-yellow animate-pulse" />
                  ) : (
                    <CheckCircle2 size={14} className="text-green" />
                  )}
                </p>
              </div>
              <button className="auth-btn" onClick={handleLogout}>
                <LogOut size={16} style={{ marginRight: '5px' }} /> {t('logout')}
              </button>
            </>
          ) : (
            location.pathname !== '/login' && (
              <button className="auth-btn login" onClick={() => navigate('/login')}>
                <LogIn size={16} style={{ marginRight: '5px' }} /> {t('login')}
              </button>
            )
          )}
        </div>

        <button
          className="settings-btn"
          onClick={() => setIsSettingsOpen(true)}
        >
          <Settings size={20} />
          <span>{t('settings')}</span>
        </button>

        <nav className="nav-menu" style={{ display: 'flex', flexDirection: 'column', gap: '8px', flex: 1, overflowY: 'auto', marginBottom: '1rem' }}>
          {[
            { path: '/', icon: <Home size={20} />, label: t('home') || 'Inicio' },
            { path: '/gallery', icon: <ImageIcon size={20} />, label: 'Galería' },
            { path: '/euro', icon: <Coins size={20} />, label: 'Euro' },
            { path: '/euro/normal/Spain', icon: <Coins size={20} />, label: 'España' },
            { path: '/world', icon: <Globe size={20} />, label: 'Mundo' },
            { path: '/banknotes', icon: <Banknote size={20} />, label: 'Billetes' },
            { path: '/wishlist', icon: <Heart size={20} />, label: 'Deseadas' },
            { path: '/trade', icon: <Share2 size={20} />, label: 'Repetidas' },
            { path: '/statistics', icon: <BarChart3 size={20} />, label: 'Estadísticas' },
            { path: '/inventory', icon: <RefreshCw size={20} />, label: 'Inventario' },
            { path: '/data', icon: <Database size={20} />, label: 'Gestión Datos' },
            ...(isAdmin ? [{ path: '/admin', icon: <ShieldCheck size={20} />, label: 'Administración' }] : []),
          ].map(item => (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) => `nav-item ${isActive ? 'active' : ''}`}
              style={({ isActive }) => ({
                display: 'flex',
                alignItems: 'center',
                gap: '12px',
                padding: '12px 16px',
                borderRadius: '12px',
                textDecoration: 'none',
                color: isActive ? 'var(--primary-color)' : 'var(--text-secondary)',
                background: isActive ? 'rgba(212, 175, 55, 0.1)' : 'transparent',
                transition: 'all 0.2s ease',
                fontWeight: isActive ? '600' : '400'
              })}
            >
              {item.icon}
              <span>{item.label}</span>
            </NavLink>
          ))}
        </nav>


      </aside>

      <main className="main-content">
        <Suspense fallback={<LoadingFallback />}>
          <Outlet />
        </Suspense>
      </main>

      {/* Settings Modal */}
      <Modal
        isOpen={isSettingsOpen}
        onClose={() => setIsSettingsOpen(false)}
        title={t('settingsTitle')}
      >
        <div className="settings-options" style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>

          {/* Section: Appearance */}
          <div className="settings-section">
            <h4 style={{ fontSize: '0.8rem', opacity: 0.5, textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '8px' }}>
              <Palette size={14} /> Apariencia
            </h4>

            <div className="setting-item" style={{ background: 'rgba(255,255,255,0.02)', padding: '12px', borderRadius: '12px', border: '1px solid rgba(255,255,255,0.05)' }}>
              <p style={{ fontSize: '0.9rem', marginBottom: '12px', fontWeight: '500' }}>{t('language')}</p>
              <div className="language-selector" style={{ display: 'flex', gap: '8px' }}>
                {['es', 'en'].map(lang => (
                  <button
                    key={lang}
                    className={`lang-btn ${language === lang ? 'active' : ''}`}
                    onClick={() => setLanguage(lang)}
                    style={{ flex: 1, padding: '10px', borderRadius: '8px', border: '1px solid rgba(255,255,255,0.1)', background: language === lang ? 'var(--primary-color)' : 'transparent', color: language === lang ? 'var(--bg-primary)' : 'inherit', cursor: 'pointer', transition: 'all 0.2s', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px', fontWeight: '600' }}
                  >
                    <Languages size={16} />
                    {lang === 'es' ? 'Español' : 'English'}
                  </button>
                ))}
              </div>
            </div>

            <div className="setting-item" style={{ background: 'rgba(255,255,255,0.02)', padding: '12px', borderRadius: '12px', border: '1px solid rgba(255,255,255,0.05)', marginTop: '12px' }}>
              <p style={{ fontSize: '0.9rem', marginBottom: '12px', fontWeight: '500' }}>Tema Visual</p>
              <div className="theme-selector" style={{ display: 'flex', gap: '8px' }}>
                <button
                  className={`theme-btn ${darkMode ? 'active' : ''}`}
                  onClick={() => setDarkMode(true)}
                  style={{ flex: 1, padding: '10px', borderRadius: '8px', border: '1px solid rgba(255,255,255,0.1)', background: darkMode ? 'var(--bg-secondary)' : 'transparent', color: darkMode ? 'var(--primary-color)' : 'inherit', cursor: 'pointer', transition: 'all 0.2s', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px' }}
                >
                  <Moon size={16} /> Oscuro
                </button>
                <button
                  className={`theme-btn ${!darkMode ? 'active' : ''}`}
                  onClick={() => setDarkMode(false)}
                  style={{ flex: 1, padding: '10px', borderRadius: '8px', border: '1px solid rgba(255,255,255,0.1)', background: !darkMode ? '#fff' : 'transparent', color: !darkMode ? '#000' : 'inherit', cursor: 'pointer', transition: 'all 0.2s', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px' }}
                >
                  <Sun size={16} /> Claro
                </button>
              </div>
            </div>
          </div>

          {/* Section: Catalog Preferences */}
          <div className="settings-section">
            <h4 style={{ fontSize: '0.8rem', opacity: 0.5, textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '8px' }}>
              <Coins size={14} /> Preferencias de Catálogo
            </h4>

            <div
              className="settings-group-toggle"
              onClick={() => setIsEuroSettingsOpen(!isEuroSettingsOpen)}
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                padding: '12px 16px',
                background: 'rgba(255,255,255,0.05)',
                borderRadius: '12px',
                border: '1px solid rgba(255,255,255,0.1)',
                cursor: 'pointer',
                marginBottom: isEuroSettingsOpen ? '8px' : '0'
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <Coins size={18} className="text-gold" />
                <span style={{ fontWeight: '600', fontSize: '0.95rem' }}>Euro</span>
              </div>
              <ChevronDown
                size={18}
                style={{
                  transform: isEuroSettingsOpen ? 'rotate(180deg)' : 'rotate(0)',
                  transition: 'transform 0.3s ease'
                }}
              />
            </div>

            {isEuroSettingsOpen && (
              <div
                className="setting-item"
                style={{
                  background: 'rgba(255,255,255,0.02)',
                  padding: '12px',
                  borderRadius: '12px',
                  border: '1px solid rgba(255,255,255,0.05)',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '12px',
                  animation: 'fadeIn 0.3s ease'
                }}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <span style={{ fontSize: '0.9rem' }}>Incluir Cecas Alemanas (A, D, F, G, J)</span>
                  <input
                    type="checkbox"
                    checked={germanMintsEnabled}
                    onChange={toggleGermanMints}
                    style={{ width: '20px', height: '20px', cursor: 'pointer', accentColor: 'var(--primary-color)' }}
                  />
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <span style={{ fontSize: '0.9rem' }}>Incluir Ceca Grecia 2002 (VAR)</span>
                  <input
                    type="checkbox"
                    checked={greeceMintsEnabled}
                    onChange={toggleGreeceMints}
                    style={{ width: '20px', height: '20px', cursor: 'pointer', accentColor: 'var(--primary-color)' }}
                  />
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <span style={{ fontSize: '0.9rem' }}>Incluir Variantes Conmemorativas</span>
                  <input
                    type="checkbox"
                    checked={commemorativeVariantsEnabled}
                    onChange={toggleCommemorativeVariants}
                    style={{ width: '20px', height: '20px', cursor: 'pointer', accentColor: 'var(--primary-color)' }}
                  />
                </div>
              </div>
            )}
          </div>

          {/* Section: Data Management (Moved to dedicated page) */}
          <div className="settings-section">
            <button
              onClick={() => {
                setIsSettingsOpen(false);
                navigate('/data');
              }}
              style={{
                width: '100%',
                padding: '12px',
                borderRadius: '12px',
                background: 'rgba(255,255,255,0.05)',
                color: 'var(--text-primary)',
                border: '1px solid rgba(255,255,255,0.1)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '10px',
                cursor: 'pointer',
                fontSize: '1rem',
                fontWeight: '600'
              }}
            >
              <Database size={18} /> Ir a Gestión Avanzada de Datos
            </button>

            {currentUser && (
              <button onClick={() => {
                const url = `${window.location.origin}/shared/${currentUser.uid}`;
                navigator.clipboard.writeText(url);
                alert('Enlace copiado: ' + url);
              }} className="action-btn share" style={{ marginTop: '1rem', width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px', padding: '12px', background: 'rgba(255, 215, 0, 0.1)', color: '#ffd700', border: '1px solid rgba(255, 215, 0, 0.2)', borderRadius: '12px', cursor: 'pointer' }}>
                <Share2 size={18} />
                <span style={{ fontWeight: 'bold' }}>Copiar Enlace Público</span>
              </button>
            )}
          </div>

          <div className="setting-item delete-zone" style={{ marginTop: '1.5rem', padding: '12px', borderRadius: '12px', border: '1px solid rgba(239, 68, 68, 0.1)', background: 'rgba(239, 68, 68, 0.02)' }}>
            <p style={{ color: '#ef4444', fontSize: '0.75rem', marginBottom: '10px' }}>Zona de Peligro</p>
            <button
              className="action-btn"
              onClick={handleReset}
              disabled={isResetting}
              style={{
                backgroundColor: isResetting ? 'rgba(100, 100, 100, 0.1)' : 'rgba(239, 68, 68, 0.1)',
                color: isResetting ? '#888' : '#ef4444',
                border: '1px solid rgba(239, 68, 68, 0.2)',
                width: '100%',
                padding: '10px',
                borderRadius: '8px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '8px',
                cursor: isResetting ? 'not-allowed' : 'pointer',
                fontWeight: '600'
              }}
            >
              <Trash2 size={18} className={isResetting ? 'animate-spin' : ''} />
              {isResetting ? 'Borrando...' : 'Borrar Todo'}
            </button>
          </div>

        </div>
      </Modal >
    </div >
  );
};

export default Layout;
