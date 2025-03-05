import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Geth from '../Geth.jsx'
import Login from './Login.jsx'
import Lap from './lap.jsx'
import News from './News.jsx'
import Footers from './Footers.jsx'
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <Geth/>
    <Login/>
    <Lap/>
    <News/>
    <Footers/>
  </StrictMode>,
)
