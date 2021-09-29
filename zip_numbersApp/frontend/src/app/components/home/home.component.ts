import { style } from '@angular/animations';
import { Component, OnInit, ViewChild , Renderer2, ElementRef} from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  @ViewChild('asResult') numResult!: ElementRef; //Defino la variable numResult capturando elemento del DOM

  userInput = new FormControl('', [])

  constructor(private renderer2: Renderer2) { } //Uso el Renderer 2 para interactuar con el DOM

  ngOnInit(): void {
  }

  //Input: ingresa varios números separados por comas ejem: 1,6,4,7
  //1 Separarlos con split
  //2 Validar que solo sean numeros
  //3 Parsear los números
  //4 Separar el array entre números grandes y pequeños
  //5 Pushearlos en un nuevo array intercaladamente

  getNums(event: Event) {
    event.preventDefault();
    let numGroup = this.userInput.value;
    console.log(numGroup)

    //1 Separarlos con split
    let splitNums = numGroup.split(',') //Esto separa el string en varios strings

    //la variable numResult capturando elemento del DOM
    const asResult = this.numResult.nativeElement

    //2 == Validar que solo sean numeros ==
    function validateNums(num: any){
        let reg = /^[0-9]+$/;
        return reg.test(num);
    }
    let result1 = splitNums.every(validateNums);

    if(!result1){
      console.log('Solo debes ingresar numeros separados por comas')
      //Imprimir resultado fallido en DOM
      this.renderer2.setProperty(asResult, 'innerHTML', 'Solo debes ingresar numeros separados por comas')
      this.renderer2.setStyle(asResult, 'color', 'red')
    } else {

      //== 3 Parseando los items del array ==
      const parsNums = splitNums.map(function(elem: any){ //Esto parsea los items del string
          return parseInt(elem); //Retorna un array de numeros parseados
      });
  
      //== 3.5 Eliminando repetidos ==
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
          this.renderer2.setProperty(asResult, 'innerHTML', 'Debes ingresar un número')
      } else {
  
      //4  == Separar el array entre grandes y pequeños ==
          console.log(`Hay ${numsArr.length} numeros, ${Math.floor(numsArr.length/2)} mayores y ${Math.ceil(numsArr.length/2)} menores`)
      
          //Construya un array con los más grandes
          const highNums = numsArr.sort(function (a, b) { return b - a; }).slice(0, Math.floor(numsArr.length/2)); //desde el index 0 hasta la mitad
          console.log(highNums)
  
          //Construya un array con los menores
          const lowNums = numsArr.sort((a, b) => { return b - a }).slice(Math.floor(numsArr.length/2), numsArr.length); //Desde la mitad hasta el final
          console.log(lowNums)
  
      //5 == Pushearlos en un nuevo array intercaladamente ==
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
          
          //Imprimir resultado exitoso en DOM
          this.renderer2.setProperty(asResult, 'innerHTML', `${zipNumbers}`)
          this.renderer2.setStyle(asResult, 'color', '#3f51b5')
          this.renderer2.addClass(asResult, 'num-result')
      } //Cierre del else 2
    } //Cierre del else 1
  } //Cierre de la función principal
}
