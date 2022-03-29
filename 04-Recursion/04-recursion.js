// Usando la recursion calcular el producto 
// de todos los numeros de dado arreglo. Ej:
// producto([1, 2, 5]) devuelve 10

const { test } = require("chai/lib/chai/utils");

const producto = function (array, r) {
  if (!r) r=array.shift()
  if (array.length ===0) return r

  r =r *array.shift()
  return producto(array, r)
}

  /*//if (array.length<=1) return array

  testy ++
  (console.log (testy + "testy"))

  if (array.length<=2) return array
  
  if (!testy>0){
  var m=[]
  var n=0
  console.log(true)
  }

  var testy =0

  if (m[0]!== undefined)
  {
    n++
  }
  m[n] =array[0]*array[1]
  console.log(m)

  //si hay para concatenar array será algo concatenado
  //si no hay para concatenar array será en estado puro
  if (n==0) {//[1,3,5] 1 * 3 = 3 ; 3 * 5 = 15 
  return producto (m.concat(array[2]))
  }
  if (n>=1)
  {
  return producto (m)
  }*/

  /*var p=1

  for (i =0; i <array.length; i++)
  {
    p =array[i]*p
  }
  return p
  
};*/

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
  //escribe aqui tu codigo 

};
module.exports = { producto, isThere };
