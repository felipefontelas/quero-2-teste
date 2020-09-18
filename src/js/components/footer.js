import React, { Component } from 'react';
import facebook from '../../images/facebook.svg';
import instagram from '../../images/instagram.svg';
import youtube from '../../images/youtube.svg';
import twitter from '../../images/twitter.svg';


class Footer extends Component {
    render () {
        return (
            <footer className="App-footer">
                <div className="App-footer__text">
                    Criado por Felipe Fontelas para Quero 2 Pay.
                </div>
                <div className="App-footer__midia">
                    <a target="_blank" href="https://www.facebook.com/felipe.fontelas/"><img src={facebook} className="App-footer__midia--facebook" alt="facebook"/></a>
                    <a target="_blank" href="https://www.instagram.com/felipe.fontelas"><img src={instagram} className="App-footer__midia--instagram" alt="instagram"/></a>
                    <a target="_blank" href="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstleyVEVO"><img src={youtube} className="App-footer__midia--youtube" alt="youtube"/></a>
                    <a target="_blank" href="https://twitter.com/elonmusk"><img src={twitter} className="App-footer__midia--twitter" alt="twitter"/></a>
                </div>
            </footer>
        )
    }
}

export default Footer;