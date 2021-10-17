
import validator from './validator.js';

console.log(validator);

let tarjeta = document.getElementById('tarjeta'); 
const btnClick = document.getElementById('btnClick');


//Esta funcion va a llamar a al metodo isValid cuando se de click en el boton 
function validarTarjeta (){
//declaro una variable que va a traer el valor de mi input (en este caso el numero de tarjeta)    
    let digitos= tarjeta.value; 
//declaro una variable resultado que va a llamar a mi funcion validator y va a recorrer el metodo isValid y le paso la variable digitos (en donde se encuentra el valor de mi tarjeta)
    let resultado = validator.isValid(digitos); 

//Hago la condicion de si mi resultado es igual a verdadero muestre un alert con tarjeta valida 
    if (resultado == true){
        alert("La tarjeta es valida");
    }// sino muestra un alert con tarjeta no valida. 
    else{
        alert("La tarjeta no es valida");
    }
}

//Es un evento que se debe ejecutar despues de la funcion validarTarjeta, el cual escucha al boton al dar click 
btnClick.addEventListener ("click", validarTarjeta)

    

