"use strict";

var frase = prompt("Ingrese la frase o palabra: ");

function palindromo(fra) {
    // Convierto la cadena a minúscula
    var minuscula = fra.toLowerCase();
    alert(minuscula);
    // Convierto la cadena en un array
    var convertirArray = minuscula.split("");
    alert(convertirArray);
    // Elimino los espacios del array
    var sinEspacios = "";
    for (i in convertirArray) {
        if (convertirArray[i] != " ") {
            sinEspacios += convertirArray[i];
        }
    }
    alert(sinEspacios);
    // Vuelvo a convertir en array
    var nuevoArray = sinEspacios.split("");
    var alReves = nuevoArray.reverse();
    alert(alReves);
    // Verifico sin son iguales
    flag = true;
    for (i in nuevoArray) {
        if (nuevoArray[i] != alReves[i]) {
            flag = false;
            break;
        };
    };
    if (flag) {
        return ("La cadena es un palíndromo.");
    } else {
        return ("La cadena NO es un palíndromo.");
    }
};

alert(palindromo(frase));