export default [
    {
        titulo: `
            PROBLEMA DE DESFASE ENTRE COLUMNAS Y ENCABEZADOS EN LA TABLA
        `,
        contenido: `
        Al observar la tabla, noto que existe un desfase entre las columnas y sus encabezados correspondientes. Esta discrepancia entre el contenido de la tabla y los encabezados puede causar confusiones al revisar o interpretar los datos. Para mejorar la claridad y la usabilidad, sugiero alinear adecuadamente las columnas con sus respectivos encabezados. Esto ayudará a los usuarios a comprender de manera más efectiva la información presentada en la tabla.
        <div class="flex-center-wrap">
            <img class="miniatura" src="https://i.ibb.co/ZcY3pyQ/Captura-de-pantalla-2023-08-30-082750.png" data-lightbox-group="${Math.random()}" loading="lazy">
        </div>
        `
    },
    {
        titulo: `
            Problema al Usar la Función de Búsqueda en la Tabla
        `,
        contenido: `
            Cuando utilizo la función de búsqueda en la tabla, noto dos comportamientos problemáticos. Primero, al utilizar la función de búsqueda, se habilita una columna llamada "Editar". Segundo, esta columna no se habilita hasta que se busca una cadena de al menos dos caracteres. No está claro si este comportamiento se implementó deliberadamente o si se trata de un error en el funcionamiento. La inconsistencia en la visibilidad de la columna "Editar" puede resultar confusa para los usuarios, ya que esta columna debería mantener el mismo estado (visible o invisible) en todo momento.

            Para mejorar la experiencia del usuario, sugiero que la columna "Editar" mantenga su estado (visible o invisible) de manera constante, independientemente de si se utiliza la función de búsqueda o de la longitud de la cadena buscada. Esto proporcionaría una experiencia más coherente y predecible a los usuarios al interactuar con la tabla.

            <div class="flex-center-wrap">
                <img class="miniatura" src="https://i.ibb.co/d4RBgrx/Captura-de-pantalla-2023-08-30-084908.png" data-lightbox-group="${Math.random()}" loading="lazy">
            </div>
        `,
    },
    {
        titulo: `
        UTILIZACIÓN DE MAYÚSCULAS EN CORREOS ELECTRÓNICOS
        `,
        contenido: `
        Es evidente que en la base de datos, los correos electrónicos se almacenan respetando las mayúsculas, lo que, si bien no es un error, podría beneficiarse al mostrarlos en minúscula. Esto se debe a que las direcciones de correo electrónico no son "case sensitive", es decir, no hacen distinción entre mayúsculas y minúsculas.

        Para mejorar la legibilidad y consistencia de los datos, sugiero mostrar los correos electrónicos en minúscula al visualizarlos en la interfaz de usuario. Esto eliminaría cualquier posible confusión relacionada con el uso de mayúsculas o minúsculas en las direcciones de correo electrónico y garantizaría una experiencia más uniforme para los usuarios.

        <div class="flex-center-wrap">
            <img class="miniatura" src="https://i.ibb.co/S0vmXQL/Captura-de-pantalla-2023-08-30-085828.png" data-lightbox-group="${Math.random()}" loading="lazy">
        </div>
        `
    },
    {
        titulo: `
            PROBLEMAS NO PREDECIBLES AL USAR LA FUNCIÓN DE BÚSQUEDA EN LA TABLA
        `,
        contenido: `
            Al realizar pruebas experimentales al ingresar palabras aleatorias en el campo de búsqueda, se ha observado un comportamiento no predecible en la tabla. En algunos casos, aparecen columnas adicionales como "Fecha del Último Login," "Activar/Desactivar," y "Restaurar Contraseña." Este comportamiento es problemático ya que no es consistente y puede confundir a los usuarios. Además, si esta funcionalidad fue implementada a propósito, la falta de un scroll horizontal impide ver la información completa de las celdas, lo que afecta la usabilidad de la tabla.
	
            Se sugiere revisar y estandarizar el comportamiento de la función de búsqueda para que sea predecible y coherente en todos los casos. Si se decide mantener la aparición de columnas adicionales, es importante agregar un scroll horizontal para permitir a los usuarios acceder a toda la información de las celdas. Esto mejorará la experiencia del usuario y garantizará un uso eficaz de la tabla en todas las situaciones.

            <div class="flex-center-wrap">
                <img class="miniatura" src="https://i.ibb.co/TPm1WXL/Captura-de-pantalla-2023-08-30-141842.png" data-lightbox-group="2" loading="lazy">
                <img class="miniatura" src="https://i.ibb.co/Njgc4Mk/Captura-de-pantalla-2023-08-30-141857.png" data-lightbox-group="2" loading="lazy">
                <img class="miniatura" src="https://i.ibb.co/KxFWpFJ/Captura-de-pantalla-2023-08-30-141912.png" data-lightbox-group="2" loading="lazy">
            </div>
        `,
    },
    
]