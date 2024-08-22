import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'

// Utropstecknet ! betyder "jag lovar att det inte kan bli null"
createRoot( document.getElementById('root')! ).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
