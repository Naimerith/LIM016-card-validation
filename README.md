# Credit Card Validator 

## Índice

* [1. Preámbulo](#1-preámbulo)
* [2. Resumen del proyecto](#2-resumen-del-proyecto)
* [3. Objetivos de aprendizaje](#3-objetivos-de-aprendizaje)
* [4. Investigación UX](#4-Definición-del-Producto)
* [5. Prototipo de Baja Fidelidad](#5-Prototipo-papel-y-lapiz)
* [6. Interfaz de Usuario](#Prototipo-de-alta-fidelidad)

***

## 1. Preámbulo

El [algoritmo de Luhn](https://es.wikipedia.org/wiki/Algoritmo_de_Luhn),
también llamado algoritmo de módulo 10, es un método de suma de verificación,
se utiliza para validar números de identificación; tales como el IMEI de los
celulares, tarjetas de crédito, etc.

Este algoritmo es simple. Obtenemos la reversa del número a verificar (que
solamente contiene dígitos [0-9]); a todos los números que ocupan una posición
par se les debe multiplicar por dos, si este número es mayor o igual a 10,
debemos sumar los dígitos del resultado; el número a verificar será válido si
la suma de sus dígitos finales es un múltiplo de 10.

![gráfica de algoritmo de Luhn](https://www.101computing.net/wp/wp-content/uploads/Luhn-Algorithm.png)

## 2. Resumen del proyecto
Se construyo una aplicación web que le permite al usuario validar los números de cualquier tarjeta de crédito, de una forma rapida y confiable, ya que la aplicación permite enmascar los digitos de la tarjeta y mostrar sólo los últimos cuatro digitos para mas confiabilidad en el producto. 

Su uso esta orientado a toda persona de cualquier sexo, mayor de edad que posea una tarjeta de crédito, independientemente del banco emisor o país de origen. 

## 3. Objetivos de aprendizaje

### HTML

- [x] **Uso de HTML semántico**

### CSS

- [x] **Uso de selectores de CSS**
- [x] **Modelo de caja (box model): borde, margen, padding**

### Web APIs

- [x] **Uso de selectores del DOM**
- [x] **Manejo de eventos del DOM (listeners, propagación, delegación)**
- [x] **Manipulación dinámica del DOM**

### JavaScript

- [x] **Tipos de datos primitivos**
- [x] **Strings (cadenas de caracteres)**
- [x] **Variables (declaración, asignación, ámbito)**
- [x] **Uso de condicionales (if-else, switch, operador ternario, lógica booleana)**
- [x] **Uso de bucles/ciclos (while, for, for..of)**
- [x] **Funciones (params, args, return)**
- [x] **Pruebas unitarias (unit tests)**
- [x] **Módulos de ECMAScript (ES Modules)**
- [x] **Uso de linter (ESLINT)**
- [x] **Uso de identificadores descriptivos (Nomenclatura y Semántica)**

### Control de Versiones (Git y GitHub)

- [x] **Git: Instalación y configuración**
- [x] **Git: Control de versiones con git (init, clone, add, commit, status, push, pull, remote)**
- [x] **GitHub: Creación de cuenta y repos, configuración de llaves SSH**
- [ ] **GitHub: Despliegue con GitHub Pages**

### UX (User eXperience)

- [x] **Diseñar la aplicación pensando en y entendiendo al usuario**
- [x] **Crear prototipos para obtener feedback e iterar**
- [x] **Aplicar los principios de diseño visual (contraste, alineación, jerarquía)**

## 4. Investigación UX

Requerimiento:

*Crear una aplicación que contenga un formulario con la información básica de los portadores de tarjetas de créditos (Nombre o titular, Número de tarjeta de crédito, fecha de expiración, código de seguridad). 

*Proveer un botón que permita eliminar los campos del formulario y rehacer el procedimiento.

*Enmascarar el número de tarjeta de crédito que ingrese el usuario, una vez validada; para su seguridad y confianza.  

*Mostrar un simulador de tarjeta en donde el usuario pueda corroborar que los datos suministrados en el formulario coinciden con los de su tarjeta de crédito. 

*Insertar un botón de "Validar" que muestre si la el número de tarjeta de crédito suinistrado es valido o invalido. 


Se realizó una interfaz amigable, sencilla y fácil de manipular para una mejor experiencia con el usuario. 

****** Quiénes son los principales usuarios de producto.******

Cualquier persona mayor de edad, independientemente de sexo; que posea tarjeta de credito de cualquier entidad bancaria, sin distinción de país. 

****** Cuáles son los objetivos de estos usuarios en relación con tu producto.******

Validar los datos de su tarjeta de crédito. 

****** Cómo crees que el producto que estás creando está resolviendo sus problemas.******

Permite que el usuario pueda validar su tarjeta de crédito de una forma rápida, sencilla y de manera gratuita. 


## 5. Prototipo de Baja Fidelidad 


![WhatsApp Image 2021-10-06 at 9 03 28 AM](https://user-images.githubusercontent.com/89501132/143522361-7c96c3ef-78cd-4733-93cc-14c9cc075ea4.jpeg)


## 6. Interfaz de Usuario


![PROTOTIPO DE ALTA FIDELIDAD](https://user-images.githubusercontent.com/89501132/143523888-8a0fecd0-de6c-4dbf-9744-d5c0f8435288.png)



### Recursos y temas relacionados


A continuación un video de Michelle que te lleva a través del algoritmo de Luhn
y un par de cosas más que debes saber para resolver este proyecto. ¡Escúchala
con detenimiento y sigue sus consejos! :)

[![tips credit card](https://img.youtube.com/vi/f0zL6Ot9y_w/0.jpg)](https://www.youtube.com/watch?v=f0zL6Ot9y_w)

[Link](https://www.youtube.com/watch?v=f0zL6Ot9y_w)

También una metodología para empezar a desarrollar tareas con JavaScript:

[![Resolución de problemas con JavaScript](http://i3.ytimg.com/vi/lYfEmhLmu7A/hqdefault.jpg)](https://www.youtube.com/watch?v=lYfEmhLmu7A)

[Link](https://www.youtube.com/watch?v=lYfEmhLmu7A)

Terminal y shell de UNIX:

[![Playlist de Terminal y shell de UNIX](https://img.youtube.com/vi/GB35Eyb-J4c/0.jpg)](https://www.youtube.com/playlist?list=PLiAEe0-R7u8nGH5TEHfSTeDNIvjZFe_Yd)

[Link](https://www.youtube.com/playlist?list=PLiAEe0-R7u8nGH5TEHfSTeDNIvjZFe_Yd)

Control de versiones y trabajo colaborativo con Git y GitHub:

[![Playlist de control de versiones y trabajo colaborativo](https://img.youtube.com/vi/F1EoBbvhaqU/0.jpg)](https://www.youtube.com/playlist?list=PLiAEe0-R7u8k9o3PbT3_QdyoBW_RX8rnV)

[Link](https://www.youtube.com/playlist?list=PLiAEe0-R7u8k9o3PbT3_QdyoBW_RX8rnV)

Diseño de experiencia de usuario (User Experience Design):

* Ideación
* Prototipado (sketching)
* Testeo e Iteración

Desarrollo Front-end:

* Valores
* Tipos
* Variables
* Control de flujo
* Tests unitarios
* [Documentación de NPM](https://docs.npmjs.com/)

Organización del Trabajo:

* [Metodologías Ágiles](https://www.youtube.com/watch?v=v3fLx7VHxGM)
* [Scrum en menos de 2 minutos](https://www.youtube.com/watch?v=TRcReyRYIMg)
* [Scrum en Detalle](https://www.youtube.com/watch?v=nOlwF3HRrAY&t=297s). No
  esperamos que hagas todo eso desde este proyecto. Iremos profundizando poco a
  poco a lo largo del -_bootcamp_.
* [Blog: cómo funciona el algoritmo de Luhn](http://www.quobit.mx/asi-funciona-el-algoritmo-de-luhn-para-generar-numeros-de-tarjetas-de-credito.html).
