import Animal from './Animal.js'
/* import {animals} from "../Taula/Taula.js" */
import { animals } from './animalType/animals.js'
class Conill extends Animal
{
    constructor(img){
        super(img);
        this.type = animals.Conill
        console.log('Conill: ',this.type);
    }
    move(actualX, actualY, mida){
        actualX = this.randomPosition(mida);
        actualY = this.randomPosition(mida);
        return [actualX, actualY];
    }
    randomPosition(mida){
        return Math.floor(Math.random() * mida);
    }
    transform(animalId){
        if(animalId == animals.Cavall){
            return animals.SenseRaça;
        }
        if(animalId == animals.Tigre){
            return animals.Lleo;
        }
        if(animalId == animals.Lleo){
            return animals.SenseRaça;
        }
        if(animalId == animals.SenseRaça){
            return animals.SenseRaça;
        }
        return animals.Conill;
    }
}

export default Conill;