export default [
    {
        titulo: `Caso para Evaluar el Filtrado Textual en el Comportamiento de Filas Colapsadas en un reporte.`,
        contenido: `
            <b>Escenario A - Descolapsar las Filas:</b>
            En este escenario, el sistema descolapsará automáticamente todas las filas que coincidan con los resultados de búsqueda, lo que facilita la visualización de todas las coincidencias de búsqueda, pero puede desordenar la vista.
            
            <b>Escenario B - Filtrar Solo las Filas Visibles: </b>
            En este caso, se mantiene el comportamiento actual del sistema, filtrando solo las filas visibles en el estado colapsado, preservando así la estructura original del informe, pero requiriendo que los usuarios desplieguen manualmente las filas para ver todas las coincidencias de búsqueda.
        `
    },
    {
        titulo: `SOLICITUD DE IMPLEMENTACIÓN DE GENERADOR .XLS CON RESALTADO DE COLORES`,
        contenido: `
            Esta funcionalidad ya está implementada en "Consolidado de despacho" falta implementarla en los demás reportes.

            Presento una solicitud para la implementación de un generador de archivos en formato .xls con la capacidad de resaltar colores en los informes generados. Esta mejora tiene como objetivo mejorar significativamente la experiencia del usuario al proporcionar informes visuales y más comprensibles.

            <b>Justificación</b> 
            La implementación de esta característica es esencial debido a las siguientes razones:

            <b>1. Mejora en la Visualización:</b> El resaltado de colores en los informes permite una mejor diferenciación y comprensión de los datos, lo que facilita la toma de decisiones informadas.

            <b>2. Facilita la Identificación:</b> Los colores ayudan a los usuarios a identificar de manera rápida y efectiva información relevante, tendencias o datos excepcionales en los informes.

            <b>3. Valor Agregado:</b> Esta función agrega un valor significativo a nuestra plataforma, lo que puede resultar en una mayor satisfacción del cliente y la retención de usuarios.

            <b>4. Competitividad:</b> Nos permite mantenernos competitivos en el mercado.

            <center>
                <img class="miniatura" src="https://i.ibb.co/ZfnWKQZ/consolidado-de-despacho.jpg" data-lightbox-group="${Math.random()}" loading="lazy">
            </center>
        `
    },
    {
        titulo: `MEJORA DEL BOTÓN DE COLAPSAR/DESCOLAPSAR EN LA INTERFAZ`,
        contenido: `
        En relación a la actual implementación del botón de colapsar/descolapsar en nuestra interfaz, se propone una modificación con el objetivo de eliminar posibles confusiones y hacer que la funcionalidad sea más explícita y eficiente.
        
        La propuesta consiste en dividir el botón actual de colapsar/descolapsar en dos botones separados: uno específico para colapsar y otro específico para descolapsar. Esta modificación ofrece varias ventajas, incluyendo una mayor claridad de acción, ahorro de espacio, una mejor experiencia de usuario y consideración de recursos. La implementación de dos botones separados para estas funciones podría aumentar la claridad y reducir la posibilidad de errores por parte de los usuarios, mejorando así la eficiencia general de la interfaz.

        <div class="flex-center-wrap">
            <img class="miniatura" src="https://i.ibb.co/ZJr9QDJ/colapse.jpg" data-lightbox-group="a" loading="lazy">
            <img class="miniatura" src="https://i.ibb.co/s6FQzhn/1.png" data-lightbox-group="a" loading="lazy">
        </div>
        `
    },
    {
        titulo: `
            SIMPLIFICAR LAS OPCIONES DE GENERACIÓN DE REPORTES
        `,
        contenido: `
            Se ha identificado que las opciones "PDF/Web" y "Excel" en la solicitud de información previa a la generación de un reporte a veces contienen una única opción de generación. Esto puede simplificarse para mejorar la experiencia del usuario.

            Se sugiere simplificar las opciones de generación de reportes cuando solo hay una única opción disponible, como "PDF/Web" o "Excel". En lugar de mostrar ambas opciones, se puede utilizar una sola etiqueta que indique claramente la opción de generación disponible. Esto simplificará la interfaz y evitará la redundancia innecesaria de opciones.
        `
    }
]