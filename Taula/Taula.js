import Animal from '../Animal/Animal.js';
import Cavall from '../Animal/Cavall.js';
import Conill from '../Animal/Conill.js';
import Lleo from '../Animal/Lleo.js';
import SenseRaça from '../Animal/SenseRaça.js';
import Tigre from '../Animal/Tigre.js';
import { animals } from '../Animal/animalType/animals.js';

export default class Taula {
    constructor(mida) {
        this.mida = mida;
        this.first = true;
    }

    generarTaula() {
        let taula = document.createElement('table');
        taula.id = 'taulla';

        for (let i = 0; i < this.mida; i++) {
            let fila = taula.insertRow();
            for (let j = 0; j < this.mida; j++) {
                let cell = fila.insertCell();
                //cell.style.fontSize = '1.5rem';
                cell.style.border = '1px solid';
                cell.style.padding = '0.5rem';
            }
        }
        return taula;
    }

    inicializarAnimals(taula1) {
        console.log('generarAnimal ', taula1);
        let buit = true;
        let numeroAleatoriFila;
        let numeroAleatoriColumna;
        let e = 0;
        let animalType;

        while (e < this.mida) {

            numeroAleatoriFila = this.getNumeroEntreUnIMidaDeLaTaula();
            numeroAleatoriColumna = this.getNumeroEntreUnIMidaDeLaTaula();

            for (let i = 0, row; row = taula1.rows[i]; i++) {
                for (let j = 0, col; col = row.cells[j]; j++) {
                    if (i == numeroAleatoriFila && j == numeroAleatoriColumna) {
                        if (row.cells[j].innerHTML === "") {
                            animalType = this.generarAnimal();
                            console.log(animalType);
                            let span = document.createElement('span');
                            span.classList.add(animalType.type);
                            //row.cells[j].innerHTML += animalType;
                            row.cells[j].appendChild(span);
                            span.innerHTML = animalType.img;
                            console.log(span);
                            e++;
                            buit = false;
                            break;
                        }
                    }
                }
                if (buit) {
                    buit = true;
                    break;
                }
                continue;
            }

        }
        console.log(taula1);
    }

    getNumeroEntreUnIMidaDeLaTaula() {
        return Math.floor(Math.random() * this.mida);
    }

    generarAnimal() {
        //  To Do, change variable name
        let sense = Math.random() >= 0;

        if (sense) {
            let animalId = Math.floor(Math.random() * 5);
            switch (animalId) {
                case animals.Cavall:
                    return new Cavall("🐴");
                case animals.Conill:
                    return new Conill("🐰");
                case animals.Tigre:
                    return new Tigre("🐯");
                case animals.SenseRaça:
                    return new SenseRaça("🔒");
                case animals.Lleo:
                    return new Lleo("🦁");
            }
        }

    }

    nextIteracio(taulaReference) {
        //let taulaNext = taulaReference.cloneNode(true);
       // let taula = document.querySelectorAll('#taulla')[0];
        //console.log('QueryAll ', taula);
        //let taulaNext = taula.cloneNode(true);
        let taulaNext = taulaReference.cloneNode(true);
       
        console.log('taulaReference ', taulaReference);
        console.log('taulaNext ',taulaNext);
        for (let i = 0, row; row = taulaReference.rows[i]; i++) {
            for (let j = 0, col; col = row.cells[j]; j++) {

                if (row.cells[j].innerHTML !== "") {

                    //console.log('aaa', row.cells[j].childNodes[0])
                    let animalId = row.cells[j].childNodes[0].getAttribute('class');
                    //console.log('animal id: ', animalId);
                    let animal = this.getAnimal(animalId);
                    //console.log('id: ', animal);

                    let [x, y] = animal.move(i, j, this.mida);
                    console.log('actual x: ', x);
                    console.log('actual y: ', y);
                    console.log(row.cells[j].childNodes[0]);
                    this.changeActualTaula(taulaNext, i, j, x, y, animalId);

                }

            }
            console.log('--------------------------------------------------------------------');
            console.log(taulaNext);
        }
        if(this.first){
            this.first = false;
            console.log('FFFFFFFFFFFFFFFFFFFFF');
            return [taulaReference, taulaNext];
        }
        taulaReference = taulaNext.cloneNode(true);
        console.log('AAAAAA, actyalReference ',taulaReference);
        return [taulaReference, taulaNext];
    }

    getAnimal(id) {
        console.log(id);
        if (id == animals.Cavall) {
            return new Cavall("🐴");
        }

        if (id == animals.Conill) {
            return new Conill("🐰");
        }

        if (id == animals.Tigre) {
            return new Tigre("🐯");
        }

        if (id == animals.SenseRaça) {
            return new SenseRaça("🔒");
        }

        if (id == animals.Lleo) {
            return new Lleo("🦁");
        }

        return false;

    }

    changeActualTaula(taulaNext, i, j, x, y, animalId) {

        for (let k = 0, row; row = taulaNext.rows[k]; k++) {
            for (let l = 0, col; col = row.cells[l]; l++) {
                if (k == i && l == j) {
                    console.log(i, j);
                    console.log(k, l)
                    console.log('MUESTRAMELO!');
                    let a = row.cells[l].childNodes[0];
                    console.log('Node ', a);
                    a.remove();

                }
                /* if (k == x && l == y) {
                    console.log(k, l);
                    console.log(x, y);
                    console.log('BBBBBBBBBBBBBBBBBBBB');
                    console.log(row.cells[l].childNodes[0]);

                    if (row.cells[l].childNodes[0] == undefined) {

                        console.log('cccccccccc');

                        let span = document.createElement('span');
                        console.log('span creado');
                        span.classList.add(animalId);
                        row.cells[j].appendChild(span);
                        let animal = this.getAnimal(animalId);
                        span.innerHTML = animal.img;
                    }
                    else {
                        let animalActualId = row.cells[l].childNodes[0].getAttribute('class');
                        let animal = this.getAnimal(animalActualId);
                        let newAnimalId = animal.transform(animalId);
                        animal = this.getAnimal(newAnimalId);
                        row.cells[l].childNodes[0].innerHTML = animal.img;
                    }
                } */

            }
        }
        for (let n = 0, row; row = taulaNext.rows[n]; n++) {
            for (let m = 0, col; col = row.cells[m]; m++) {

                if (n == x && m == y) {
                    console.log(n, m);
                    console.log(x, y);
                    console.log('BBBBBBBBBBBBBBBBBBBB');
                    console.log(row.cells[m].childNodes[0]);

                    if (row.cells[m].childNodes[0] == undefined) {

                        console.log('cccccccccc');

                        let span = document.createElement('span');
                        console.log('span creado');
                        span.classList.add(animalId);
                        row.cells[m].appendChild(span);
                        let animal = this.getAnimal(animalId);
                        span.innerHTML = animal.img;
                    }
                    else {
                        let animalActualId = row.cells[m].childNodes[0].getAttribute('class');
                        let animal = this.getAnimal(animalActualId);
                        let newAnimalId = animal.transform(animalId);
                        animal = this.getAnimal(newAnimalId);
                        
                        row.cells[m].childNodes[0].innerHTML = animal.img;
                    }
                }

            }
        }
    }

    /*  calcularPosnckoNova(x, y, actualX, actualY)
     {   
         while(x > 0){
             if(actualX === this.mida){
                 actualY++;
                 actualX=0;
             }
             else{
                 x--;
             }
             
         }
         
         
     } */


}



/* import {animals} from '../Animal/animalType/animals.js' */
/* export const animals = {
    Cavall:0,
    Conill:1,
    Tigre:2,
    SenseRaça:3,
    Lleo:4,
} */


//if (row.cells[j].innerHTML === "") {
  //  console.log(' ');
    //animal = this.generarAnimal(row.cells[j]);
    //animal = this.generarAnimal();

    //console.log(animal.getImg);

/*  if (animal instanceof SenseRaça) {
     console.log('Sin raza');
 } */

/* const span = document.createElement("span")
span.innerHTML=animal.getImg;
console.log('Type animal: ',animal.type)
console.log('animal: ',animal.img)
span.classList.add(animal.type)
row.cells[j].innerHTML += span; */
/* console.log(animal)
 console.log(row.cells[j].innerHTML.img); */
    //row.cells[j].innerHTML += animal.getImg;

    // ???
    //cells[j].innerHTML+= animal.getImg;
/*    e++;
   buit = false;
   break;
} */








/* generarTaula(){
       let taula = document.createElement('table');

       for (let i = 0; i < this.mida; i++) {
           let fila = taula.insertRow();
           for (let j = 0; j < this.mida; j++) {
               let cell = fila.insertCell();
               cell.appendChild(document.createTextNode('🐰'));
               cell.style.fontSize = '2rem';
               cell.style.border = '1px solid';
               cell.style.padding = '0.5rem';
           }
       }
       document.getElementById('taula1').appendChild(taula);
   } */
