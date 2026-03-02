import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';
import { Chrome } from 'lucide-react'; // Simulating Google Icon with Chrome/Globe if needed or use text
import './LoginPage.css';

const LoginPage = () => {
    const { loginWithGoogle, currentUser } = useAuth();
    const navigate = useNavigate();
    const [errorMsg, setErrorMsg] = React.useState('');

    useEffect(() => {
        if (currentUser) {
            navigate('/');
        }
    }, [currentUser, navigate]);

    const getSpanishError = (errorCode) => {
        switch (errorCode) {
            case 'auth/popup-closed-by-user':
                return 'Has cerrado la ventana antes de terminar. Inténtalo de nuevo.';
            case 'auth/cancelled-popup-request':
                return 'Operación cancelada. No abras múltiples ventanas de login.';
            case 'auth/unauthorized-domain':
                return 'Dominio no autorizado. Configura "localhost" o tu dominio en Firebase Console.';
            case 'auth/network-request-failed':
                return 'Error de conexión. Verifica tu internet.';
            case 'auth/configuration-not-found':
                return 'El inicio de sesión con Google no está activado en Firebase. Habilítalo en la consola.';
            default:
                return 'Error desconocido: ' + errorCode;
        }
    };

    const handleLogin = async () => {
        setErrorMsg('');
        try {
            await loginWithGoogle();
        } catch (error) {
            console.error("Login failed:", error);
            setErrorMsg(getSpanishError(error.code));
        }
    };

    return (
        <div className="login-page">
            <div className="login-card glass-panel">
                <div className="login-logo">
                    👑
                </div>
                <h1>Bienvenido a tu Colección</h1>
                <p className="login-subtitle">Guarda tus monedas en la nube y accede desde cualquier lugar.</p>
                <p className="login-note">
                    No necesitas crear cuenta. Simplemente inicia sesión con Google y tu cuenta se creará automáticamente.
                </p>

                {errorMsg && (
                    <div className="error-message" style={{ color: '#ff6b6b', background: 'rgba(255,0,0,0.1)', padding: '10px', borderRadius: '5px', margin: '10px 0', fontSize: '0.9rem' }}>
                        {errorMsg}
                    </div>
                )}

                <button className="google-login-btn" onClick={handleLogin}>
                    <img
                        src="https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/google.svg"
                        alt="Google"
                        className="google-icon"
                    />
                    <span>Continuar con Google</span>
                </button>
            </div>
        </div>
    );
};

export default LoginPage;
