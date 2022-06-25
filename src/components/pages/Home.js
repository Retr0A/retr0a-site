import React from 'react'
import './default.css';

function Home() {
    return (
        <div className="home-page">
            <video autoPlay muted loop id="backgroundVideo">
                <source src="../../../../public/BackgroundVideo.mp4" type="video/mp4"></source>
                    Your browser does not support HTML5 video.
            </video>

            <h1 className="w3-container w3-center w3-animate-bottom">Game Developer, Youtube</h1>
            <h2 className="w3-container w3-center w3-animate-bottom">if you want to learn more about me, go to about page.</h2>

            <h5 className="copyright-text w3-container w3-animate-bottom">Copyright &copy; Retr0A 2022. All rights reserved.</h5>
        </div>
    )
}

export default Home