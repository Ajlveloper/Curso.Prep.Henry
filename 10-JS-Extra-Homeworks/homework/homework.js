// No cambies los nombres de las funciones.

function deObjetoAmatriz(objeto){
  // Escribe una función que convierta un objeto en una matriz, donde cada elemento representa 
  // un par clave-valor en forma de matriz.
  //Ejemplo: 
  /*objeto({
      D: 1,
      B: 2,
      C: 3
    }) ➞ [["D", 1], ["B", 2], ["C", 3]]*/
  //Escribe tu código aquí
  var nuevoArray = [];
  for (var clave in objeto) {
    nuevoArray.push([clave, objeto[clave]]);
  }
  return nuevoArray;
}


function numberOfCharacters(string) {
  //La función recibe un string. Recorre el srting y devuelve el caracter con el número de veces que aparece 
  //en formato par clave-valor.
  //Ej: Recibe ---> "adsjfdsfsfjsdjfhacabcsbajda" || Devuelve ---> { a: 5, b: 2, c: 2, d: 4, f: 4, h:1, j: 4, s: 5 } 
  //Escribe tu código aquí
  var objt = {};
  var stringA = string.split('');

  function letterRepeat (element) {
    var conteo = 0;
    for (var i = 0; i < string.length; i++) {
        if (element === string[i]) {
            conteo++;
            objt[string[i]] = conteo;
        }
    }
  }

  stringA.forEach(letterRepeat);

  return objt;
}


function capToFront(s) {
  //Realiza una función que reciba como parámetro un string y mueva todas las letras mayúsculas
  //al principio de la palabra.
  //Ejemplo: soyHENRY -> HENRYsoy
  //Escribe tu código aquí
  var aUper = [];
  var bLower = [];  

  for (var i = 0; i < s.length; i++) {
      if (s[i] === s[i].toUpperCase()) {
          aUper.push(s[i]);
      } else {
          bLower.push(s[i]);
      }
  }

  var c = aUper.concat(bLower);

  return c.join('');
}


function asAmirror(str) {
  //La función recibe una frase. 
  //Escribe una función que tome la frase recibida y la devuelva de modo tal que se pueda leer de izquierda a derecha 
  //pero con cada una de sus palabras invertidas, como si fuera un espejo.
  //Ej: Recibe ---> "The Henry Challenge is close!" || Devuelve ---> "ehT yrneH egnellahC si !esolc"
  //Escribe tu código aquí
  var plb = '';
  for (var i = str.length-1; i >= 0; i--){
    plb += str.charAt(i);
  }
  var invertido = plb.split(' ').reverse().join(' ');

  return invertido;
} 


function capicua(numero){
  //Escribe una función, la cual recibe un número y determina si es o no capicúa.
  //La misma debe retornar: "Es capicua" si el número se número que se lee igual de 
  //izquierda a derecha que de derecha a izquierda. Caso contrario retorna "No es capicua"
  //Escribe tu código aquí
  var ca = numero.toString().split('').reverse().join('');

  if (parseInt(ca) === numero) {
    
    return 'Es capicua'; 
  }  else {
    return 'No es capicua'
  }
}


function deleteAbc(cadena){
  //Define una función que elimine las letras "a", "b" y "c" de la cadena dada 
  //y devuelva la versión modificada o la misma cadena, en caso de contener dichas letras.
  //Escribe tu código aquí
  // var lower = cadena.toLowerCase()
  var lowerNew1 = [];
  var lowerNew2 = []; 
  var strArr = cadena.split('');
  for (var i = 0; i <= strArr.length-1; i++) {

    if (strArr[i] === 'a' || strArr[i] === 'b' || strArr[i] === 'c') {
      lowerNew1[i] = strArr[i];
    } else {
      lowerNew2[i] = strArr[i];
    }
  }
  return lowerNew2.join('');

}


function sortArray(arr) {
  //La función recibe una matriz de strings. Ordena la matriz en orden creciente de longitudes de cadena
  //Ej: Recibe ---> ["You", "are", "beautiful", "looking"] || Devuelve ---> [“You", "are", "looking", "beautiful"]
  //Escribe tu código aquí
}


function buscoInterseccion(arreglo1, arreglo2){
  //Existen dos arrays, cada uno con 5 números. A partir de ello, escribir una función que permita 
  //retornar un nuevo array con la intersección de ambos elementos. (Ej: [4,2,3] unión [1,3,4] = [3,4].
  //Si no tienen elementos en común, retornar un arreglo vacío.
  //Aclaración: los arreglos no necesariamente tienen la misma longitud
  //Escribe tu código aquí  
}



// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
   deObjetoAmatriz,
   numberOfCharacters,
   capToFront,
   asAmirror,
   capicua,
   deleteAbc,
   sortArray,
   buscoInterseccion,
};

