let menuVisible = false;
//oculta o muestra el menu//
function mostrarOcultarMenu(){
    if(menuVisible){
        document.getElementById("nav").classList ="";
        menuVisible = false;
    }else{
        document.getElementById("nav").classList ="responsive";
        menuVisible = true;
    }
}
function seleccionar(){
    //ocultar el menu//
document.getElementById("nav").classList ="";
menuVisible = false;
}
// animacion de habilidades
function efectoHabilidades(){
    var skills = document.getElementById("skills");
    var distancia_skills = skills.getBoundingClientRect().top;
    if(distancia_skills >= 10){
        let habilidades = document.getElementsByClassName("progreso");
        habilidades[0].classList.add("javascript");
        habilidades[1].classList.add("htmlcss");
        habilidades[2].classList.add("photoshop");
        habilidades[3].classList.add("comunicacion");
        habilidades[4].classList.add("trabajo");
        habilidades[5].classList.add("creatividad");
    }
}


//detectar el scroll para aplicar la animacion//
window.onscroll = function(){
    efectoHabilidades();
}