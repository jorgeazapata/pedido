window.onload = inicio;

function inicio(){
    alert("Bienvenido, en esta plataforma deberas ingresar las cantidades reales de cada producto y ésta te entregará un sugerido de pedido.");
}
function mostrar(valor){
    var sttabla=25;
    document.getElementById("resultado").innerHTML=sttabla-valor;
    
}
function mostrar2(valor){
    var stmilares=50;
    document.getElementById("resultado2").innerHTML=stmilares-valor;
    
}
function mostrar3(valor){
    var stmilares=25;
    document.getElementById("resultado3").innerHTML=stmilares-valor;
    
}
function ImprimirPagina(){
    window.print();
}