import Animal from './Animal.js'
/* import {animals} from "../Taula/Taula.js" */
import { animals } from './animalType/animals.js'
class SenseRaça extends Animal
{
    constructor(img){
        super(img);
        this.type = animals.SenseRaça
        console.log('Sense: ',this.type);
    }

    move(actualX, actualY, mida){
        let [x, y] = [0, 1];
        let posicioX = actualX;
        console.log('Posicio actual X = ',actualX);
        console.log('Posicio actual Y = ',actualY);
        while(y > 0){
            console.log('mida ', mida)
            actualY++;
            y--;
            if(actualY == mida){
                actualY = 0;
                actualX++;
                console.log('www',actualX)
                if(actualX == mida){
                    actualX = 0;
                }
            }
        }
        return [actualX, actualY];
    }
    transform(animalId){
        return animals.SenseRaça;
    }
    
}

export default SenseRaça;
