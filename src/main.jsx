import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import Home from './pages/home/index.jsx'

import './index.css'
import './styles/app.scss'

import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <App>
        <Home />
      </App>
    </BrowserRouter>
  </StrictMode>,
)
