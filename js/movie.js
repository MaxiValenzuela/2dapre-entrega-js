let setId = 1;

class Movie {
    constructor(nombre, precio, duracion , categoria) {
        
        let tipoDePelicula = [
            'Accion',
            'Anime',
            'Romantica',
            'Terror'
        ]

        this.id = setId ++
        this.nombre = nombre,
        this.precio = precio,
        this.duracion = duracion,
        this.categoria = tipoDePelicula[categoria]
    }
}

let movies = [
    new Movie('Duro de matar', 3500, '2 horas', 0),
    new Movie('Rapidos y Furiosos', 2500, '1 hora 50 min', 0),
    new Movie('My Hero Academia : You are next', 7000, '2 horas 20 min', 1),
    new Movie('Como si fuera la primera vez', 1500, '3 horas', 2),
    new Movie('Marry me', 1000, '1 hora  30 min', 2),
    new Movie('Dragon Ball Super: Broly', 5000 , '2 horas 20 min', 1),
    new Movie('La llamada', 2500, '2 horas', 3),
    new Movie('Insidius', 3000, '1 hora', 3),
    new Movie('Transformers', 1550, '2 horas', 0),
    new Movie('Demon Slayer: Arco del tren infinito', 8000, '2 horas 45 minutos', 1),
    new Movie('Anabel', 800, '1 hora 10 min', 3),
    new Movie('Gurren Laggan ', 10000, '3 horas', 1),
]