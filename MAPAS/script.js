let libros = new Map();
let opcion;
let isbn;
let titulo;
let autor;
let ejemplares;

do {
    opcion = window.prompt("Selecciona una opcion del menu:\n"
        + "A. Añadir un libro\n"
        + "B. Eliminar un libro\n"
        + "C. Consultar un libro\n"
        + "D. Mostrar catálogo\n"
        + "E. Modificar ejemplares\n"
        + "F. Buscar libros de un autor\n"
        + "G. Prestar un libro\n"
        + "H. Devolver un libro\n"
        + "I. Mostrar estadísticas\n"
        + "J. Vaciar catálogo\n"
        + "K. Salir\n"
    )

    switch (opcion) {
        case "A":
            isbn = window.prompt("Introduce el ISBN del libro: ");
            titulo = window.prompt("Introduce el titulo del libro: ");
            autor = window.prompt("Introduce el autor del libro: ");
            ejemplares = window.prompt("Introduce el nº de ejemplares del libro: ");
            
            if(libros.has(isbn)){
                alert("Ya existe un libro con dicho ISBN")
            }else{
                libros.set(isbn, [titulo, autor, ejemplares]);
            }

            break;
        case "B":
            isbn = window.prompt("Introduce el ISBN del libro: ");
                       
            if(libros.has(isbn)){
                libros.delete(isbn);
            }else{
                alert("El ISBN no existe");
            }

            break;
        case "C":
            isbn = window.prompt("Introduce el ISBN del libro: ");

             if(libros.has(isbn)){
                alert(libros.get(isbn));
            }else{
                alert("El ISBN no existe");
            }
            break;
        case "D":
            let claves = libros.keys();

            console.log(claves);
            break;
        case "E":

            break;
        case "F":

            break;
        case "G":

            break;
        case "H":

            break;
        case "I":

            break;
        case "J":

            break;
        case "K":

            break;
    }

    console.log(libros);

} while (opcion != "K");