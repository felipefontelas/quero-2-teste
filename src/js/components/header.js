import React, { Component } from 'react';
import logo from '../../images/clapperboard.svg';
import search from '../../images/search.svg';
import menu from '../../images/menu-aberto.svg';

class Header extends Component {
    render () {
        return (
            <header className="App-header">
                <div className="App-header__burger" id="app-header__burger" onClick={openMenu}>
                    <img src={menu} alt="menu" />
                </div>
                <a className="App-header__title" href="/"> 
                    <img src={logo} className="App-header__title--logo" alt="logo-clapperboard" />
                    Cinematique
                </a>
                <div className="App-header__menu">
                    <a href="/">Home</a>
                    <a href="/contact" id="contact" onClick={openContact}>Contato</a>
                    <a href="/about" id="about" onClick={openAbout}>Sobre</a>
                    <button onClick={openSearch}>
                        <img src={search} className="App-header__menu--search" alt="search" />  
                    </button>
                </div>
                <div className="App-header__search" id="searchDesktop">
                    <input type="text" className="searchbar" id="searchDesktop" name="searchDesktop" placeholder="O que você procura?" autofocus="true" />
                    <button className="searchbutton" id="searchbutton" onClick={searchData}>
                        Buscar
                    </button>
                </div>
                <div className="App-header__contact" id="contact_modal">
                    <p>Telefone: (16) 991704195</p>
                    <p>E-mail: felipefontelas.123@gmail.com</p>
                    <p>Instagram: @felipe.fontelas</p>
                </div>
                <div className="App-header__about" id="about_modal"> 
                    <p>
                        Projeto feito para o Teste da Quero 2 Pay
                        Foi feito utilizando ReactJS e Sass
                        Espero que gostem do layout, tentei inserir
                        o maximo de informações sobre os filmes
                    </p>
                </div>
            </header>
        )
    }
}

function openContact(e) {
    e.preventDefault();
    if(document.getElementById("contact_modal").style.height === '0px' || document.getElementById("contact_modal").style.height === ''){
        document.getElementById("contact_modal").style.height = "105px";
        document.getElementById("contact_modal").style.border = "0.5px solid white";
        document.getElementById("contact_modal").focus();
    } else{
        document.getElementById("contact_modal").style.height = "0px";
        document.getElementById("contact_modal").style.border = "none";
    }
}

function openAbout(e) {
    e.preventDefault();
    if(document.getElementById("about_modal").style.height === '0px' || document.getElementById("about_modal").style.height === ''){
        document.getElementById("about_modal").style.height = "105px";
        document.getElementById("about_modal").style.border = "0.5px solid white";
        console.log('yes')
    } else {
        document.getElementById("about_modal").style.height = "0px";
        document.getElementById("about_modal").style.border = "none";
    }
}

function openMenu() {
    document.getElementById("sidenav").style.width = "250px";
}

function searchData() {
    console.log(document.getElementsByName('searchDesktop')[0].value);
    window.location.href = "/?search=" + document.getElementsByName('searchDesktop')[0].value;
}

function openSearch() {
    if(document.getElementById("searchDesktop").style.height === '0px' || document.getElementById("searchDesktop").style.height === ''){
        document.getElementById("searchDesktop").style.height = "55px";
        document.getElementById("searchDesktop").style.border = "0.5px solid white";
        document.getElementById("searchDesktop").focus();
    } else{
        document.getElementById("searchDesktop").style.height = "0px";
        document.getElementById("searchDesktop").style.border = "none";
    }
}

export default Header;