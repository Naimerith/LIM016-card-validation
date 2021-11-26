
import validator from './validator.js';

const btnClick = document.getElementById("btnClick"); 
const formulario = document.getElementById("formulario");

const divMensajeVal = document.createElement('div');
    divMensajeVal.classList.add("tarjetaValida");
    divMensajeVal.innerHTML = `✔ Su tarjeta fue Validada satisfactoriamente`;
    document.getElementById ("valida").appendChild(divMensajeVal);
    divMensajeVal.style.display = "none";

const divMensajeInv = document.createElement('div');
    divMensajeInv.classList.add("tarjetaInvalida");
    divMensajeInv.innerHTML = `✘ Tarjeta Invalida`;
    document.getElementById ("invalida").appendChild(divMensajeInv);
    divMensajeInv.style.display = "none";


/* ----Rellenar el campo de mes-----
Con un ciclo establecemos los meses del 1 al 12, declaro una variable que va a almacenar este resultado y creo el elemento option para traer su valor y reemplazarlo por el valor de i, con el appendChild ingreso estos valores dentro de mi etiqueta select a traves de su ID*/
for(let i=1; i <= 12; i++){
    let opcion = document.createElement("option"); 
        opcion.value = i; 
        opcion.innerText = i;
        formulario.selectMes.appendChild(opcion);
}

/*Rellenar el campo de año
Declaro una variable para saber el año actual, la cual sera igual al año del sistema por el metodo para obtener el año completo. Lueg con el ciclo for cuento desde el año actual incremento en 1 hasta 10 años. Se repite el mismo procedimiento del mes solo se cambia el ID del año*/
let yearActual = new Date().getFullYear();
for (let j = yearActual; j <= yearActual + 10; j++){
    let opcion = document.createElement("option"); 
        opcion.value = j; 
        opcion.innerText = j;
        formulario.selectYear.appendChild(opcion);
}

/* --- Esta funcion va a llamar a a los metodos isValid y Maskify cuando se de click en el boton---
Obtengo el elemento id que esta en el documento y
Guardo en una variable que va a traer el valor de mi input ( var = tarjeta) 
La variable enmascarar va a llamar a mi función Maskify 
La variable resultado va a llamar a mi función Isvalid
Condicion; SI mi resultado es igual a verdadero muestre un alert con tarjeta valida, SINO la tarjeta es invalida - En ambos casos se ocultan todos los digitos menos los ultimos 4 digitos*/

function validarTarjeta (){
    let tarjeta = document.getElementById('tarjeta'); 
    let numberPosition= tarjeta.value; 
    
    let enmascarar = validator.maskify(numberPosition); 
    let resultado = validator.isValid(numberPosition); 

    tarjeta.value = enmascarar; 

    if (resultado){
       // alert("La tarjeta es valida");     
       divMensajeVal.style.display = "block";
    }
    else{
        //alert("La tarjeta es Invalida");
        divMensajeInv.style.display = "block";
    }
    //resultado?div1:div2; // Esto es un operador ternario 

/*----Para duplicar los datos del formulario en el simulador (tarjeta)---- 
Declaro una const que va a acceder al valor de mi ID en la tarjeta 
Declaro otra variable que va a acceder al valor de mi ID en el formulario 
Guardo en una variable, el valor de mi ID 
Invoco a la variable que accedio al ID de mi formulario, le aplico la propiedad innerHtml, q va a leer el dato y lo va a asignar a la variable que accedio al ID de mi tarjeta. 
*/
let duplicate = document.getElementById("tarjeta-numero");
duplicate.innerHTML = numberPosition; //Duplico el numero de la tarjeta en el simulador 

const duplicateName = document.getElementById("tarjeta-name");
let name = document.getElementById("name"); 
let titular = name.value; 
duplicateName.innerHTML = titular; 

let duplicateMes = document.getElementById("tarj-mes");
let mes = document.getElementById("selectMes");
let tarjMes = mes.value;
duplicateMes.innerHTML = tarjMes;

let duplicateYear = document.getElementById("tarj-year");
let year = document.getElementById("selectYear");
let tarjYear = year.value;
duplicateYear.innerHTML = tarjYear;

    
}  

/* -----Boton Validar-----
Es un evento que se debe ejecutar despues de la funcion validarTarjeta, el cual escucha al boton al dar click */

btnClick.addEventListener ("click", validarTarjeta); 
    


