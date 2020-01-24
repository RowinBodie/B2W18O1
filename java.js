var knop = document.getElementById('bars0');
knop.setAttribute('onclick','showMenu(0)');

var knop = document.getElementById('bars1');
knop.setAttribute('onclick','showMenu(1)');

function showMenu(number){
    if(number == 0){
        var menu = document.getElementById('menu0');
    }
    else if(number == 1){
        var menu = document.getElementById('menu1');
    }
    if(menu.style.height == "0px" || menu.style.height == ""){
        menu.style.height = "auto";
    }
    else{
        menu.style.height = "0px";
    }
}