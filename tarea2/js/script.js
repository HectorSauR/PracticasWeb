var hoy = new Date();
var datetime = document.querySelector("#fechahora");
var email = document.querySelector("#email");
var date = document.querySelector("#fecha");

var hora = hoy.getHours();
var mes,dia;
var newformat = hora >= 12 ? 'PM' : 'AM';

mes = "" + hoy.getMonth();
dia = "" + hoy.getDay();
minutos = "" + hoy.getMinutes();

hora = hora % 12; 
hora = hora ? hora : 12; 

if(hoy.getMonth() < 10){
    mes = "0"+hoy.getMonth();
}

if(hoy.getDay() < 10){
    dia = "0"+hoy.getDay();
}

if(hoy.getMinutes() <10){
    minutos = "0"+hoy.getMinutes();
}

if(hora < 10){
    hora = "0"+hora;
}

fecha = hoy.getFullYear() + "-" + mes + "-" + dia + "T" + hora + ":" + minutos;

datetime.value = fecha;

