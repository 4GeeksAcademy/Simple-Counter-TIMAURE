//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";
import propsTypes from 'prop-types';

// include your styles into the webpack bundle
import "../styles/index.css";

//import your own components
function ContadorSimple(props){
    return (
        <div className="Externo">
             <div className="Reloj">
                <i class="far fa-clock">
             </i></div>
             <div className="Cuarto">{props.digitoCuatro % 10}</div>
             <div className="Tercer">{props.digitoTres % 10}</div>
             <div className="Segundo">{props.digitoDos % 10}</div>
            <div className="Primero">{props.digitoUno % 10}</div>
        </div>
    );
};
ContadorSimple.propsTypes ={
    digitoCuatro : propsTypes.number,
    digitoTres : propsTypes.number,
    digitoDos : propsTypes.number,
    digitoUno: propsTypes.number,
};
let counter = 0;
setInterval(function(){
    const Cuarto = Math.floor(counter/1000);
    const Tercer = Math.floor(counter/100);
    const Segundo = Math.floor(counter/10);
    const Primero = Math.floor(counter/1);
    counter ++;

    ReactDOM.render(<ContadorSimple digitoUno={Primero} digitoDos={Segundo} digitoTres={Tercer} digitoCuatro={Cuarto} />, document.querySelector("#app"));
},1000)




//render your react application

