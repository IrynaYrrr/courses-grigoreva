import './app.scss'
import { useState } from 'react';
import Intro from './components/intro/Intro'
import Testimonials from './components/testimonials/Testimonials'
import Topbar from './components/topbar/Topbar'
import Menu from './components/menu/Menu'
import Contacts from './components/contacts/Contacts'
import Schedule from './components/schedule/Schedule'
import Comments from './components/comments/Comments'
import Certificate from './components/certificatee/Certificate';
import Seminars from './components/seminars/Seminars';

const App = () => {
    const [menuOpen, setMenuOpen] = useState(true);

    return (
        <div className="app">
            <Topbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
            <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
            <div className="sections">
                <Intro />
                <Schedule />
                <Seminars />
                <Testimonials />
                <Comments />
                <Certificate />
                <Contacts />
            </div>
        </div>
    )
}

export default App
