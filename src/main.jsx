import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { AuthProvider } from './context/AuthContext.jsx'
import { CoinProvider } from './context/CoinContext.jsx'
import { ThemeProvider } from './context/ThemeContext.jsx'

import ErrorBoundary from './components/common/ErrorBoundary.jsx'

import { BrowserRouter } from 'react-router-dom'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ErrorBoundary>
      <BrowserRouter>
        <AuthProvider>
          <CoinProvider>
            <ThemeProvider>
              <App />
            </ThemeProvider>
          </CoinProvider>
        </AuthProvider>
      </BrowserRouter>
    </ErrorBoundary>
  </StrictMode>,
)
