
/// la empresa ha generado un 20% de rentabilidad en el primer ano, un 15% segundo ano, 
/// tercer ano 25% y el cuarto ano 33.
// calcular la rentabilidad por los 4 anos 
// se multiplica cada ano y luego se le saca raiz del numero de datos que se tengan.


const rentabilidad=[1.20,1.15,1.33,1.25];

let rentabilidadPorAno= rentabilidad.reduce(function(acumulado=0, nuevoElemento){
    return acumulado*nuevoElemento
});

console.log(rentabilidadPorAno)

let result= Math.pow(rentabilidadPorAno,1/rentabilidad.length);
console.log(result);

//con arrow function


const rentabilidad=[1.20,1.15,1.33,1.25];

let rentabilidadPorAno= rentabilidad.reduce((acumulado=0, nuevoElemento) =>{
    return acumulado*nuevoElemento
});

console.log(rentabilidadPorAno)
let result= Math.pow(rentabilidadPorAno,1/rentabilidad.length);
console.log(result);

/// con funcion 

const rendimiento=(lista)=>{
    let rentabilidadPorAno=lista.reduce((acumulado=0, nuevoElemento)=>{
        return acumulado*nuevoElemento

    }); 
    let result= Math.pow(rentabilidadPorAno,1/lista.length);
    return result
}
let a= rendimiento([1.20,1.15,1.33,1.25])
console.log(a)




