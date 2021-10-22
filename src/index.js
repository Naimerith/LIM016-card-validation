
import validator from './validator.js';

console.log(validator);

const btnClick = document.getElementById('btnClick');


//Esta funcion va a llamar a al metodo isValid cuando se de click en el boton 
function validarTarjeta (){

    let tarjeta = document.getElementById('tarjeta'); //obtengo el elemento id que esta en el documento 

//Guardo en una variable que va a traer el valor de mi input ( var = tarjeta)    
    let numberPosition= tarjeta.value; 
//declaro una variable resultado que va a llamar a mi funcion validator y va a recorrer el metodo isValid
    let resultado = validator.isValid(numberPosition); 

//declaro una variable resultado que va a llamar a mi funcion validator y va a recorrer el metodo isValid
    let enmascarar = validator.maskify(numberPosition);

//Hago la condicion de si mi resultado es igual a verdadero muestre un alert con tarjeta valida 
    if (resultado == true){
        alert("La tarjeta es valida");
        tarjeta.value = enmascarar; 
    }// sino muestra un alert con tarjeta no valida. 
    else{
        alert("La tarjeta es Invalida");
        tarjeta.value = enmascarar; 
    }
}


//Es un evento que se debe ejecutar despues de la funcion validarTarjeta, el cual escucha al boton al dar click 
btnClick.addEventListener ("click", validarTarjeta)



    

