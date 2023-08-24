export default [
    {
        titulo: `Efectos de transparencia en reporte Puntos de Control`,
        contenido: `
            En el informe de "Puntos de Control", se ha implementado una actualización que introduce efectos de transparencia en elementos repetidos. Esta mejora tiene como objetivo proporcionar una mayor claridad visual en el informe al resaltar los elementos únicos y relevantes, mejorando así la experiencia del usuario al facilitar la identificación de datos en el informe.
        `
    },
    {
        titulo: `Optimización del algoritmo de filtrado`,
        contenido: `
            He realizado una mejora significativa en el algoritmo de filtrado en nuestra aplicación. Ahora, el filtrado es considerablemente más rápido gracias a una modificación en la cual oculto temporalmente la tabla mientras se lleva a cabo el proceso de filtrado. Esta optimización evita que se realicen cálculos gráficos innecesarios hasta que se haya completado todo el proceso de filtrado, lo que resulta en una experiencia más eficiente y ágil para el usuario.
        `
    },
    {
        titulo: `Optimización de la carga de reporte Alarmas por Vehículo`,
        contenido: `
            En el reporte "Alarmas por Vehículo", he realizado una modificación importante en la forma en que se muestra la información de ubicación. Ahora, en lugar de mostrar detalles como la ciudad, el departamento o el país, he decidido mostrar únicamente la dirección relevante. Para obtener información adicional sobre la ubicación, he transformado el texto en un enlace directo a Google Maps. Al hacer clic en este enlace, los usuarios pueden ser redirigidos a Google Maps, donde podrán ver la ubicación exacta de la alarma marcada en el mapa. Esta mejora ofrece una forma más precisa y detallada de acceder a la información de ubicación.
        `
    },
    {
        titulo: `Cambio en la visualización de la información de ubicación en reporte Alarmas por Vehículo`,
        contenido: `
            En el reporte "Alarmas por Vehículo", he introducido una modificación clave en la forma en que se presenta la información de ubicación. he incorporado un icono claramente identificable que sirve como enlace a Google Maps. Este icono brinda a los usuarios la indicación visual de que al hacer clic, podrán acceder directamente a la ubicación exacta de la alarma en un mapa interactivo. Esta mejora hace que la obtención de información detallada de ubicación sea más accesible y comprensible para nuestros usuarios.

            ¿Le gustaría que el enlace en el informe "Alarmas por Vehículo", que actualmente se abre como una pestaña nueva en su navegador web, se cambie para abrirse en una ventana flotante en su lugar?
        `
    },
    {
        titulo: `Cambio en la consulta SQL del reporte Alarmas por Vehículo`,
        contenido: `
            He realizado una mejora importante en la carga de "Alarmas por Vehículo". En la consulta SQL, decidí reducir la cantidad de columnas enviadas, lo que ha tenido un impacto significativo en la velocidad de recepción de datos por parte del cliente. Estimo que esta mejora ha al menos duplicado la velocidad de carga en comparación con la versión anterior del informe.
        `
    },
    {
        titulo: `Técnica de indexación en tablas, evitando redundancia de datos, aplicada en reporte Alarmas por Vehículo`,
        contenido: `
            Realicé una mejora en la base de datos implementando tablas indexadas con el propósito de evitar la redundancia de localizaciones y alarmas durante la transferencia de datos entre el cliente y el servidor. Esto se llevó a cabo con el objetivo principal de reducir el peso de transferencia y, como resultado, agilizar significativamente el proceso de carga en el reporte.

            Aunque no fue posible estimar un valor preciso de mejora, basándonos en las observaciones iniciales, parece que esta optimización ha contribuido a una mejora aproximada del 10% en la velocidad de carga del informe.
        `
    },
    {
        titulo: `Aviso de no cambiar de foco en reportes demorados, para funcionalidad de copiar Excel`,
        contenido: `
            He realizado una mejora en la funcionalidad del botón "Copiar Excel" en informes como "Alarmas por Vehículo" o "Puntos de Control". Anteriormente, se presentaba un problema cuando la pestaña perdía el foco, lo que podría afectar la operación de copia. Para abordar este problema, he implementado una solución que incluye la visualización de un aviso.

            Ahora, cuando los informes, especialmente aquellos que pueden tomar más tiempo en generarse, están en proceso y se detecta que la pestaña pierde el foco antes de completarse, se muestra un mensaje de aviso solicitando al usuario que espere en la pestaña actual. Además, si la pestaña efectivamente pierde el foco antes de la finalización del proceso, se muestra un mensaje de alerta correspondiente para informar al usuario sobre la situación.

            Esta mejora tiene como objetivo proporcionar una experiencia más clara y fluida para el usuario al abordar posibles problemas relacionados con la pérdida de foco durante la generación de informes demorados.
        `
    },
    {
        titulo: `Optimización en colapsamiento y descolapsamiento de filas en reportes por medio de CSS`,
        contenido: `
            He llevado a cabo una optimización técnica en nuestros reportes mediante la implementación de un enfoque más sofisticado para mejorar la velocidad de colapsamiento y descolapsamiento. En lugar de aplicar manualmente estilos de forma individual a través de JavaScript, he implementado la asignación de clases CSS dinámicamente.

            Este enfoque implica la generación dinámica de clases CSS en función de las interacciones del usuario, lo que permite una manipulación más eficiente de los elementos de los reportes. Al aplicar estas clases dinámicas, hemos logrado una reducción significativa de la carga de trabajo en el lado del cliente, minimizando así la complejidad y el consumo de recursos durante el colapsamiento y descolapsamiento de las filas.

            Además, esta técnica ha permitido la optimización del rendimiento en tiempo real, lo que resulta en una experiencia de usuario más rápida y fluida al interactuar con los reportes.
        `
    },
    {
        titulo: `En "Categoria por dinero" y "Categoria por pasajero", se ha corregido el query SQL para que se adapte dinámicamente a los vehículos seleccionados`,
        contenido: `
            He realizado una corrección significativa en los queries SQL de los reportes "Categoría por Dinero" y "Categoría por Pasajero". El problema identificado radicaba en que las consultas siempre estaban consultando todos los vehículos disponibles, lo que generaba ineficiencias en la generación de los reportes. Para abordar esta situación, realicé ajustes para que los reportes se generen de acuerdo a los vehículos seleccionados.

            Con esta corrección, ahora los queries SQL se adaptan dinámicamente a los vehículos seleccionados por el usuario.
        `
    },
]