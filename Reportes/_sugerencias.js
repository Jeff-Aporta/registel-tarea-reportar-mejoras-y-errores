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
        titulo: `SUGERENCIA PARA LA MEJORA DE LA INTERFAZ DEL BOTÓN DE COLAPSAR/DESCOLAPSAR`,
        contenido: `
            En relación a la actual implementación del botón de colapsar/descolapsar en nuestra interfaz, me gustaría proponer una modificación con el objetivo de eliminar posibles confusiones y hacer que la funcionalidad sea más explícita y eficiente.

            La propuesta consiste en dividir el botón actual de colapsar/descolapsar en dos botones separados: uno específico para colapsar y otro específico para descolapsar. Esta modificación ofrece varias ventajas:

            <b>1. Claridad de Acción:</b> Al tener botones separados para colapsar y descolapsar, los usuarios no tendrán dudas sobre la acción que realizará, lo que mejora la claridad y reduce la posibilidad de comportamientos inesperados.

             <b>2. Ahorro de Espacio:</b> Al utilizar dos botones más pequeños en lugar de uno grande para alternar entre las dos funciones, se optimiza el uso del espacio en la interfaz, lo que puede ser especialmente beneficioso en el diseño.

             <b>3. Mejor Experiencia de Usuario:</b> La separación de las funciones puede proporcionar una experiencia de usuario más intuitiva y agradable, ya que los usuarios sabrán exactamente cómo interactuar con la interfaz.

             <b>4. Consideración de Recursos:</b> Es importante tener en cuenta que la acción de descolapsar generalmente consume más recursos que la de colapsar. Por lo tanto, descolapsar cuando se desea colapsar puede ser considerado un error que podría impactar negativamente en el rendimiento de la aplicación.

             <center>
                <img class="miniatura" src="https://i.ibb.co/ZJr9QDJ/colapse.jpg" data-lightbox-group="${Math.random()}" loading="lazy">
            </center>
        `
    }
]