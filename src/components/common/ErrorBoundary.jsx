import React from 'react';

class ErrorBoundary extends React.Component {
    constructor(props) {
        super(props);
        this.state = { hasError: false, error: null, errorInfo: null };
    }

    static getDerivedStateFromError() {
        return { hasError: true };
    }

    componentDidCatch(error, errorInfo) {
        this.setState({ error, errorInfo });
        console.error("Uncaught error:", error, errorInfo);
    }

    render() {
        if (this.state.hasError) {
            return (
                <div style={{ padding: '2rem', height: '100vh', background: '#0f172a', color: 'white', fontFamily: 'sans-serif' }}>
                    <h1>Algo salió mal 😭</h1>
                    <p>La aplicación ha encontrado un error crítico.</p>
                    <div style={{ background: '#1e293b', padding: '1rem', borderRadius: '8px', overflow: 'auto', marginTop: '1rem' }}>
                        <h3 style={{ color: '#ef4444' }}>{this.state.error && this.state.error.toString()}</h3>
                        <pre style={{ fontSize: '0.8rem', opacity: 0.7 }}>
                            {this.state.errorInfo && this.state.errorInfo.componentStack}
                        </pre>
                    </div>
                    <button
                        onClick={() => window.location.reload()}
                        style={{ marginTop: '2rem', padding: '10px 20px', background: '#d4af37', border: 'none', borderRadius: '5px', cursor: 'pointer', fontWeight: 'bold' }}
                    >
                        Recargar Página
                    </button>
                </div>
            );
        }

        return this.props.children;
    }
}

export default ErrorBoundary;
