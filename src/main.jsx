import React from 'react'
import ReactDOM from 'react-dom/client'
import { ContadorApp } from './ContadorApp'
import "./styles.css"

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ContadorApp value={0}/>
  </React.StrictMode>,
)
