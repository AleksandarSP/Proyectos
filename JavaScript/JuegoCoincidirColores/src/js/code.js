const inventory = [
    {name: 'a', quantity: 0, cr: "green"},
    {name: 'b', quantity: 0, cr: "blue"},
    {name: 'c', quantity: 0, cr: "red"},
    {name: 'd', quantity: 0, cr: "cyan"},
    {name: 'e', quantity: 0, cr: "purple"},
    {name: 'f', quantity: 0, cr: "yellow"},
    {name: 'g', quantity: 0, cr: "DeepPink"},
    {name: 'h', quantity: 0, cr: "GreenYellow"},
    {name: 'i', quantity: 0, cr: "LightSalmon"},
    {name: 'j', quantity: 0, cr: "Orange"},
    {name: 'k', quantity: 0, cr: "Orchid"},
    {name: 'l', quantity: 0, cr: "Peru"},
    {name: 'm', quantity: 0, cr: "Teal"},
    {name: 'n', quantity: 0, cr: "YellowGreen"},
    {name: 'o', quantity: 0, cr: "brown"},
  ];


var row = document.getElementById("row");  
var son = row.children;
var back = document.getElementById("bootstrap-overrides");
var checkOne = "z";
var checkTwo = "y";

const numbers = [];
// var fragment = document.createDocumentFragment();
for(var i=0 ; i < son.length;){
    //Introducirá el resultado en los div
    var res = getRandom();
    if(inventory[res].quantity != 2){
        numbers.push(res);

        son[i].innerHTML = inventory[res].name;
        son[i].style.backgroundColor = "black";



        // var div = document.createElement("div");

        // div.textContent = "<div class='lado frente' onclick='voltear()'>1</div>";
        // fragment.appendChild(div);
        // alert(fragment.ATTRIBUTE_NODE);
        // son[i].appendChild(fragment);


        // son[i].style.
        inventory[res].quantity += 1;
        i++;
    }
}
//COMPROBAR COINCIDENCIAS
// for (let i = 0; i < son.length;){

// }


//if son[i].innerHtml == son[i].innerHtml
function getName(i){
    alert(son[i].innerHTML);
    return (son[i].innerHTML);
}
function changeColor(i){
    //AL CLICKAR NOS MOSTRARÁ EL COLOR OCULTO
    son[i].style.backgroundColor = inventory[numbers[i]].cr;
    
}
for (let i = 0; i < son.length; i++){

    son[i].addEventListener("click", function(){changeColor(i)});
    son[i].addEventListener("click", function(){checkCoincidance(i)});

}


// function voltear(){
//     if (document.getElementById("carta").style.transform == "rotateY(180deg)") {
//         document.getElementById("carta").style.transform = "rotateY(0deg)";
//     }
//     else{
//         document.getElementById("carta").style.transform = "rotateY(180deg)";
//     }
// }


// for (let i = 0; i < son.length;) {
//     son[i].addEventListener("click", function(){changeColor(i)});
    
//     // alert(son[i].innerHTML)
    
//     var x = son[i].innerHTML;
//     // alert(x);

//     var y = son[i].addEventListener("click",function(){getName(i)});

//     document.write(y + " " + i);


//     // var check1 = getName(i);
//     // alert(check1);

//     // var i = 0;
//     // while( (child = child.previousSibling) != null ) {

//     //     i++;
//     // }
//     //   alert(i);

//     // if (checkOne == "z") {
//     //     checkOne = son[i].addEventListener("click", function(){getName(i)});
//     //     alert("hola " + checkOne);
//     //     continue;
//     // }else{
//     //     var checkTwo = son[i].addEventListener("click", function(){getName(i)});
//     // }
//     // if (checkOne === checkTwo) {
//     //     alert(checkOne);
//     //     alert(checkTwo);
    

//     // }
// }
var x = null;
var y = null;
var xx;
function checkCoincidance(i){
    if(x == null){
        x = i;
        // alert("x " + x);
        xx = x;
        return false;

    }
    else{
        y = i;
        // alert("y " + i);
    }
    if (numbers[x] == numbers[y]) {
        // alert("hola");
        // son[x].style.visibility = "hidden";
        // son[y].style.visibility = "hidden";
        son[x].style.opacity = "0%";
        son[y].style.opacity = "0%";
    }
    else{
        // son[x].style.background = "green";
        // son[y].style.background = "green";

        //Después de que nos aparezca error, volverá a los colores normales
        setTimeout(function(){comprobar(y,xx)},500);
               
    }

    x = null;    
}

function comprobar(y, xx){
    son[y].style.backgroundColor = "black"
    son[xx].style.backgroundColor = "black"
    return false;
}

function checkQuantity(){
    var i = 0;
    var res = 0;
    while (i<inventory.length) {
        res+= inventory[i].quantity;


        i++;
    }
    return res;
}
document.write(checkQuantity());

//Nos devuelve una posición random de la array "arr"
function getRandom(){

    var temp = (Math.floor(Math.random() * (inventory.length)));
    return temp;

}


  
// inventory[0].quantity = 2;
// document.write(inventory[0].quantity);