import React from 'react';
import './App.css';
import { MenuHorizontal } from './domain/components/basics/menuHorizontal';
import { ContainerBody } from './domain/components/container/containerBody';
import { Home } from './app/views/Home';
import { Portfolio } from './app/views/Portfolio'
import { About } from './app/views/About';


const App: React.FC = () => {
  return (
    <div className="App">
      <header className="App-header">
        <div className="logo">
          <img alt="logo" src={`${process.env.PUBLIC_URL}/img/logo.png`}/>
        </div>
        {/* <MenuHorizontal/> */}
      </header>
      <section className="App-Body">
        <ContainerBody>
          <Home/>
          <Portfolio header="My Works"/>
          <About/>
        </ContainerBody>
      </section>
      <footer className="footer">Designed and coded by María Pereda Escudero</footer>
    </div>
  );
}

export default App;
