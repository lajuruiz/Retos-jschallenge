

const buildCount = (i) => {
    let count = i;
    //funcion closure //
    const displayCount = () => {
      console.log(count++);
    };
    return displayCount;
  };
const myCount=buildCount(1);
myCount();
myCount();
myCount();

// nuevo alcance nuevo ambito 

const myOtherCount= buildCount(10);
myOtherCount();
myOtherCount();


//NOTAS: 
// Si te llegaste a preguntar ¿Por qué si le mandamos como parámetro inicial 1, al momento de llamar el closure por primera vez me imprime 1 si lo estoy incrementando?
/* Bueno, pues yo te lo explico.

Si vemos la estructura de la función

const buildCount = (i)=>{
    let count = i;
    const displayCount = () =>{
        console.log(count++);
    }
    return displayCount;
};
Podemos notar que el console.log() está de de la siguiente manera

console.log(count++);
Y como ves, aparece count++, lo que quiere decir que estamos incrementando en 1 el valor de count, pero de la manera que está escrita, primero va a imprimir el count con el valor antes de incrementarlo
Esto se debe a que count++ es lo equivalente a decir count = count + 1 pero el momento en el que se hará ese incremento, está dado por la posición del ++, en éste caso, se hará después.
Si quisieramos que se muestre el valor de count después de hacerle el incremento, podríamos hacer ésto:

count++;
console.log(count);
O, de una manera más elegante, y aprendiendo como funciona el ++, así:

console.log(++count);
Espero haberte ayudado y suerte en el camino a la maestría 😉 */


//NOTA: 
//El ámbito léxico es cuando las funciones se ejecutan utilizando la cadena del alcance donde estaban vigente en su momento. //Esto significa que podemos acceder al valor “count” dentro de la función porque es el alcance donde está asignado.  //Podemos tener varias formas de manejar la constante “buildCount”, significa que la podemos asignar a myCount y myOtherCount. Trabajaremos con el scope(alcance) que tiene esta variable, poder ejecutarla y empezar a contar desde donde necesitemos.

