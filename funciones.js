<<<<<<< HEAD
function cambiarColorTexto() {
    var elemento = document.getElementById("colorletras");
    elemento.style.color = "green";
}

function restaurarColorTexto() {
    var elemento = document.getElementById("colorletras");
    elemento.style.color = "black";
}


function agrandarTexto() {
    var elemento = document.getElementById("tamletras");
    elemento.style.fontSize = "24px";
}

function restaurarTexto() {
    var elemento = document.getElementById("tamletras");
    elemento.style.fontSize = "16px";
}


 
=======
var form = document.getElementById("boton");
form.addEventListener("submit", function(evt){
    evt.preventDefault();

    if(boton.value === null || boton.value === ""){
        mensajeError.push("Ingresa un correo electrónico");
    }
});
>>>>>>> 2a2a0552afc800f8b0fd04f51b74b0ede40f1aac
