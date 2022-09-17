//FUNÇÕES EM JAVASCRIPT PURO

function slide1(){
    document.getElementById('foto-banner').src="assets/img/pexels-photo.jpeg";
    setTimeout("slide2()",2000)
}
function slide2(){
    document.getElementById('foto-banner').src="assets/img/player-man.jpg";
    setTimeout("slide3()",2000)
}
function slide3(){
    document.getElementById('foto-banner').src="assets/img/player-boy.jpeg";
    setTimeout("slide1()",2000)
}

function mostrarMenu() {
    let menu = document.getElementById("menu")
    
    if(getComputedStyle(menu).display == "none"){
        menu.style.display = "flex"
    } else {
        menu.style.display = "none"
    }
}

// FUNÇÕES EM JQUERY

$(document).ready(()=>{
    let r = confirm("Seja bem-vindo ao Game Mania! \nDeseja se inscrever na nossa Newsletter e aproveitar as melhores promoções?");
    if (r == true){
        prompt("Digite seu e-mail e fique por dentro das novidades!")
        return true;}
});

$(".card #compra").click(()=>{
    let x
    let cep = prompt("Digite seu cep para consultar o valor e tempo de entrega:")

    if(cep.length == 8){
        x = alert("Envio padrão: 5 - 8 dias úteis\nEntrega relâmpago: 2 dias úteis")
        return true
    }else{
        x = alert("CEP inválido")
        return false
    }
})

$("#voltar-ao-topo").click(()=>{
    scrollTo(0,0)
})