import React from 'react'
import ReactDOM from 'react-dom/client'

/* Los estilos base van ANTES que los componentes: si se importan después,
   reglas globales como `.btn { display: inline-flex }` pisan a las de
   componente con la misma especificidad (`.header__cta { display: none }`)
   solo por orden en el bundle. */
import './styles/global.css'
import App from './App.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
