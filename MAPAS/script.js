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

            if (libros.has(isbn)) {
                alert("Ya existe un libro con dicho ISBN")
            } else {
                libros.set(isbn, [titulo, autor, ejemplares]);
            }

            break;
        case "B":
            isbn = window.prompt("Introduce el ISBN del libro: ");

            if (libros.has(isbn)) {
                libros.delete(isbn);
            } else {
                alert("El ISBN no existe");
            }

            break;
        case "C":
            isbn = window.prompt("Introduce el ISBN del libro: ");

            if (libros.has(isbn)) {
                alert(libros.get(isbn));
            } else {
                alert("El ISBN no existe");
            }
            break;
        case "D":
            let contador = 0;
            for (let [isbn, datos] of libros) {

                console.log(`ISBN: ${isbn}`);
                console.log(`   Título: ${datos[0]}`);
                console.log(`   Autor: ${datos[1]}`);
                console.log(`   Ejemplares: ${datos[2]}`);

                contador++;
            }

            console.log(`Hay un total de ${contador} libros registrados`);
            break;
        case "E":
            isbn = window.prompt("Introduce el ISBN del libro a modificar: ");
            if (libros.has(isbn)) {
                let nuevosEjemplares = parseInt(window.prompt("Introduce la nueva cantidad de ejemplares: "));
                let datos = libros.get(isbn);
                datos[2] = nuevosEjemplares;
            } else {
                alert("El ISBN no existe");
            }
            break;
        case "F":
            let autorBuscado = window.prompt("Introduce el nombre del autor a buscar: ");

            for (let [isbn, datos] of libros) {

                if (datos[1].toLowerCase() == autorBuscado.toLowerCase()) {
                    console.log(`Titulo: ${datos[0]} ISBN: ${isbn}`);
                }
            }

            break;
        case "G":
            isbn = window.prompt("Introduce el ISBN del libro que quieres: ");

            if(libros.has(isbn)) {
                let datos = libros.get(isbn);
                if (datos[2] > 0) {
                    datos[2]--;
                }else{
                    alert("No quedan ejemplares disponibles");
                }
            }
            break;
        case "H":
            isbn = window.prompt("Introduce el ISBN del libro que quieres: ");

            if(libros.has(isbn)) {
                let datos = libros.get(isbn);
                datos[2]++;
            }
            break;
        case "I":
            let totalLibros = libros.size;
            let totalEjem = 0;
            let libroMasEjem = "";
            let maxEjem = 0;

            for (let [isbn, datos] of libros) {
                totalEjem += datos[2];

                if (datos[2] > maxEjem) {
                    maxEjem = datos[2];
                    libroMasEjem = datos[0];
                }
            }
    
            console.log(`El total de libros registrados es: ${totalLibros}`)
            console.log(`El total de ejemplares disponibles es: ${totalEjem}`)
            console.log(`El libro con mas ejemplares disponible es: ${libroMasEjem}`)
            break;
        case "J":
            libros.clear();    
            break;
        case "K":
            window.alert("Saliendo del programa....")
            opcion = "K"
            break;
    }

} while (opcion != "K");