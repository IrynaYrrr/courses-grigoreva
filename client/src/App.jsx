import './app.scss'
import { useState } from 'react';
import Intro from './components/intro/Intro'
import Topbar from './components/topbar/Topbar'
import Menu from './components/menu/Menu'
import Contacts from './components/contacts/Contacts'
import {Schedule1, Schedule2, Schedule3} from './components/schedule/Schedule'
import Certificate from './components/certificatee/Certificate';
import Seminars from './components/seminars1/Seminars';
import Reviews from './components/reviews/Reviews';
import Students from './components/students/Students';

const App = () => {
    const [menuOpen, setMenuOpen] = useState(true);

    return (
        <div className="app">
            <Topbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
            <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
            <div className="sections">
                <Intro />
                <Schedule1 />
                <Schedule2 />
                <Schedule3 />
                <Seminars />
                <Certificate />
                <Students />
                <Reviews />
                <Contacts />
            </div>
        </div>
    )
}

export default App
