import React from 'react';
import './App.css';
import { MenuHorizontal } from './domain/components/basics/menuHorizontal';
import { ContainerBody } from './domain/components/container/containerBody';
import { CoverPage } from './app/components/coverPage'

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
          <CoverPage title="María Pereda" subtitle="UI/UX Engineer"/>
          
        </ContainerBody>
      </section>
      <footer className="footer">Portfolio de María Pereda</footer>
    </div>
  );
}

export default App;
