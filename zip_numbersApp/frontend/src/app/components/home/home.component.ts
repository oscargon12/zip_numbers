import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  userInput = new FormControl('', [])

  constructor() { }

  ngOnInit(): void {
  }

  getNums(event: Event) {
    event.preventDefault();
    let numGroup = this.userInput.value;
    console.log(numGroup)

    if(numGroup === undefined || numGroup === " " || numGroup === NaN){
      console.log('Debes ingresar un numero')
    }

    let splitNums = numGroup.split(',') //Esto separa el string en varios strings
    //console.log(splitNums)

    //Validar la "e"
    const validateE = splitNums.some(checkE)   // Returns true

    function checkE(e: any) { //Esta es la función que ejecuta el some
    return e === 'e'; //Si algo es === e
    }

    if(validateE){ //Si validateE es true, entonces...
        console.log(validateE)
        console.log('"e" no es un numero')
        return console.log('chao')
    }

    //Parseando y pusheando
    const parsNums = splitNums.map(function(elem: any){ //Esto parsea los items del string
        return parseInt(elem); //Retorna un array de numeros parseados
    });

    //console.log(parsNums)
    const resultNums: any[] = [];
    parsNums.forEach((item: any)=>{
        //Si result no contiene al item, pushea el item a resultNums
        if(!resultNums.includes(item)){
            resultNums.push(item);
        }
    })
    console.log(resultNums)
    
    const numsArr = resultNums;
    
    if(numsArr === undefined){
        console.log('Debes ingresar un numero')
    } else {

        console.log(`Hay ${numsArr.length} numeros, ${Math.floor(numsArr.length/2)} mayores y ${Math.ceil(numsArr.length/2)} menores`)
    
        //Construya un array con los más grandes
        const highNums = numsArr.sort(function (a, b) { return b - a; }).slice(0, Math.floor(numsArr.length/2)); //desde el index 0 hasta la mitad
        console.log(highNums)

        //Construya un array con los menores
        const lowNums = numsArr.sort((a, b) => { return b - a }).slice(Math.floor(numsArr.length/2), numsArr.length); //Desde la mitad hasta el final
        console.log(lowNums)

        //Juntar intercaladamente los arrays
        let zipNumbers = []
        for(let j = 0; j <= numsArr.length; j++){

            const lows = lowNums[j]
            zipNumbers.push(lows);
            const highs = highNums[j]
            zipNumbers.push(highs);
        }

        zipNumbers = zipNumbers.slice(0, numsArr.length); //Eliminar basura
        console.log('\n Numeros agrupados')
        console.log(zipNumbers)
        
    }
  }

}
