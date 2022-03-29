function timeConversion(time){
// dada la hora en formato hora AM/PM , convertir a la hora militar (24-horas).
// Recordar: las 12:00:00AM en un reloj de 12 horas son las 00:00:00 en un reloj de 24 horas
//las 12:00:00PM en un reloj de 12 horas son las 12:00:00 en un reloj de 24 horas 
    var hora =time.substr(0,2) //solo hora sin los doble puntos
    var min =time.substr(3,2) //solo minutos
    var seg =time.substr(6,2) //solo segundos
    var per =time.substr(8,2) //formato: "AM" o "PM"
    var noper =time.substr(0,8) //hora sin formato

    if(hora <0 || hora >23) return false
    if(min <0 || min >59) return false
    if(seg <0 || seg >59) return false
    if(time.length <10) return false

    if(per ==="AM") 
    {
        if(hora==12) 
        {
            mlt =parseInt(hora)-12 +"0:"
            return mlt +min +":" +seg
        }
        return noper
    }
    if(per ==="PM") 
    {
        if (hora==12)
        {
            return noper
        }
        mlt =parseInt(hora)+12
        return mlt +":" +min +":" +seg
    }
}

module.exports = {
    timeConversion
}