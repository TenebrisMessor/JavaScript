//Fetch API

function obtenerEmpleados() {
    const archivo = 'empleados.json';
    fetch(archivo)
        .then(resultado=>{
            console.log(resultado);
        })
}
obtenerEmpleados();