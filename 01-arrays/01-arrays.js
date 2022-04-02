function invertirOrden(array) {
    // Invertir el orden de los elementos del array que recibe por parametro
    // Que los ultimos elementos, pasen a ser los primeros
    //
    // DETALLE: En caso de que el elemento contenga mas de 1 digito, el mismo NO debera ser devuelto
    // No vale usar el metodo "reverse"
    var arraynverted =[]
    var index =0

    for(i =array.length -1; i >=0; i--) 
    {
        if (array[i].toString().length >1) continue
        arraynverted[index] =array[i]
        index++
    }
    return arraynverted
};


function numeroEnComun(array1, array2) {
    // Entre los dos array's que recibe la funcion por parametro
    // Buscar y retornar el valor en comun entre ellos

    for (i =0; i <array1.length; i++)
    {
        for (j =0; j <array2.length; j++)
        {
            if (array1[i] === array2[j])
            {
                return array1[i]
            }            
        }
    }
    var array3 =array1.concat(array2)
    var c =array3[0]
    for (k =1; k <array3.length; k++)
    {
        if (array3[k] <c) c =array3[k]
    }
    return c

};


function sumaDeArrays(array) {
    // El array recibido por parametro es un array multidimensional con arrays que contienen elementos de tipo number
    // Tienen que devolver UN SOLO array que solo contenga elementos de tipo number
    // Sumando los elementos de cada array que contenga dos elementos, y devolviendo la suma del mismo
    // OJO: Si el elemento dentro del array que ingresa por prop, ya es de tipo number, deben devolverlo como tal dentro del array que retornan.
    //Array =[[10,11],12,[13,14]]
    var ind=[]
    for(i =0; i<array.length; i++)
    {
        if (!Array.isArray(array[i]))
        {
            ind[i]=array[i]
        }
        if (Array.isArray(array[i]))
        {
            var jota =0
            for (j =0; j<array[i].length; j++){
                jota = jota +array[i][j]
                ind[i]=jota
            }
        }
    }
    return ind

};


function mismoValorMismosElementos(numero, divisor) {
    // Tiene que devolver un array con la misma cantidad de elementos que el valor del divisor
    // Todos los elementos deben tener el mismo valor
    // OJO: Si el resultado de la division no es un entero, deben devolver false
    var rest =numero %divisor //0 || !0
    if(rest !== 0) return false
    var array = new Array(divisor)
    for (i =0; i <array.length; i++)
    {
        array [i] =numero/divisor
    }
    return array
};


function elementoMenorYMayor(array) {
    // El Array recibido por props es un array que contienen numeros
    // Tenes que retornar un array
    // Solamente con el elemento menor y mayor del array recibido
    var g =[] //2 positions.
    var men =array[0]
    for (k =1; k <array.length; k++)
    {
        if (array[k] <men) men =array[k]
    }
    g[0]=men

    var may =array[0]
    for (l =1; l <array.length; l++)
    {
        if (array[l] >may) may =array[l]
    }
    g[1]=may
    return g

};



module.exports = {
    numeroEnComun,
    invertirOrden,
    elementoMenorYMayor,
    sumaDeArrays,
    mismoValorMismosElementos
};