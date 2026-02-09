var jugar = true;

while (jugar) {
    var numeroPC = Math.floor(Math.random() * 9) + 1;
    var numeroUsuario;

    do {
        numeroUsuario = parseInt(prompt("ingrese un numero entre 3 y 6:"));
    } while (numeroUsuario < 3 || numeroUsuario > 6);

    var eleccion = prompt("indique si su numero es MAYOR, MENOR o IGUAL al de la computadora?").toLowerCase();

    var resultado = "" ;
    var acierto = false;

    if (numeroUsuario > numeroPC && eleccion === "mayor") {
        acierto = true;
    } else if (numeroUsuario < numeroPC && eleccion === "menor") {
        acierto = true;
    } else if (numeroUsuario === numeroPC && eleccion === "igual") {
        acierto = true;
    }

    if (acierto) {
        resultado = "adivinado";
    } else {
        resultado = "no adivinado.";
    }

    alert(
        "la computadora eligio " + numeroPC +
        ", usted eligio " + numeroUsuario +
        ". su eleccion es " + eleccion +
        ". " + resultado
    );

    var respuesta = prompt("desea jugar otra vez? (si / no)").toUpperCase();

    if (respuesta !== "si") {
        alert("nombre: Marino\nCarnet: 26005740\ngracias por jugar.");
        jugar = false;
    }
}