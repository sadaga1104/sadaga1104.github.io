//Función que me aplica el estilo a la opción seleccionada en el menu y quita la previamente seleccionada
function seleccionar(link){
    var opciones = document.querySelectorAll('#links a');
    opciones[0].className = "";
    opciones[1].className = "";
    opciones[2].className = "";
    opciones[3].className = "";
    opciones[4].className = "";
    link.className = "seleccionado";
    //Hacemos desaparecer el menu una vez que se ha seleccionado una opción en el modo responsive
    var x = document.getElementById("nav");
    x.className = "";
}
//Función que muestra el menu responsive
function responsiveMenu(){
    var x =  document.getElementById("nav");
    if(x.className===""){
        x.className = "responsive";
    }else{
        x.className = "";
    }
}
//Detecto el scrolling para aplicar la animación de las barras de habilidades
window.onscroll = function(){
    efectoHabilidades()
};

//Función que aplica la animación de la barra de habilidades
function efectoHabilidades(){
    var skills = document.getElementById("skills");
    var distancia_skills = window.innerHeight - skills.getBoundingClientRect().top;
    if(distancia_skills >= 300){
        document.getElementById("html").classList.add("barra-progreso1");
        document.getElementById("js").classList.add("barra-progreso2");
        document.getElementById("Ws").classList.add("barra-progreso3");
        document.getElementById("py").classList.add("barra-progreso4");
        document.getElementById("cpp").classList.add("barra-progreso5");
        document.getElementById("mysql").classList.add("barra-progreso6");
    }
}   