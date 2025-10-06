// BLOQUE 1 - ARREGLOS

// 1) Registrar libros en un arreglo (5 libros)
let libros = [
    { titulo: "Cien años de soledad", autor: "G. García Márquez", anio: 1967 },
    { titulo: "Don Quijote", autor: "Miguel de Cervantes", anio: 1605 },
    { titulo: "El Principito", autor: "Antoine de Saint-Exupéry", anio: 1943 },
    { titulo: "La sombra del viento", autor: "Carlos Ruiz Zafón", anio: 2001 },
    { titulo: "Sapiens", autor: "Yuval Noah Harari", anio: 2011 }
];

// lista completa de libros
function mostrarLibros() {
    console.log("---- Lista de libros ----");
    for (let i = 0; i < libros.length; i++) {
        let b = libros[i];
        console.log(`${i + 1}. "${b.titulo}", Autor: ${b.autor}, Año: ${b.anio}`);
    }
}

// 2) Buscar un libro por título
function buscarLibro(titulo) {
    // devuelve el objeto libro si lo encuentra, sino null
    for (let i = 0; i < libros.length; i++) {
        if (libros[i].titulo.toLowerCase() === titulo.toLowerCase()) {
            console.log(`Libro encontrado: "${libros[i].titulo}" — Autor: ${libros[i].autor}, Año: ${libros[i].anio}`);
            return libros[i];
        }
    }
    console.log(`No se encontró el libro con título: "${titulo}"`);
    return null;
}

// 3) Contar libros publicados después del año 2000
function contarPost2000() {
    let contador = 0;
    for (let i = 0; i < libros.length; i++) {
        if (libros[i].anio > 2000) contador++;
    }
    console.log(`Cantidad de libros publicados después del año 2000: ${contador}`);
    return contador;
}

// 4) Concatenar todos los títulos en una sola cadena
function concatenarTitulos() {
    let cadena = "";
    for (let i = 0; i < libros.length; i++) {
        cadena += libros[i].titulo;
        if (i < libros.length - 1) cadena += " - ";
    }
    console.log("Todos los títulos concatenados:");
    console.log(cadena);
    return cadena;
}

// 5) Actualizar el año de publicación de un libro
function actualizarAnio(titulo, nuevoAnio) {
    let encontrado = false;
    for (let i = 0; i < libros.length; i++) {
        if (libros[i].titulo.toLowerCase() === titulo.toLowerCase()) {
            console.log(`Actualizando año de "${libros[i].titulo}" de ${libros[i].anio} a ${nuevoAnio}`);
            libros[i].anio = nuevoAnio;
            encontrado = true;
            break;
        }
    }
    if (!encontrado) {
        console.log(`No se encontró el libro para actualizar: "${titulo}"`);
    }
    return encontrado;
}

// BLOQUE 2 - PILA DE OBJETOS 

let pilaLibros = []; // pila vacía

// 6) push: insertar libro en la pila
function pushLibro(libro) {
    pilaLibros.push(libro);
    console.log(`Libro agregado a la pila: "${libro.titulo}"`);
}

// 7) pop: eliminar y mostrar último libro ingresado
function popLibro() {
    if (pilaLibros.length === 0) {
        console.log("La pila está vacía. No hay libros para eliminar.");
        return null;
    }
    let eliminado = pilaLibros.pop();
    console.log(`Libro eliminado (pop): "${eliminado.titulo}", Autor: ${eliminado.autor}, Año: ${eliminado.anio}`);
    return eliminado;
}

// 8) peek: ver el libro en la cima sin eliminarlo
function peek() {
    if (pilaLibros.length === 0) {
        console.log("Peek: la pila está vacía.");
        return null;
    }
    let cima = pilaLibros[pilaLibros.length - 1];
    console.log(`Peek: libro en la cima: "${cima.titulo}", Autor: ${cima.autor}, Año: ${cima.anio}`);
    return cima;
}

// 9) isEmpty: verificar si la pila está vacía
function isEmpty() {
    if (pilaLibros.length === 0) {
        console.log("La pila está vacía.");
        return true;
    } else {
        console.log(`La pila tiene ${pilaLibros.length} libro(s).`);
        return false;
    }
}

// 10) Vaciar completamente la pila
function vaciarPila() {
    if (pilaLibros.length === 0) {
        console.log("La pila ya está vacía.");
        return;
    }
    while (pilaLibros.length > 0) {
        let elim = pilaLibros.pop();
        console.log(`Eliminado: "${elim.titulo}"`);
    }
    console.log("La pila se ha vaciado completamente.");
}
/////////////////////
// EJEMPLOS DE USO (demostración)
/////////////////////

console.log("\n===== BLOQUE 1: ARREGLOS =====\n");
mostrarLibros();

console.log("\nBuscar 'El Principito':");
buscarLibro("El Principito");

console.log("\nContar libros post 2000:");
contarPost2000();

console.log("\nConcatenar títulos:");
concatenarTitulos();

console.log("\nActualizar año de 'La sombra del viento' a 2002:");
actualizarAnio("La sombra del viento", 2002);
console.log("Ver lista actualizada:");
mostrarLibros();

console.log("\n===== BLOQUE 2: PILA =====\n");
// Insertar 3 libros (ejercicio 6)
pushLibro({ titulo: "Clean Code", autor: "Robert C. Martin", anio: 2008 });
pushLibro({ titulo: "The Pragmatic Programmer", autor: "Andrew Hunt & David Thomas", anio: 1999 });
pushLibro({ titulo: "Introduction to Algorithms", autor: "Cormen et al.", anio: 2009 });

// Mostrar estado de la pila
isEmpty();
console.log("Contenido de la pila (de base a cima):");
for (let i = 0; i < pilaLibros.length; i++) {
    console.log(`${i + 1}. "${pilaLibros[i].titulo}" - ${pilaLibros[i].autor} (${pilaLibros[i].anio})`);
}

// Ejercicio 7: pop
console.log("\nAplicando pop:");
popLibro();

// Ejercicio 8: peek
console.log("\nPeek:");
peek();

// Ejercicio 9: isEmpty (ya usado arriba, lo mostramos otra vez)
console.log("\nVerificando si la pila está vacía ahora:");
isEmpty();

// Ejercicio 10: vaciar completamente la pila
console.log("\nVaciando pila:");
vaciarPila();
console.log("Verificando pila después de vaciar:");
isEmpty();