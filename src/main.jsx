import './index.css'
import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router } from 'react-router-dom'
import App from './App'
import { AuthProvider } from './context/AuthContext'


ReactDOM.createRoot(document.getElementById('root')).render(

      <Router>
        <AuthProvider>
            <App />
        </AuthProvider>
      </Router>
)
