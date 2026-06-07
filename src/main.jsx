import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'

import  './styles/App.css';
// bootstap
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
// fontAwesome icons
import { library } from '@fortawesome/fontawesome-svg-core';
import { faBars, faHouse, faBagShopping, faImage, faPhone } from '@fortawesome/free-solid-svg-icons';
library.add(faBars, faHouse, faBagShopping, faImage, faPhone);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
