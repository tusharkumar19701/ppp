import React from 'react'
import ReactDOM from 'react-dom/client'
import { Toaster } from 'react-hot-toast'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'
import App from './App.jsx'
import './index.css'
import store from './utils/store.js'

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <BrowserRouter>
      {/* <React.StrictMode> */}
        <App />
        <Toaster />
      {/* </React.StrictMode> */}
    </BrowserRouter>
  </Provider>
)
