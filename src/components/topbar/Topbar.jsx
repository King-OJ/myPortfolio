import './topbar.scss';
import {Person, Mail} from '@material-ui/icons'

export default function Topbar({menuOpen, setMenuOpen}) {
    return (
        <div className={menuOpen ? "topbar " + "active": "topbar"}>
            <div className="wrapper">
                <div className="left">
                    <a href="#intro" className='logo'>ClemOJ</a>
                    <div className="itemContainer">
                        <Person className="icon" />
                        <span>+234 806 (382)-4618</span>
                    </div>
                    <div className="itemContainer">
                        <Mail className="icon" />
                        <span>clementojigs@hotmail.com</span>
                    </div>
                </div>
                <div className="right">
                    <div className="hamburger" onClick ={()=>setMenuOpen(!menuOpen)}>
                        <span className="line1"></span>
                        <span className="line2"></span>
                        <span className="line3"></span>
                    </div>
                </div>
            </div>
        </div>
    )
}
