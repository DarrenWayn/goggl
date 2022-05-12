import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router } from 'react-router-dom'
import App from './App'
import { StateContextProvider } from './contexts/StateContextProvider'
import './global.css'

import reportWebVitals from './reportWebVitals'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <StateContextProvider>
    <Router>
      <App />
    </Router>
  </StateContextProvider>
)

reportWebVitals();
