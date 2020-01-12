import Animal from './Animal.js'
/* import {animals} from "../Taula/Taula.js" */
import { animals } from './animalType/animals.js'
class Lleo extends Animal
{
    constructor(img){
        super(img);
        this.type = animals.Lleo;
        console.log('Lleo: ',this.type);
    }
    move(actualX, actualY, mida){

        this.setCenterPosition(mida);
        if(this.center === undefined){
            // 2 4 6 8 Even Number
            console.log('Un______AAAAAAAAA_______A_');
            if(actualX < this.centerX2 || actualX > this.centerX1){
                actualX = this.moveX(actualX);
            }
            else{
                actualY = this.moveY(actualY);
            }
        }
        else{
            console.log('66666666666666666666');
            if(actualX < this.center || actualX > this.center){
                actualX = this.moveToCenterX(actualX);
            }
            else{
                actualY = this.moveToCenterY(actualY);
            }
        }
        console.log(actualX, actualY);
        return [actualX, actualY];
    }
    setCenterPosition(mida){
        if(mida % 2 != 0){
            this.center = (mida/2);
        }
        if(mida % 2 == 0){
            this.centerX1 = (mida/2);
            this.centerX2 = this.centerX1 - 1;
            this.centerY1 = (mida/2);
            this.centerY2 = this.centerY1 - 1;
        }
    }
  
    moveX(actualX){
        if(actualX < this.centerX2){
            actualX++;
        }
        if(actualX > this.centerX1){
            actualX--;
        }
        return actualX;
        
    }
    moveY(actualY){
        if(actualY < this.centerY2){
            actualY++;
        }
        if(actualY > this.centerY1){
            actualY--;
        }
        return actualY;
    }
    moveToCenterX(actualX){
        if(actualX < this.center){
            actualX++;
        }
        if(actualX > this.center){
            actualX--;
        }
        return actualX;
    }
    moveToCenterY(actualY){
        if(actualY < this.centerY2){
            actualY++;
        }
        if(actualY > this.centerY1){
            actualY--;
        }
        return actualY;
    }
    transform(animalId){
        if(animalId == animals.Cavall){
            return animals.Tigre;
        }
        if(animalId == animals.Tigre){
            return animals.Cavall;
        }
        if(animalId == animals.Conill){
            return animals.SenseRaça;
        }
        if(animalId == animals.SenseRaça){
            console.log('senseRaçacasenseRaçacasenseRaçacasenseRaçacasenseRaçacasenseRaçacasenseRaçacasenseRaçacasenseRaçacasenseRaçacasenseRaçacasenseRaçacasenseRaçaca')
            return animals.SenseRaça;
        }
        console.log('Lleo Lleo  Lleo Lleo Lleo Lleo Lleo Lleo Lleo Lleo Lleo Lleo ')
        return animals.Lleo;
    }
}

export default Lleo;