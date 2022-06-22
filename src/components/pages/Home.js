import React from 'react'
import './default.css';

function Home() {
    return (
        <div className="home-page">
            <video autoPlay muted loop id="backgroundVideo">
                <source src="../../../../public/BackgroundVideo.mp4" type="video/mp4"></source>
                    Your browser does not support HTML5 video.
            </video>

            <h1>Indie game developer, Youtube</h1>
            <h2>if you want to learn more about me, go to about page.</h2>

            <h5 className="copyright-text">©Retr0A. All rights reserved.</h5>
        </div>
    )
}

export default Home