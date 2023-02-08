import React from 'react'
import ReactDOM from 'react-dom/client'
import App from 'App'

import 'scss/main.scss'
import 'swiper/css'

const root = ReactDOM.createRoot(document.getElementById('root'))
// root.render(<App />)
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
