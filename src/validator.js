
/* ***** Función para Validar Tarjeta ***** */
const validator = {
    isValid: function (numberPosition) {
        numberPosition = numberPosition.split("").reverse(); //.split devuelve un nuevo array en reversa, separarando los valores en cadenas 
        let addAllDigits = 0; // Guardo el resultado de las posiciones pares 

        for (let i = 0; i < numberPosition.length; i++) {        //recorro cada posicion del numero de tarjeta de 1 en 1 
            if (i % 2 != 0) {             //Si posicion i/2, su residuo es diferente a cero esta en posicion par (recuerda que el array comienza en 0)        
                let resultPositionEven = parseInt(numberPosition[i]) * 2; //multiplico cada posicion por 2 (recuerda que el array comienza a contar en 0)

                if (resultPositionEven >= 10) {                //Si en mi resultado hay digitos >=10, .split devuelve un nuevo array separando los digitos en string (toString)
                    let digitsTwo = resultPositionEven.toString().split("");
                    let totalDigits = 0; //inicializo en cero para guardar datos posteriores 

                    for (let j = 0; j < digitsTwo.length; j++) {                     //Recorro los digitos de las posiciones pares 
                        totalDigits += parseInt(digitsTwo[j]); //Los convierto a numeros y sumo entre si los dos digitos
                    }
                    resultPositionEven = totalDigits; //Agrego el total de sumar los dos digitos entre si al resto de los digitos de la posicion par  
                }
                addAllDigits = addAllDigits + resultPositionEven;  //sumo todos los digitos de la posicion par 

            } else {  //Si no son mayores a 10 recorre el arreglo y guarda los digitos en la var suma 
                addAllDigits = addAllDigits + parseInt(numberPosition[i]);
            }
        }
        let finalScore = addAllDigits % 10; //Mi resultado final, sera el residuo de mi var suma de todos los digitos entre 10 

        //Si mi resutado es igual a cero (no tiene residuo) la tarjeta es valida, sino es invalida. 
        if (finalScore == 0)
            return true;
        else
            return false;
    },


    // ENMASCARAR LOS ULTIMOS 4 DIGITOS DE LA TARJETA DE CREDITO 
    maskify: function (numberPosition) {
        let num = Array.from(numberPosition); //paso mi parametro a un arreglo con el metodo Array.from()

        //El ciclo va a recorrer cada posición de una en una, y va a enmascar todos los digitos menos los ultimos 4 digitos
        for (let i = 0; i < numberPosition.length - 4; i++) {
            num[i] = "#";
        }
        return num.join("");  //retorna el numero de la tarjeta devuelto en string (.join)*/
    }

}
export default validator;