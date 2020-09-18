import React from 'react';
import '../sass/App.scss';
import Header from './components/header';
import Footer from './components/footer';
import Sidenav from './components/sidenav';
import Home from './page/home';

function App() {
  return (
    <div className="App">
      <Sidenav />
      <Header />
      <Home />
      <Footer />
    </div>
  );
}

export default App;
