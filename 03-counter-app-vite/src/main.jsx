import React from 'react'
import ReactDOM from 'react-dom/client'
// import HelloWorldApp from './HelloWorldApp'
import FirstApp from './FirstApp'

import './styles.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <HelloWorldApp /> */}
    <FirstApp />
  </React.StrictMode>
)
