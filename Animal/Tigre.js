import Animal from './Animal.js'
/* import {animals} from "../Taula/Taula.js" */
import { animals } from './animalType/animals.js'
import { posicio } from '../Taula/posicio.js'

class Tigre extends Animal
{
    constructor(img){
        super(img);
        this.type = animals.Tigre
        console.log('Tigre: ',this.type);
    }
    move(actualX, actualY, mida){
        // Check random direction 

        let [x, y] = this.checkDirection();
        console.log('__X : ', x);
        console.log('__Y : ' ,y);
        actualX = this.changePosition(actualX, x, mida);
        actualY = this.changePosition(actualY, y, mida);
        return [actualX, actualY];
    
    }
    checkDirection(){
        let direction = Math.floor(Math.random() * 4);
        switch(direction){
            case posicio.Top:
                console.log('Top');
                return [-4, 0];
            case posicio.Left:
                console.log('Left');
                return [0, -4];
            case posicio.Bottom:
                console.log('Bottom')
                return [4, 0];
            case posicio.Right:
                console.log('Right')
                return [0, 4];
        }
    }
    changePosition(actualX, x,  mida){
        if(x != 0){
            if(x > 0){
                //Bottom Right good
                while(x > 0){
                    actualX++;
                    x--;
                    if(actualX == mida){
                        actualX = 0;
                    }
                }
            }
            if(x < 0){
                //Top Left good
                while(x < 0){
                    console.log('top- actualX: ',actualX);
                    actualX--;
                    x++;
                    if(actualX < 0){
                        console.log('mida: ',mida);
                        actualX = mida-1;
                    }
                }
            }
        }
        return actualX;
    }
    transform(animalId){
        if(animalId == animals.Lleo){
            return animals.Cavall;
        }
        if(animalId == animals.Conill){
            return animals.Lleo;
        }
        if(animalId == animals.Cavall){
            return animals.Conill;
        }
        if(animalId == animals.SenseRaça){
            return animals.SenseRaça;
        }
        return animals.Tigre;
    }
}

export default Tigre;