import '../default.css';
import './Product.css';

import { Button } from 'react-bootstrap';

import Logo from '../img/herojumper-logo.png'

function HeroJumper() {
    return (
        <div className="product-page">

            <div className="top-content">
                <img src={Logo} className='product-icon' alt="product-icon"></img>
                
                <div>
                    <h2>Hero Jumper</h2>
                    <Button variant="success">Go to store page</Button>
                </div>
            </div>

            <p>Hero Jumper is my survival game made in Unity. In Hero Jumper you survive in a forest. You collect resources from tree, rocks and more.</p>

            <h5 className="copyright-text w3-container w3-animate-bottom">Copyright &copy; Retr0A 2022. All rights reserved.</h5>
        </div>
    )
}

export default HeroJumper