import { useState } from 'react';
import Intro from './components/intro/Intro'
import Portfolio from './components/portfolio/Portfolio'
import Testimonials from './components/testimonials/Testimonials'
import Topbar from './components/topbar/Topbar'
import Works from './components/works/Works'
import Menu from './components/menu/Menu'
import Contacts from './components/contacts/Contacts'
import Schedule from './components/schedule/Schedule'
import './app.scss'

const App = () => {
    const [menuOpen, setMenuOpen] = useState(true);

    return (
        <div className="app">
            <Topbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
            <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
            <div className="sections">
                <Intro />
                <Schedule />
                <Works />
                <Testimonials />
                <Contacts />
                <Portfolio />
            </div>
        </div>
    )
}

export default App
