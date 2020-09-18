import React, { Component } from 'react';
import facebook from '../../images/facebook.svg';
import instagram from '../../images/instagram.svg';
import youtube from '../../images/youtube.svg';
import twitter from '../../images/twitter.svg';
import search from '../../images/search.svg';

class Sidenav extends Component {
    render () {
        return (
            <div id="sidenav" className="sidenav">
                <button className="closebtn" onClick={closeNav}>Voltar para home</button>
                <input type="text" className="searchbar" id="search" name="search" placeholder="Buscar" />
                <button className="searchButton" onClick={searchData}>
                    <img src={search} alt="search"  />
                </button>
                <a className="sidenav-item" href="/">Home</a>
                <a className="sidenav-item" href="/contact" onClick={openContact}>Contato</a>
                <a className="sidenav-item" href="/about" onClick={openAbout}>Sobre</a>
                <div className="sidenav__Footer">
                    Criado por Felipe Fontelas para Quero 2 Pay
                    <div className="App-footer__midia">
                    <a target="_blank" href="https://www.facebook.com/felipe.fontelas/"><img src={facebook} className="App-footer__midia--facebook" alt="facebook"/></a>
                    <a target="_blank" href="https://www.instagram.com/felipe.fontelas"><img src={instagram} className="App-footer__midia--instagram" alt="instagram"/></a>
                    <a target="_blank" href="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstleyVEVO"><img src={youtube} className="App-footer__midia--youtube" alt="youtube"/></a>
                    <a target="_blank" href="https://twitter.com/elonmusk"><img src={twitter} className="App-footer__midia--twitter" alt="twitter"/></a>
                    </div>
                </div>
            </div>
        )
    }
}

function openContact (e) {
    e.preventDefault()
    alert('Telefone: (16) 991704195 \r\n Email: felipefontelas.123@gmail.com \r\n Instagram: @felipe.fontelas');
}

function openAbout (e) {
    e.preventDefault()
    alert(`Projeto feito para o Teste da Quero 2 Pay
    Foi feito utilizando ReactJS e Sass
    Espero que gostem do layout, tentei inserir
    o maximo de informações sobre os filmes`)
}

function closeNav() {
    document.getElementById("sidenav").style.width = "0";
}

function searchData() {
    console.log(document.getElementsByName('search')[0].value);
    window.location.href = "/?search=" + document.getElementsByName('search')[0].value;
}

export default Sidenav;