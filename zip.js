/* const numArr = [1,4,5,2,9,0,1,1,2]
console.log(numArr)

const removeRepeat = (arr) => {

    const setArr = new Set(numArr) //El Set crea un conjunto a partir de el array, un conjunto no tiene elementos repetidos
    const newArr = Array.from(setArr) //el Array.from convierte en array cualquier elemento iterable, en este caso el conjunto
    console.log(newArr)
}

removeRepeat(numArr) */

//Input: ingresa varios números separados por comas ejem: 1,6,4,7
//Separarlos con split >> Validar la E
//Parsear los números
//Pushearlos en un nuevo array

const userInput = document.querySelector('#numInput'); 
const numGroup = '1,4,6,23,5,7,2,15,3,2,1,1,1,6,7'

//=== Separar y parsear numeros ===
const separateNums = (arr) => {

    let splitNums = numGroup.split(',') //Esto separa el string en varios strings
    //console.log(splitNums)

    //Validar la "e"
    const validateE = splitNums.some(checkE)   // Returns true

    function checkE(e) { //Esta es la función que ejecuta el some
    return e === 'e'; //Si algo es === e
    }

    if(validateE){ //Si validateE es true, entonces...
        console.log(validateE)
        console.log('"e" no es un numero')
        return console.log('chao')
    }

    //Parseando y pusheando
    const parsNums = splitNums.map(function(elem){ //Esto parsea los items del string
        return parseInt(elem); //Retorna un array de numeros parseados
    });

    //console.log(parsNums)
    const resultNums = [];
    parsNums.forEach((item)=>{
        //Si result no contiene al item, pushea el item a resultNums
        if(!resultNums.includes(item)){
            resultNums.push(item);
        }
    })
    //console.log(resultNums)
    return resultNums
}

//=== Ordenar numeros en sierra ===
const orderNums = (arr) =>{
    const numsArr = separateNums(numGroup) //numsArr === resultNums

    if(numsArr === undefined){
        console.log('Debes ingresar un numero')
    } else {

        console.log(`Hay ${numsArr.length} numeros, ${Math.floor(numsArr.length/2)} mayores y ${Math.ceil(numsArr.length/2)} menores`)
    
        //Construya un array con los más grandes
        const highNums = numsArr.sort(function (a, b) { return b - a; }).slice(0, Math.floor(numsArr.length/2)); //desde el index 0 hasta la mitad
        console.log(highNums)

        //Construya un array con los menores
        const lowNums = numsArr.sort((a, b) => { return b - a }).slice(Math.floor(numsArr.length/2, numsArr.length)); //Desde la mitad hasta el final
        console.log(lowNums)

        //Juntemos intercaladamente los arrays
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

orderNums(numGroup)

/* const medico = {
    nombre: 'Juan',
    IPS: 'supersalud',
    ocupado: [
        {desde: '2021-09-28-08:30', hasta: '2021-09-28-09:30'},
        {desde: '2021-09-28-10:30', hasta: '2021-09-28-11:30'},
        {desde: '2021-09-28-12:30', hasta: '2021-09-28-13:30'},
        {desde: '2021-09-28-13:30', hasta: '2021-09-28-14:30'},
        {desde: '2021-09-28-15:30', hasta: '2021-09-28-16:30'}
    ],
} */