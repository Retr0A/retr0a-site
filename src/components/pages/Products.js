import React from 'react'
import Card from '../Card';
import './default.css';
import HeroJumperLogo from './img/herojumper-logo.png';

function Products() {
    return (
        <div className="products-page">
            <h3 className="w3-container w3-animate-bottom">Here are all the games/apps made by me. Of course, I used some help from other people.</h3>

            <div className="products-cards w3-container w3-animate-bottom">
                <Card
                    cardImage={HeroJumperLogo}
                    cardTitle="Hero Jumper"
                    cardText="Hero Jumper is my survival game made in Unity. I have devlogs on my YouTube channel."
                    cardLink="/products/herojumper"
                />
            </div>
            
            <h5 className="copyright-text w3-container w3-animate-bottom">Copyright &copy; Retr0A 2022. All rights reserved.</h5>
        </div>
    )
}

export default Products