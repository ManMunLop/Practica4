let notas = [];
let opcion;
let dato;

do {
    opcion = window.prompt("Selecciona una opcion del menu:\n"
        + "A. Introducir una nota al principio\n"
        + "B. Introducir una nota al final\n"
        + "C. Subir todas las notas X puntos\n"
        + "D. Calcular estadísticas actuales\n"
        + "E. Vaciar notas\n"
        + "F. Inicializar N notas a valor X\n"
        + "G. Eliminar la primera nota\n"
        + "H. Eliminar la segunda nota\n"
        + "I. Establecer a 0 todos los suspensos\n"
        + "J. Sustituir una nota por otra\n"
        + "K. Añadir una nota en una posición determinada\n"
        + "L. Contar el número de suspensos\n"
        + "M. Salir: Finalizar la ejecución del programa.\n"
    )

    switch (opcion) {
        case "A":
            dato = parseFloat(window.prompt("Introduce una nota:"));
            notas.unshift(dato);
            break;
        case "B":
            dato = parseFloat(window.prompt("Introduce una nota:"));
            notas.push(dato);
            break;
        case "C":
            dato = parseFloat(window.prompt("Introduce en cuantos puntos deseas incrementar todas las notas:"));
            for (let i = 0; i < notas.length; i++) {
                notas[i] = notas[i] + dato;
            }
            break;
        case "D":
            
            break;
        case "E":
            notas.splice(0, notas.length);
            console.log("Elementos eliminados con exito");
            break;
        case "F":
            let nNotas = parseInt(window.prompt("Introduce cuantas notas deseas generar : "));
            dato = parseFloat(window.prompt("Introduce el valor al que las quieres inicializar: "));
            notas = new Array(nNotas).fill(dato);
            break;
        case "G":
            if (notas.length == 0) {
                console.log("La lista esta vacia")
            }
            notas.shift();
            break;
        case "H":
            if (notas.length >= 2) {
                notas.splice(1, 1);
            }
            break;
        case "I":
            for (let i = 0; i < notas.length; i++) {
                if (notas[i] < 5) {
                    notas[i] = 0;
                };
            }
            break;
        case "J":
            let sust = parseInt(window.prompt("Introduce la nota que deseas sustituir : "));
            dato = parseFloat(window.prompt("Introduce el valor por el las deseas sustituir: "));
            for (let i = 0; i < notas.length; i++) {
                if (notas[i] == sust) {
                    notas[i] = dato;
                };
            }
            break;
        case "K":
            dato = parseFloat(window.prompt("Introduce una nota "));
            let posi = parseInt(window.prompt("Introduce la posicion en la que la desea añadir: "));
            notas.splice(posi - 1, 0, dato);
            break;
        case "L":
            let suspensos=0;
            for (let i = 0; i < notas.length; i++) {
                if (notas[i] < 5) {
                    suspensos++;
                };
            }
            console.log("Tienes " + suspensos +  " suspensos");
            break;
        case "M":
            window.alert("Saliendo del programa....")
            opcion = "M"
            break;
    }

    console.log(notas);

} while (opcion != "M");