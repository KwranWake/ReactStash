import React from 'react'
import './Header.sass'
import logo from './Resources/logostash.svg'

function Header(){
    return(
        <header className= "Header">
        <img src={logo} className= "Header-Logo"></img>
        <div className="Div-Header">
          <button>Organiza tu Stash</button>
          <button>Comparte con tus amigos</button>
          <button>Ayuda</button>
          <button className="Profile-Button">Mi Perfil</button>
        </div>
      </header>
    )
}
export default Header