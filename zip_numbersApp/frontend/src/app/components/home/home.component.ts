import { Component, OnInit } from '@angular/core';
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

  generateAlert() {// Las funciones se escriben así 
    console.log('Holaaaa')
		alert('Mundo') 
	}

  getNums(event: Event) {
    event.preventDefault();
    let numGroup = this.userInput.value;
    console.log(numGroup)

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
    
  }

}
