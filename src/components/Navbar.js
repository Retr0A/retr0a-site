import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import { Button } from 'react-bootstrap'
import './Navbar.css';

function Navbar() {
    const [click, setClick] = useState(false);
    
    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);
    
    return (
    <>
        <nav className="navbar">
            <div className="navbar-container">
                <Link to="/" className="navbar-logo">
                    RETR0A <img src="https://yt3.ggpht.com/6M7P0faVZBJzj1oLE-lvPmetFSgRLXXBNN5N1xXFyGtltHdxgiEq1aRODLk2sajA21xqb2a6fwU=s900-c-k-c0x00ffffff-no-rj"></img>
                </Link>
                <div className="menu-icon" onClick={handleClick}>
                    <i className={click ? 'fas fa-times' : 'fa fa-bars'} />
                </div>
                <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                    <li className="nav-item">
                        <Link to="/" className="nav-links" onClick={closeMobileMenu}>
                            <Button variant="outline-info" className="navbar-button">
                            Home
                            </Button>
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/about" className="nav-links" onClick={closeMobileMenu}>
                            <Button variant="outline-info" className="navbar-button">
                            About
                            </Button>
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/contact" className="nav-links" onClick={closeMobileMenu}>
                            <Button  variant="outline-info" className="navbar-button">
                            Contact
                            </Button>
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/products" className="nav-links" onClick={closeMobileMenu}>
                            <Button variant="outline-info" className="navbar-button">
                            Products
                            </Button>
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>
    </>
  )
}

export default Navbar