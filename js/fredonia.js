window.onload = inicio;

function inicio(){
    alert("Bienvenido, en esta plataforma deberas ingresar las cantidades reales de cada producto y ésta te entregará un sugerido de pedido.");
}
function mostrar(valor){
    var sttabla=40;
    document.getElementById("resultado").innerHTML=sttabla-valor;
    
}
function mostrar2(valor2){
    var stmilares=100;
    document.getElementById("resultado2").innerHTML=stmilares-valor2;
    
}
function mostrar3(valor3){
    var stposta=35;
    document.getElementById("resultado3").innerHTML=stposta-valor3;
    
}
function mostrar4(valor4){
    var stpecho=35;
    document.getElementById("resultado4").innerHTML=stpecho-valor4;
    
}
function mostrar5(valor5){
    var stmorrillo=35;
    document.getElementById("resultado5").innerHTML=stmorrillo-valor5;
    
}
function mostrar6(valor6){
    var sttableado=25;
    document.getElementById("resultado6").innerHTML=sttableado-valor6;
    
}
function mostrar7(valor7){
    var sthigado=50;
    document.getElementById("resultado7").innerHTML=sthigado-valor7;
    
}
function mostrar8(valor8){
    var stboffe=25;
    document.getElementById("resultado8").innerHTML=stboffe-valor8;
    
}
function mostrar9(valor9){
    var stchuleta=100;
    document.getElementById("resultado9").innerHTML=stchuleta-valor9;
    
}
function mostrar10(valor10){
    var stmilacerdo=80;
    document.getElementById("resultado10").innerHTML=stmilacerdo-valor10;
    
}
function mostrar11(valor11){
    var steconomica=80;
    document.getElementById("resultado11").innerHTML=steconomica-valor11;
    
}
function mostrar12(valor11){
    var stcannon=40;
    document.getElementById("resultado12").innerHTML=stcannon-valor12;
    
}
function ImprimirPagina(){
    window.print();
}