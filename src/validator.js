//VALIDAR EL NUMERO DE TARJETA DE CREDITO INGRESADO EN EL FORMULARIO (ALGORITMO)
const validator = {
    isValid: function (numberPosition){
        numberPosition = numberPosition.split("").reverse(); //Ingreso el numero de tarjeta en un array, lo reversa y lo separa en string
    
        let suma = 0; // Guardo el resultado de las posiciones pares 

       //recorro cada posicion del numero de tarjeta de 1 en 1 
        for (let i=0; i<numberPosition.length; i++){
            //Si posicion i/2, su residuo es diferente a cero es impar 
            if(i%2 !=0){
                let result = parseInt(numberPosition[i])*2; //multiplico cada posicion por 2 (recuerda que el array comienza a contar en 0)

                //Si en mi resultado hay digitos >=10, convierto en string y los separo
                if(result >=10){
                    let parPosition = result.toString(). split("");
                    let digitosTotal = 0; //guardo el resultado 

                    //Recorro los digitos de las posiciones pares 
                    for(let j=0; j<parPosition.length; j++){
                        digitosTotal = digitosTotal + parseInt(parPosition[j]); //Los convierto a numeros y sumo entre si 
                    }
                    // guardo el nuevo resultado de sumar los numeros entre si 
                    result = digitosTotal; 
                }   
                suma = suma + result; // Ingreso el resultado en mi variable global para luego sumar con el resto de los digitos de la tarjeta 

                //Si no son mayores a 10 recorre el arreglo y guarda los digitos en la var suma 
            } else{
                suma = suma + parseInt(numberPosition[i]);
            }
        }
        //Mi resultado final, sera el residuo de mi var suma entre 10 
        let resultadoFinal = suma % 10; 

        //Si mi resutado es igual a cero (no tiene residuo) la tarjeta es valida, sino es invalida. 
            if(resultadoFinal ==0)
            return true;
            else
            return false;
            },

// ENMASCARAR LOS ULTIMOS 4 DIGITOS DE LA TARJETA DE CREDITO 
    maskify: function(numberPosition) {
        let num = Array.from(numberPosition); //paso mi parametro a un arreglo con el metodo Array.from()

        //El ciclo va a recorrer cada posición de una en una, y va a enmascar todos los digitos menos los ultimos 4 digitos
              for (let i = 0; i <numberPosition.length -4; i++) {
                num[i]="#"; 
        }
        return num.join("");  //retorna el numero de la tarjeta devuelto en string (.join)
    }
}

export default validator;