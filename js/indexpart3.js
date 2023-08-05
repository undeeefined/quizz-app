// nav sitio web
document.getElementById("icon-menu").addEventListener("click", mostrar_menu);

function mostrar_menu(){

    document.getElementById("move-content").classList.toggle('move-container-all');
    document.getElementById("show-menu").classList.toggle('show-lateral');
}

//arreglo que contiene las respuestas correctas

let correctas = [4, 3, 1, 1, 2, 3, 2, 4, 3, 2, 2, 1, 3, 2, 4];

//arreglo donde se guardan las respuestas del usuario

let opcion_elegida = [];

let cantidad_correctas = 0;

//funcion que toma el num de pregunta y el input elegido de esa pregunta

function respuesta(num_pregunta, seleccionada) {
    //guardo la respuesta elegida
    opcion_elegida[num_pregunta] = seleccionada.value;

    //el siguiente codigo es para poner en color blanco
    //el fondo de los inputs para cuando elige la opcion
    //armo el id para seleccionar el section correpondiente
    id = "p" + num_pregunta;

    labels = document.getElementById(id).childNodes;
    labels[3].style.backgroundColor = "white";
    labels[5].style.backgroundColor = "white";
    labels[7].style.backgroundColor = "white";
    labels[9].style.backgroundColor = "white";
    labels[11].style.backgroundColor = "white";
    labels[13].style.backgroundColor = "white";
    labels[15].style.backgroundColor = "white";
    labels[17].style.backgroundColor = "white";
    labels[19].style.backgroundColor = "white";
    labels[21].style.backgroundColor = "white";
    labels[23].style.backgroundColor = "white";
    labels[25].style.backgroundColor = "white";
    labels[27].style.backgroundColor = "white";
    labels[29].style.backgroundColor = "white";
    

    
}

// Validacion de formulario
function corregir() {
    //obtener todos los radio del formulario
    let radios = document.querySelectorAll("input[type=radio]:checked");

    if (radios.length <= 14) {
        alert("You must answer all the questions.");
        return;
    }

    cantidad_correctas = 0;
    for (i = 0; i < correctas.length; i++) {
        if (correctas[i] == opcion_elegida[i]) {
            cantidad_correctas++;

        }

    }

    document.getElementById("resultado").innerHTML = cantidad_correctas;
}
