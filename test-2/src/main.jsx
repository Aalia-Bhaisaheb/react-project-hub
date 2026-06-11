import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import KalaFoundationHero from './App.jsx'
import Upcoming from './Upcoming.jsx'
import About from './About.jsx'
import Footer from './Footer.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App/>
    <Upcoming/>
    <About/>
    <Footer/>
  </StrictMode>,
)
