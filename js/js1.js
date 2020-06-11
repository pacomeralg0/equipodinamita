alert(" Haga su reservación")
var nombre = prompt(" A nombre de quien sera la reservación ");
 document.write("</p>Nombre del que va hacer la reservación: " + nombre ); 

 var n = Number(prompt("Cuantas persona se incluiran en su reservación (costo por persona es de $70 pesos mexicanos)"));
 if(n <0){ 
     document.write("</p> No se permiten numero negativos")
 }else{
    document.write("</p> El costo de la reservación es de: " + "$"+
    + 70*n+" Pesos MXN");
     }

 var fecha = prompt (" Que fecha quiere reservar ");
  document.write("</p> Fecha de la reservación: " + fecha);
  
 var hora = prompt (" En que horario sera la reservación");
  document.write("</p> Hora de la reservación: " + hora);
 
 var correo = prompt("Proporcione un correo para hacerle llegar su confirmación de su reservación ");
 document.write("</p>Correo del que hace la reservación: " + correo);

 var numero = Number(prompt( " Proporcione un numero para avisarle si hay algún problema con su reservación "));
 document.write("</p> Numero del que hace la reservación: " + numero);
alert("Su reservación esta lista")

