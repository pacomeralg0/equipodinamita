alert("Ordene Comida Individual")

var past = Number(prompt("Cuantas pastas desea ordenar, su costo es de $80 pesos MXN cada uno"));
if(past <0){
    document.write("</p>Costo de la pasta: $ 0 Pesos MXN")
}else{
document.write("</p> Cuenta total de las Pastas: " + "$"+
+ 80*past+" Pesos MXN")
}
var ens = prompt( "Cuantas ensaladas desea ordenar, su costo es de $70 pesos MXN cada uno");
if(ens <0){
    document.write("</p>Costo de la pasta: $ 0 Pesos MXN")
}else{
document.write("</p>Cuenta total de las Ensaladas: " + "$"+
+ 70*ens+" Pesos MXN")
}
var san = prompt( "Cuantos sandwiches desea ordenar, su costo es de $50 pesos MXN cada uno");
if(san <0){
    document.write("</p>Costo de la pasta: $ 0 Pesos MXN")
}else{
document.write("</p> Cuenta total de los Sanwiches: " + "$"+
+ 50*san+" Pesos MXN")
}
var chi = prompt ("Cuantos chilaquiles desea ordenar, su costo es de $65 pesos MXN cada uno");
if(chi <0){
    document.write("</p>Costo de la pasta: $ 0 Pesos MXN")
}else{
document.write("</p> Cuenta total de los Chilaquiles: " + "$"+
+ 65*chi+" Pesos MXN")
}

alert (" Ordene su Paquete preferido")
var pa1 = prompt(" Cuantos paquetes numero 1 desea ordenar, su costo es de $100 pesos MXN cada uno");
if(pa1 <0){
    document.write("</p>Costo de la pasta: $ 0 Pesos MXN") 
}else{
document.write("</p> Cuenta total de los paquetes 1: " + "$" +
+ 100*pa1+" Pesos MXN");
}
var pa2 = prompt(" Cuantos paquetes numero 2 desea ordenar, su costo es de $135 pesos MXN cada uno");
if(pa2 <0){
    document.write("</p>Costo de la pasta: $ 0 Pesos MXN")
}else{
document.write("</p> Cuenta total de los paquetes 2: " + "$" +
+ 135*pa2+ "Pesos MXN");
}
var pa3 = prompt(" Cuantos paquetes numero 3 desea ordenar, su costo es de $150 pesos MXN cada uno");
if (pa3 <0){
    document.write("</p>Costo de la pasta: $ 0 pesos MXN")
}else{
document.write("</p> Cuenta total de los paquetes 3: " + "$" +
+ 150*pa3+ "Pesos MXN");
}


alert ("Ordene sus Bebidas")
var lim = prompt(" Cuantas Limonadas desea ordenar, Su costo es de $15 pesos MXN cada uno ");
if (lim <0){
    document.write("</p>Costo de la pasta: $ 0 pesos MXN") 
}else{
document.write("</p> Cuenta total de las limonadas: " + "$" +
+ 15*lim+ "Pesos MXN");
}
var coc = prompt(" Cuantas cocacolas desea ordenar, Su costo es de $16 pesos MXN cada uno");
if (coc <0){
    document.write("</p>Costo de la pasta: $ 0 pesos MXN")
}else{
document.write("</p> Cuenta total de las cocacolas: " + "$" +
+ 16*coc+ "Pesos MXN");
}
var agu = prompt(" Cuantas aguas del día deseas ordenar; Su costo es de $15 pesos MXN cada uno");
if (agu <0){
    document.write("</p>Costo de la pasta: $ 0 pesos MXN")
}else{
document.write("</p> Cuenta total de las aguas: " + "$" +
+ 15*agu+ "Pesos MXN");
}
res=0;
res=past*80+ens*70+san*50+chi*65+pa1*100+pa2*135+pa3*150+lim*15+coc*16+agu*15;
alert("Total de la cuenta: $" +res +"Pesos MXN")

var Dirección = prompt (" A que dirección se mandara el pedido");
  document.write("</p> Dirección del pedido: " + dirección);
