let set_part = new Set();
let opcion;
let dato;

do {
    opcion = window.prompt("Selecciona una opcion del menu:\n"
        + "A. Inscribir un participante\n"
        + "B. Dar de baja un participante\n"
        + "C. Comprobar inscripción\n"
        + "D. Mostrar participantes\n"
        + "E. Vaciar inscripciones\n"
        + "F. Salir del programa\n"
    )

    switch (opcion) {
        case "A":
        dato = window.prompt("Introduce el nombre del participante: ")  
        if(set_part.has(dato)){
            alert("No se ha podido añadir ya que ya existe");
        }else{
            set_part.add(dato);
        }    
            break;
        case "B":
            dato = window.prompt("Introduce el nombre del participante a eliminar: ")  
            if(set_part.has(dato)){
                set_part.delete(dato);
                alert("Participante Eliminado");
            }else{
                alert("El participante no existe");
            }
            break;
        case "C":
            dato = window.prompt("Introduce el nombre del participante a comprobar: ")  
            if(set_part.has(dato)){
                alert("Participante inscrito");
            }else{
                alert("Participante no inscrito");
            }
            break;
        case "D":
            let contador = 0
            for (let dato of set_part) {
                console.log(`Participante : ${dato}`);
                contador++;
            }
            console.log(`Son ${contador} participantes`);
            break;
        case "E":
            for (let dato of set_part) {
               set_part.delete(dato);
            }
            break;
        case "F":
            console.log("Saliendo del programa...");
            opcion="F";
            break;
    }

} while (opcion != "F")