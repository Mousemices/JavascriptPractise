import Animal from './Animal.js'
/* import {animals} from "../Taula/Taula.js" */
import { animals } from './animalType/animals.js'
class Cavall extends Animal
{
    constructor(img){
        super(img);
        this.type = animals.Cavall
        console.log('Cavall: ',this.type);
    }

    move(actualX, actualY, mida){
        let [x, y] = [2, 1];
        while(y > 0){
            actualY++;
            y--;
            if(actualY == mida) actualY = 0;
        }

        while(x > 0){
            actualX++;
            x--;
            if(actualX == mida){
                actualX = 0;
            }
        }
        
        return [actualX, actualY];
    }
    transform(animalId){
        if(animalId == animals.Tigre){
            return animals.Conill;
        }
        if(animalId == animals.Lleo){
            return animals.Tigre;
        }
        if(animalId == animals.Conill){
            return animals.SenseRaça;
        }
        if(animalId == animals.SenseRaça){
            return animals.SenseRaça;
        }
        return animals.Cavall;
    }
}

export default Cavall;