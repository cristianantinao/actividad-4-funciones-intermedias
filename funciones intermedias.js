1/* Sigma - Implementa una función sigma(num) que, dado un número, devuelve la suma de todos los enteros positivos (incluyendo el número dado). Ej: sigma(3) = 6 (1+2+3); sigma(5) = 15 (1+2+3+4+5).*/
console.log("1.Sigma")
function sigma(num){
    var sigma=0;
    var enteros=""
    for(var i=0; i<=num; i++){
        sigma=sigma+i;

        if (i>0){
            enteros=enteros + i ;
        }
        if(i>0 && i<num){
            enteros=enteros+"+"
        }
        if (i==0){
            enteros=enteros+"(";
        }
        if (i==num){
            enteros=enteros+")";
        }

    }
    return sigma+" "+enteros;
}
console.log(sigma(10))
console.log('-----------------');


2/* Factorial - Escribe una función factorial(num) que, dado un número, devuelva el producto (multiplicación) de todos los enteros positivos (incluyendo el número dado). Por ejemplo: factorial(3) = 6 (1*2*3); factorial(5) = 120 (1*2*3*4*5). */
console.log("2.factorial")
function factorial(num){
    var factorial=1;
    var enteros=""
    for(var i=0; i<=num; i++){

        if (i>0){
            factorial=factorial*i;
            enteros=enteros + i ;
        }
        if(i>0 && i<num){
            enteros=enteros+"*"
        }
        if (i==0){
            enteros=enteros+"(";
        }
        if (i==num){
            enteros=enteros+")";
        }

    }
    return factorial +" "+enteros;
}
console.log(factorial(10))
console.log('-----------------');


3/* Fibonacci - Crea una función para generar números de Fibonacci. En esta famosa secuencia matemática, cada número es la suma de las dos anteriores, partiendo con los valores 0 y 1. Tu función debería aceptar un argumento, un índice en la secuencia (donde 0 corresponde al valor inicial, 4 corresponden al valor cuatro más tarde, etc). Ejemplos: fibonacci(0) = 0 (dado), fibonacci(1) = 1 (dado), fibonacci(2) = 1 (fib(0)+fib(1), o 0+1), fibonacci(3) = 2 (fib(1) + fib(2)3, o 1+1), fibonacci(4) = 3 (1+2), fibonacci(5) = 5 (2+3), fibonacci(6) = 8 (3+5), fibonacci(7) = 13 (5+8). Haz esto primero sin usar recursión. Si no sabes qué es una recursión, no te preocupes puesto que vamos a introducir este concepto en la Parte 2 de esta actividad.  */
console.log("3.fibonacci");
function fibonacci(num){
    if (num<2){
        return num;
    }
    var fib=[ 0 , 1 ];
    for ( var i=2; i<=num; i++ ){
        fib[i] = fib[i-1] + fib[i-2];
    }
    return fib[num];
}

console.log(fibonacci(10));
console.log('-----------------');

// Fibonacci con recursion:
console.log("3.fibonacci-con-recursion");
function recursion_fibonacci(num){
    if(num<2){
        return num;
    }
    return recursion_fibonacci(num-2) + recursion_fibonacci(num-1);
}

console.log(recursion_fibonacci(10));
console.log('-----------------');


4/* Array: Penúltimo: Devuelve el penúltimo elemento del array. Dado [42,true,4,”Liam”, 7] devuelve “Liam”. Si el array es muy pequeño, devuelve null.   */
console.log("4.Penultimo")
function penultimo(array){
    for(var i=0; i<array.length; i++){
        if(array.length<3){
            return null
        }
        return array[array.length-2];
    }
}
console.log(penultimo([42,true,4,"Liam", 7]))
console.log('-----------------');


5/* Array: “N” último: Devuelve el elemento “N” último. Dado ([5,2,3,6,4,9,7],3), devuelve 6. Si el array es muy pequeño, devuelve null.  */
console.log('5.“N” ultimo');
function n_ultimos(array, num){
    var ultimos=[];
    if (num == 1){
        return array[array.length-1];
    }
    if (num>array.length){
        return null;
    }
    if(array.length<=2){
        return null;
    }
    if(num != 1){
        for( var i=array.length-num; i<array.length ;i++ ){
            ultimos.push(array[i]);
        }
    }
   
    return ultimos;
}
console.log(n_ultimos([5,2,3,6,4,9,7],3));
console.log('-----------------');


6/* Array: Segundo más grande: Devuelve el segundo elemento más grande de un array. Dado [42,1,4,3.14,7], devuelve 7.  Si el array es muy pequeño, devuelve null. */
console.log("6.Segundo mas grande")
function segundo(array){
    var max=0;
    var segundo=0;
    for(var i=0; i<array.length; i++){
        if(array.length<3){
            return null
        }
        if(max<array[i]){
            max=array[i];
        }
        if(max>array[i] && array[i]>segundo){
            segundo=array[i];
        }
    }
    return segundo;
}
console.log(segundo([42,1,4,3.14,7,32,34,36]))
console.log('-----------------');


7/* Doble Problema Par: Crea una función que cambie un array dado duplicando cada uno de sus elementos y manteniendo el orden original. Convierte [4, "Ulysses", 42, false]   a    [4,4, "Ulysses", "Ulysses", 42, 42, false, false]. */
console.log("7.Problema Par")
function dobles(array){
    var newarray=[];
    for(var i=0; i<array.length; i++){
        newarray.push(array[i]);
        newarray.push(array[i]);
    }
    return newarray;
}
console.log(dobles([4, "Ulysses", 42, false]));
console.log('-----------------');
