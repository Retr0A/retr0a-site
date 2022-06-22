import React from 'react'
import Card from '../Card';
import './default.css';
import HeroJumperLogo from './img/herojumper-logo.png';

function Products() {
    return (
        <div className="products-page">
            <h3>Here are all the games/apps made by me. Of course, I used some help from other people.</h3>

            <Card
                cardImage={HeroJumperLogo}
                cardTitle="Hero Jumper"
                cardText="Hero Jumper is my survival game made in Unity. I have devlogs on my YouTube channel."
            />
            
            <h5 className="copyright-text">©Retr0A. All rights reserved.</h5>
        </div>
    )
}

export default Products