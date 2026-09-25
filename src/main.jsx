import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { PortfolioThemeProvider } from './theme/PortfolioThemeProvider.jsx'
import './styles.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <PortfolioThemeProvider>
      <App />
    </PortfolioThemeProvider>
  </StrictMode>,
)
