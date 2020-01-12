import Taula from '../Taula/Taula.js';


const btnIniciar = document.getElementById('iniciar');
const btnNext = document.getElementById('Següent');
let taulaReference;
let taula;
let t1;
let t2;
let taula2;

btnIniciar.addEventListener("click", ()=> {
    //Preguntar mida de la taula
    let mida = introduirMida();

    //Instanciar Taula
    taula = new Taula(mida);
    
    //GenerarTaula
    t1 = taula.generarTaula();
    t2 = taula.generarTaula();

    //Imprimir a la vista
    document.getElementById('taula1').appendChild(t1);
    document.getElementById('taula2').appendChild(t2);
    
    let taula1 = document.getElementById('taula1').firstChild;
    
    //Inicializar Animals
    taula.inicializarAnimals(taula1);
    //taulaReference = taula1;
    taulaReference = taula1;
    console.log(taulaReference);
    taula2 = document.getElementById('taula2');
});


btnNext.addEventListener('click', ()=>{
    
    
    [t1, t2]= taula.nextIteracio(taulaReference);
    taula2.innerHTML = "";
    taula2.appendChild(t2);
    //taulaReference = t2.cloneNode(true);
    document.getElementById('taula1').innerHTML = "";
    document.getElementById('taula1').appendChild(t1);
    

    console.log('new TaulaReference',taulaReference);
    console.log('||||||||||||||||||||||||||||||||||||||');
    console.log('||||||||||||||||||||||||||||||||||||||');
    console.log('||||||||||||||||||||||||||||||||||||||');
    console.log('t1 ',t1);
    console.log('t2 ',t2);
    let a = document.querySelectorAll('#taulla')[1];
    taulaReference = t1;
    console.log('Actual TaulaReference', taulaReference);
})



function introduirMida() {
    let adecuat = false
    let mida;
    while(!adecuat){
        mida = prompt('Introdueix la mida major que 3');
        if(mida > 3 ){
            adecuat = true;
        }
    }
    return mida;
}