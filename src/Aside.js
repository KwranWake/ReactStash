import React from 'react'
import './Aside.sass'
import text from './Resources/texto.svg'


function Aside(){
    return(
        <div className="Aside">
            <img src={text} className="Img-Text"></img>
            <h2 className="Intro-text">Reinventamos la manera en la que almacenas y tienes acceso a tus cosas.¡Ordena tus objetos, ropa y gadgets a través de un inventario digital que también puedes compartir con tus amigos!</h2>
            <h3 className="Greet-text">Deja que nosotros nos encarguemos de recibir, almacenar y repartir tus cosas.</h3>
            <button className="Register-Button">¡Comienza aquí!</button>
        </div>
    )
}
export default Aside