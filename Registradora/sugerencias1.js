export default [
    {
        titulo: `
        MEJORAS RECOMENDADAS EN LAS HERRAMIENTAS DE BÚSQUEDA
        `,
        contenido: `
        Al revisar las herramientas de búsqueda, se han identificado varias cosas que requieren mejoras para brindar una experiencia más clara y eficiente. La falta de etiquetas (labels) en algunos campos y la confusión sobre su funcionalidad generan obstáculos para los usuarios. Además, la presencia de campos numéricos sin información adicional y las opciones innecesarias para la cantidad de filas a consultar también se han destacado como áreas que necesitan atención.
        `
    },
    {
        titulo: `
        AGREGAR ETIQUETAS A CAMPOS PARA MEJORAR LA CLARIDAD
        `,
        contenido: `
        Se ha identificado la necesidad de agregar etiquetas a todos los campos en la interfaz, incluso a aquellos que actualmente solo tienen placeholders. Esto es esencial para brindar una comprensión clara de la funcionalidad de cada campo y mejorar la usabilidad de la aplicación.
        `,
    },
    {
        titulo: `
        ACLARAR LA FUNCIONALIDAD DE "AYER" Y "HOY" EN LOS CAMPOS DE FECHAS
        `,
        contenido: `
        Se ha identificado una falta de claridad en la funcionalidad de "Ayer" y "Hoy" en relación con los campos de fechas en la interfaz. Los usuarios pueden no comprender completamente el propósito de estas opciones, lo que podría generar confusión.

        Para mejorar la comprensión de los usuarios, se recomienda agregar información adicional que explique claramente la funcionalidad de "Ayer" y "Hoy" en relación con los campos de fechas. Esto puede incluir una breve descripción o un mensaje de ayuda contextual que indique cómo se aplican estas opciones y qué tipo de resultados se pueden esperar al seleccionarlas.
        `,
    },
    {
        titulo: `
        MEJORAR EL CAMPO NUMÉRICO PARA BÚSQUEDA
        `,
        contenido: `
        Se ha identificado la necesidad de mejorar el campo numérico utilizado para configurar la cantidad de registros a mostrar en una búsqueda. Actualmente, el campo por defecto no proporciona una opción predeterminada significativa, y su formato podría mejorarse para permitir selecciones más precisas.

        Para mejorar la usabilidad y la precisión en la configuración de la cantidad de registros a mostrar, se sugiere:
        Cambiar el valor por defecto del campo numérico a un número más significativo que "10", que pueda ser una opción comúnmente utilizada.

        Considerar cambiar el campo numérico a un input de tipo "number", lo que permitirá a los usuarios utilizar controles de incremento y decremento para seleccionar el número deseado de registros. Esto mejorará la experiencia del usuario y facilitará la selección precisa de la cantidad de registros a mostrar.

        Estas mejoras contribuirán a una experiencia de usuario más eficiente al configurar la cantidad de registros en una búsqueda.
        `,
    },
    {
        titulo: `
        PROPORCIONAR AYUDA CONTEXTUAL Y ACCESO A DOCUMENTACIÓN
        `,
        contenido: `
        Agregar información de ayuda contextual o un enlace a la documentación para aclarar la funcionalidad de los campos y proporcionar instrucciones claras sobre cómo realizar la búsqueda, como un manual o tutorial.
	
	    Se sugiere mejorar las instrucciones en la interfaz, incluyendo información de ayuda junto a los campos relevantes. Además, proporcionar un enlace claro a la documentación que brinde instrucciones detalladas sobre cómo utilizar todas las funciones de búsqueda.
        `,
    },
    {
        titulo: `
        REDUNDANCIA DEL BOTÓN "ÚLTIMOS 30 REGISTROS" EN LAS HERRAMIENTAS DE BÚSQUEDA
        `,
        contenido: `
        Se ha identificado una redundancia en las herramientas de búsqueda debido a la presencia del botón "Últimos 30 Registros". Dado que ya existe un input especializado para definir la cantidad de registros a mostrar, la inclusión de este botón adicional es innecesaria y puede generar confusión en los usuarios.
	
        Para simplificar y evitar redundancias en las herramientas de búsqueda, se recomienda eliminar el botón "Últimos 30 Registros". Los usuarios pueden configurar la cantidad de registros a mostrar utilizando el input especializado designado para este propósito. Esta acción simplificará las herramientas de búsqueda y garantizará una experiencia más coherente para los usuarios al realizar búsquedas de registros.
        `,
    },
    {
        titulo: `
        LIMITACIONES EN LA FUNCIÓN DE EXPORTAR A EXCEL
        `,
        contenido: `
        Se ha identificado una limitación en la función de exportar a Excel, ya que actualmente solo exporta un vehículo con una fecha específica en lugar de la información visible en la tabla de forma dinámica. Esta restricción puede limitar la utilidad de la función de exportación y no permite a los usuarios obtener una vista completa de los datos.

        Para mejorar la utilidad de la función de exportar a Excel, se recomienda revisar y ajustar la funcionalidad para que permita a los usuarios exportar de forma dinámica la información visible en la tabla en lugar de un vehículo con una fecha específica. Esto proporcionará a los usuarios una capacidad más amplia para exportar y analizar datos según sus necesidades específicas.
        `,
    },
    {
        titulo: `
        MEJORA NECESARIA EN LA FUNCIÓN DE CONSULTA AUTOMÁTICA
        `,
        contenido: `
        La función de consulta automática que refresca la página cada 10 segundos es incómoda y poco eficiente. En lugar de realizar una consulta mediante Ajax o Fetch, la página se actualiza completamente, lo que puede interrumpir la experiencia del usuario y resultar incómodo.

        Se recomienda cambiar la implementación de la función de consulta automática para utilizar Ajax o Fetch. Esto permitirá realizar consultas de manera más eficiente sin la necesidad de refrescar toda la página. De esta manera, los usuarios podrán mantener una experiencia fluida y continua mientras obtienen datos actualizados de manera periódica.
        `,
    },
    {
        titulo: `
        MEJORA EN LA ORGANIZACIÓN DE CRITERIOS DE BÚSQUEDA Y FILTROS
        `,
        contenido: `
        Se ha identificado una oportunidad de mejora en la organización de los criterios de búsqueda y filtros en la interfaz. Actualmente, el label "> Criterios de Búsqueda" con una flecha puede llevar a confusión, ya que no se trata de un acordeón. Para una experiencia más clara y organizada, se considera más apropiado convertir los criterios y filtros en acordeones.
	
        Se recomienda reorganizar la interfaz para convertir los criterios de búsqueda y filtros en acordeones. Esto permitirá a los usuarios expandir o contraer secciones según sea necesario, lo que facilitará la búsqueda y la visualización de la información.
        `,
    },
    {
        titulo: `
        REDUNDANCIA EN LA FUNCIÓN "CERRAR VUELTA"
        `,
        contenido: `
        Se ha observado una posible redundancia en la función "Cerrar Vuelta" en la vista actual. Dado que existen otros módulos, como Control Lineal o Control Matricial, encargados de esta tarea, la inclusión de esta función en la vista actual podría no ser necesaria y podría generar confusión.
	
        Se recomienda revisar la necesidad de la función "Cerrar Vuelta" en la vista actual y considerar si es redundante debido a la presencia de otros módulos dedicados a la misma tarea. Si es el caso, se podría eliminar esta función para evitar confusiones y mantener una interfaz más limpia y coherente.
        `,
    },
    {
        titulo: `
        RESOLUCIÓN DE SALTO DE LÍNEA EN LAS CELDAS DE LA TABLA
        `,
        contenido: `
        Se ha identificado un problema de diseño en las celdas del cuerpo de la tabla, donde los saltos de línea están generando una visualización no deseada. Esto afecta la legibilidad y presentación de los datos en la tabla.

        Para resolver este problema, se recomienda ajustar el diseño de las celdas de la tabla para evitar los saltos de línea. Esto se puede lograr mediante la configuración adecuada de las propiedades CSS o estilos de las celdas. Asegurarse de que el contenido se ajuste automáticamente al ancho de la celda sin generar saltos de línea mejorará la presentación y legibilidad de los datos en la tabla.

        <div class="flex-center-wrap">
            <iframe width="400" height="250" src="https://www.youtube.com/embed/8FWHPIjJCIk" title="Evitar salto de línea en fechas" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        </div>
        `,
    },
    {
        titulo: `
        REUBICACIÓN DE LA OPCIÓN DE CAMBIO DE CANTIDAD DE REGISTROS
        `,
        contenido: `
        Se ha planteado la idea de reubicar la opción de cambiar la cantidad de registros, ya que actualmente se encuentra dentro de un grupo de filtros. Esta reubicación se considera para mejorar la organización y accesibilidad de esta función.
	
        Se sugiere considerar la opción de cambiar la ubicación de la configuración de la cantidad de registros fuera del grupo de filtros y colocarla en un lugar más destacado o accesible. Esto facilitará a los usuarios la modificación de la cantidad de registros sin tener que acceder a un grupo de filtros específico, lo que mejorará la usabilidad de la función.
        `,
    },
    {
        titulo: `
        FALTA DE IDENTIFICACIÓN DE COLUMNAS EN LA PARTE FERECHA DE LA TABLA
        `,
        contenido: `
        Se ha identificado un problema de falta de identificación de las columnas en la parte derecha de la tabla. Los encabezados de estas columnas no están claramente etiquetados, lo que dificulta la comprensión de qué información representan.

	    Para mejorar la claridad y la comprensión de la tabla, se recomienda proporcionar etiquetas claras para las columnas en la parte derecha. Esto permitirá a los usuarios identificar fácilmente qué información se muestra en cada columna, incluso al desplazarse hacia la parte derecha de la tabla.
        `,
    },
    {
        titulo: `
        TEXTO IRRELEVANTE EN LA PARTE INFERIOR DE LA TABLA
        `,
        contenido: `
        Se ha observado que el texto "Mostrando registros del 1 al 30 de un total de 30 registros" en la parte inferior de la tabla se considera irrelevante y no aporta información útil para los usuarios. 

        Se recomienda eliminar el texto "Mostrando registros del 1 al 30 de un total de 30 registros" .
        `,
    },
]