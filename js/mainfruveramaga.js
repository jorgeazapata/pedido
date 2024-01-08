window.onload = inicio;

function inicio(){
    alert("Bienvenido, en esta plataforma deberas ingresar las cantidades reales de cada producto y ésta te entregará un sugerido de pedido.");
}
function mostrar(valor){
    var sttabla=50;
    document.getElementById("resultado").innerHTML=sttabla-valor;
    
}
function mostrar2(valor){
    var stmilares=15;
    document.getElementById("resultado2").innerHTML=stmilares-valor;
    
}
function mostrar3(valor){
    var stposta=30;
    document.getElementById("resultado3").innerHTML=stposta-valor;
    
}
function mostrar4(valor){
    var stpecho=10;
    document.getElementById("resultado4").innerHTML=stpecho-valor;
    
}
function mostrar5(valor){
    var stmorrillo=100;
    document.getElementById("resultado5").innerHTML=stmorrillo-valor;
    
}
function mostrar6(valor){
    var sttableado=30;
    document.getElementById("resultado6").innerHTML=sttableado-valor;
    
}
function mostrar7(valor){
    var sthigado=30;
    document.getElementById("resultado7").innerHTML=sthigado-valor;
    
}
function mostrar8(valor){
    var stboffe=30;
    document.getElementById("resultado8").innerHTML=stboffe-valor;
    
}
function mostrar9(valor){
    var stchuleta=15;
    document.getElementById("resultado9").innerHTML=stchuleta-valor;
    
}
function mostrar10(valor){
    var stmilacerdo=10;
    document.getElementById("resultado10").innerHTML=stmilacerdo-valor;
    
}
function mostrar11(valor){
    var steconomica=40;
    document.getElementById("resultado11").innerHTML=steconomica-valor;
    
}
function mostrar12(valor){
    var stcannon=20;
    document.getElementById("resultado12").innerHTML=stcannon-valor;
    
}
function ImprimirPagina(){
    window.print();
}