import React from 'react';
import './App.css';
import { MenuHorizontal } from './domain/components/basics/menuHorizontal';

const App: React.FC = () => {
  return (
    <div className="App">
      <header className="App-header">
        <div className="logo">
          logo
        </div>
        <MenuHorizontal/>
      </header>
      <section className="App-Body">

      </section>
      <footer className="footer">Portfolio de María Pereda</footer>
    </div>
  );
}

export default App;
