// Usando la recursion calcular el producto 
// de todos los numeros de dado arreglo. Ej:
// producto([1, 2, 5]) devuelve 10


const producto = function (array) {
  if (array.length===1) return array
  return array.shift() *producto(array)
};

// Dado un objeto con objetos anidados utilizar la recursión para crear una función
// que devuelva true o false dependiendo si el objeto tiene o no el valor pasado por parametro
// ejemplo:
// let obj
  //    prop2: {value: 5}
  //     school: {
    //         hogwarts: {
      //             headmaster:{
        //               name: {
          //                 first: "Albus",
          //                 last: "Dumbledore"
          //               }
          //             }
          //         }
          //     } 



const isThere = function (obj, value){
  for(let k in obj){
    if (obj[k]===value)return true
    if (typeof obj[k]=== "object"){
      let ins =isThere(obj[k],value)
      if (ins) return true
    }
  }
  return false

  //escribe aqui tu codigo x
};
module.exports = { producto, isThere };
