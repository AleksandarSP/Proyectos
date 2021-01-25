
// var bola = document.getElementById("bola");
// var bola2 = document.getElementById("bola");

// bola.style.background = "green";

// moverBola();

// function moverBola(){
//     // bola.style.left = ((screen.width) + "px");
//     // document.write(screen.width + "<br/>" + screen.height);
//     // document.write((screen.width + "px").toString);
//     var yokse = ((screen.width - 300).toString() + "px")
//     bola.style.position = "absolute";
//     bola.style.left = yokse;
//     bola.style.transitionDuration = "3s";
//     bola.style.transform = "translate(20px, 200px)";
//     // bola.style.left = "-100px";
//     // document.write(typeof yokse)
//     console.log(yokse);

// }


var cont = document.getElementById("container");
var but = document.getElementById("but");
var bod = document.getElementById("body");
var sec = document.getElementById("sec");


but.onclick = function(){mostrarOcultarHeader()};


sec.style.position = "relative"
cont.style.position = "relative";

window.onload = function(){cambiarColorFondo()};


setTimeout(function(){tiempo()},1000);


function cambiarColorFondo(){
    sec.style.top = "-200px";
    cont.style.top = "-300px";
    cont.style.visibility = "visible";
    bod.style.background = "#b1f1da";
}

function mostrarOcultarHeader() {
    if (cont.style.display == "none") {
        
        cont.style.display = "block";
    }else{
        cont.style.display = "none";
    }
}
function tiempo(){
    sec.style.top = "0px";
    cont.style.top = "0px";
}
