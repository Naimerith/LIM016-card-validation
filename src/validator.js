
const validator = {
    isValid: function (creditCardNumber){
        let numberPosition = creditCardNumber.split("").reverse(); //Ingreso el numero de tarjeta en un array, lo reversa y lo separa en string
        let sum = 0;

        //i inicia en 0 y siempre que i sea menor que arrayInverted.length continua el bucle incrementado en 1
        for(let i=0; i<numberPosition.length; i++){

            //(%operador modulo: residuo) si al dividir i/2 el residuo es diferente a cero, entonces la posicion es impar. array comienza en cero sus posiciones por ende debe contarse. 
            if (i%2 !=0){    
                let newResult = (numberPosition[i]*2); // Multiplica posicion impar x2 

                if(newResult >= 10){ //Si mi resultado de las posiciones impares es mayor o igual a 10 
                    let digitsPosition = newResult.toString().split(""); //el resultado de las posiciones impares metelas es un nuevo array y separalo en string

                    //suma entre si los digitos >=10 que estan en mi variable newResult
                    let arr1 = digitsPosition[0].match(/\d+/g).map(Number); //Convierto en numero el string que esta en la posicion 0 
                    let arr2 = digitsPosition[1].match(/\d+/g).map(Number); //Convierto en numero el string que esta en la posicion 1 
                    let arrF = parseFloat(arr1)+ parseFloat(arr2); //sumo entre si los numeros de cada array 

                    console.log(digitsPosition);
                }
            }
        }
    }
}
 
export default validator; 