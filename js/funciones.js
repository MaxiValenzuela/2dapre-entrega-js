class Funciones {
    constructor(movies){
        this.movies = movies ;
    }

    filtrarCategoria() {
        let categoria = 'Ingresa la Categoria que le podria interesar : \n 1- Accion \n 2- Anime \n 3- Romantica \n 4- Terror';

        let categoriaSeleccionada = parseInt(prompt(categoria));

        if (isNaN(categoriaSeleccionada) || categoriaSeleccionada <=0 || categoriaSeleccionada >= 5){
            alert('Porfavor ingrese una opcion numerica correcta');
        } else if (categoriaSeleccionada === 1 ) {

            let movieFilter = this.movies.filter ((movie) => movie.categoria === 'Accion');

            let alerta = 'Accion - Peliculas encontradas: \n\n';

            movieFilter.forEach((movie, index) => {
                alerta += `${index+1}. ${movie.nombre} \n Precio; ${movie.precio} \n Duracion: ${movie.duracion} \n`;
            });

            alert(alerta);

        } else if (categoriaSeleccionada === 2) {
            let movieFilter = this.movies.filter((movie) => movie.categoria === 'Anime')

            let alerta = 'Anime - Peliculas encontradas: \n\n';

            movieFilter.forEach((movie, index) => {
                alerta += `${index + 1}. ${movie.nombre} \n Precio: ${movie.precio} USD \n Duración: ${movie.duracion}\n\n`
            });

            alert(alerta);

    }   else if (categoriaSeleccionada === 3) {
        let movieFilter = this.movies.filter((movie) => movie.categoria === 'Romantica')

        let alerta = 'Romantica - Peliculas encontradas: \n\n';

        movieFilter.forEach((movie, index) => {
            alerta += `${index + 1}. ${movie.nombre}\n Precio: ${movie.precio} USD \n Duración: ${movie.duracion}\n\n`
        });

        alert(alerta);

    }    else if (categoriaSeleccionada === 4) {
    let movieFilter = this.movies.filter((movie) => movie.categoria === 'Terror')

    let alerta = 'Terror - Peliculas encontradas:\n\n';

    movieFilter.forEach((movie, index) => {
        alerta += `${index + 1}. ${movie.nombre}\n Precio: ${movie.precio} USD \n Duración: ${movie.duracion}\n\n`
    });

    alert(alerta);
} }

filtrarPrecio() {

    let rangoDePrecio = parseInt(prompt('Ingresa la cantidad que estas dispuesto a pagar por la pelicula:\n\n '));

    if (isNaN(rangoDePrecio) || rangoDePrecio <= 0) {
        alert('Por favor ingresa un monto válido');
    }

    let precioDeFiltrado = this.movies.filter((movie) => movie.precio <= rangoDePrecio);

    let alerta = `Peliculas encontradas de hasta ${rangoDePrecio} USD:\n `;

    precioDeFiltrado.forEach((movie, index) => {
        alerta += `${index + 1}. ${movie.nombre}: ${movie.precio}\n`;
    });

    alert(alerta)
}
}