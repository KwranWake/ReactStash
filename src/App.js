import React from 'react';
import './Header.sass'
import './Main.sass'
import './Aside.sass'
import './DivMain.sass'
import Header from './Header.js'
import Aside from './Aside.js'


function App() {
  return (
    <div className="Landing">
      <Header />
      <main className= "Main">
        <Aside />
        <div className="Div-Main"></div>
      </main>
      <footer className="Footer"></footer>
    </div>
  );
}

export default App;
