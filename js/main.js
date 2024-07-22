// Interaccion con el usuario
const datos = new Funciones(movies)

alert('¡Bienvenidos al videoclub MxMaster! aqui podra comprar las peliculas segun su gusto, lo invito a seguir');


let menu_str = `
    Porfavor ingrese la opcion que desea seleccionar:
    1- Seleccionar por CATEGORIA
    2- Seleccionar por PRECIO
`;

while (true) {
    let opcion = parseInt(prompt(menu_str));

    if(isNaN(opcion)) {
        alert('Porfavor ingrese una opcion numerica valida');
    } else if (opcion ===1) {
        datos.filtrarCategoria();
    } else if (opcion === 2) {
        datos.filtrarPrecio();
    }  
    if (confirm('Desea salir de la pagina?')){
        break; 
    }
}





