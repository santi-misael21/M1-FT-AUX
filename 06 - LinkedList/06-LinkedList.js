const { LinkedList, Node } = require("../estructuras")
  //agregar el metodo size al prototipo de LinkedList.
  // Este metodo deberia retornar la cantidad de elementos de la lista
  LinkedList.prototype.size=function(){
    if (!this.head)return 0
    let cur =this.head
    let ac =1
    while(cur.next){ 
      ac++
      cur =cur.next
    }
    return ac
    
  }


// Agregar el método orderList al prototipo de LinkedList. Este método deberá ordenar los elementos de nuestra lista enlazada de mayor a menor.
// Ejemplo:
//     Suponiendo que la lista actual es: Head --> [4] --> [5] --> [3]
//     lista.orderList();
//     Ahora la lista quedaría: Head --> [5] --> [4] --> [1]
// ACLARACIÓN: Se debe ordenar la lista original y no una nueva.
LinkedList.prototype.orderList = function () {
  if (!this.head) return undefined //sin cabecera devolver undefined
  let cur =this.head //cur será la cabecera 
  var arraycont= [] //arreglo contenedor de valores
  var count= 0 //índice-contador
  arraycont[count] = cur.value //valor de cur (=this.head) al primer elemento
  count++ //índice-contador a 1
  while (cur.next){ //mientras haya un día siguiente, si no lo hay, veremos 
    arraycont[count]= cur.next.value //cada nuevo valor de next va al arreglo //edited
    count++ //incrementar índice-contador
    cur =cur.next //cur tomará el lugar del next recién atendido
  }
  arraycont.sort(function (a,b){return b - a}); //ke desirte

  while (this.head!==null){ //mientras exista cabecera
    this.remove() //remover lo que vayas encontrando
  }
  this.len= 0 //reiniciá esto por favor que anda mal
  //ncur= arraycont[ncount] //primer elemento a la cabecera //removed xD 
  for (i= 0; i< arraycont.length; i++){
    this.add(arraycont[i])
  }

  // Tu código aca:
   
  };


  //agregar el metodo insert al prototipo de LinkedList.
  // Este metodo deberia recibir una posicion y un valor
  // agregar el valor en la posicion indicada
  //tomar el head como posicion 1  
  
    
LinkedList.prototype.insert = function(data,pos) {
  this.add(data)
	


}
  




module.exports={
  LinkedList
}



