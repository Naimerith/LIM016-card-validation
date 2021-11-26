
import validator from './validator.js';

const btnClick = document.getElementById('btnClick');
const duplicate = document.getElementById("tarjeta-numero");
const duplicateName = document.getElementById("tarjeta-name");
const duplicateCvv = document.getElementById("date");


//Esta funcion va a llamar a al metodo isValid cuando se de click en el boton 
function validarTarjeta (){

    let tarjeta = document.getElementById('tarjeta'); //obtengo el elemento id que esta en el documento 
    let numberPosition= tarjeta.value; //Guardo en una variable que va a traer el valor de mi input ( var = tarjeta)    
    let name = document.getElementById("name");
    let titular = name.value; 
    let cvv = document.getElementById("expiration");
    let F_expiration = cvv.value;

    //Para duplicar los datos del formulario en el simulador (tarjeta)
    duplicate.innerHTML = numberPosition; 
    duplicateName.innerHTML = titular;  
    duplicateCvv.innerHTML = F_expiration;

    let resultado = validator.isValid(numberPosition); //declaro una variable resultado que va a llamar a mi funcion validator y va a recorrer el metodo isValid
    let enmascarar = validator.maskify(numberPosition); //declaro una variable resultado que va a llamar a mi funcion validator y va a recorrer el metodo isValid

    
//Hago la condicion de si mi resultado es igual a verdadero muestre un alert con tarjeta valida, sino la tarjeta es invalida - se enmascan los ultimos 4 digitos
    if (resultado == true){
        alert("La tarjeta es valida");
        tarjeta.value = enmascarar; 
    }
    else{
        alert("La tarjeta es Invalida");
        tarjeta.value = enmascarar; 
    }
}

btnClick.addEventListener ("click", validarTarjeta); //Es un evento que se debe ejecutar despues de la funcion validarTarjeta, el cual escucha al boton al dar click 



    

