import Intro from './components/intro/Intro'
import Portfolio from './components/portfolio/Portfolio'
import Testimonials from './components/testimonials/Testimonials'
import Topbar from './components/topbar/Topbar'
import Works from './components/works/Works'
import './app.scss'
import { useState } from 'react';
import Menu from './components/menu/Menu'
import Contactform from './components/contactform/Contactform'


const App = () => {
    const [menuOpen, setMenuOpen] = useState(true)
    return (
        <div className="app">
            <Topbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
            <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
            <div className="sections">
                <Intro />
                <Portfolio />
                <Works />
                <Testimonials />
                <Contactform />
            </div>
        </div>
    )
}

export default App
