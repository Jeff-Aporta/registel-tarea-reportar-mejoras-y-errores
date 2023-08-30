export default [
    {
        titulo: `
            Conservación de Pantalla Anterior
        `,
        contenido: `
            Al abrir el formulario de liquidación, debería conservarse la pantalla anterior detrás para dar continuidad a la interfaz y para que al cerrar el formulario de liquidación, se regrese a la pantalla anterior sin tener que pasar por una pantalla en blanco.
        `
    },
    {
        titulo: `
        Optimización de Espacio
        `,
        contenido: `
        Combinar el campo "Vehículo" con "Número Interno" y llamarlo "Móvil" podría ahorrar espacio y simplificar la interfaz.
        `,
    },
    {
        titulo: `
            Columnas que pueden ser omitidas
        `,
        contenido: `
            Evaluar la comprensión de los términos "Numeración Inicial" y "Numeración Final" por parte de los usuarios. Se sugiere utilizar términos más naturales como simplemente pasajeros y realizar la resta de los valores para determinar los números.
        `
    },
    {
        titulo: `
            Mejora del Aviso "Alerta!!!"
        `,
        contenido: `
            Agregar espacio de separación o padding alrededor del aviso "Alerta!!! Este vehículo ha dejado de transmitir información hace algún tiempo" para evitar que toque otras secciones.

            <center>
                <img class="miniatura" src="https://i.ibb.co/2d9vFYL/Captura-de-pantalla-2023-08-24-161039.png" data-lightbox-group="${Math.random()}" loading="lazy">
            </center>
        `,
    },
    {
        titulo: `
            Simplificación de Encabezados
        `,
        contenido: `
            Simplificar los encabezados como "Fecha/Hora de Ingreso" a "Fecha de Ingreso" y "Distancia en KM" a "Distancia (Km)" para mayor concisión
        `,
    },
    {
        titulo: `
            Paleta de Colores Coherente
        `,
        contenido: `
            Asegurar una paleta de colores coherente y uniforme en todo el diseño para mantener la consistencia visual, hay muchos colores del mismo tono, pero con diferente brillo o saturación.
        `,
    },
    {
        titulo: `
            Bordes al cliquear números en Sección de "Total Liquidación"
        `,
        contenido: `
            Evitar que los números en la sección de "Total Liquidación" muestren un borde que da la impresión de que son editables si no lo son.
        `,
    },
    {
        titulo: `
            Icono de Edición
        `,
        contenido: `
            Si el nombre del conductor abre un modal de edición, debería representarse con un icono de edición para mayor claridad
            <div class="flex-center-wrap"style="font-size: 60px">
                <i class="fa-solid fa-pen-to-square"></i>
                &nbsp;
                <i class="fa-solid fa-pen"></i>
            </div>
        `,
    },
    {
        titulo: `
            Presentación de Distancia Recorrida
        `,
        contenido: `
            La unidad "km" en la distancia recorrida podría mostrarse como texto plano junto al valor para un diseño más limpio.
            
            <center>
                <img class="miniatura" src="https://i.ibb.co/H4nGjv3/Captura-de-pantalla-2023-08-24-162602.png" data-lightbox-group="${Math.random()}" loading="lazy">
            </center>
        `,
    },
    {
        titulo: `
            Eliminación de Decimales Innecesarios
        `,
        contenido: `
            Eliminar los decimales innecesarios en las columnas de Tarifa y Distancia en KM si el valor termina en ".0"
        `,
    }
]