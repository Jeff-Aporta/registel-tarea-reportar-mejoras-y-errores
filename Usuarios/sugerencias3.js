export default [
    {
        titulo: `
            MENSAJE ERRÓNEO AL INGRESAR UN NÚMERO DE CELULAR CORTO
        `,
        contenido: `
            Cuando intento ingresar un número de celular corto en la opción de editar usuario, aparece un mensaje de error que da a entender que se han insertado letras en lugar de números. Sin embargo, el problema real es que el número de celular es demasiado corto y le faltan dígitos para ser válido. El mensaje actual puede llevar a malentendidos.

            Se recomienda modificar el mensaje de error para que refleje con precisión la causa del problema, es decir, que el número de celular es insuficiente en longitud. Esto proporcionará una retroalimentación más clara al usuario y lo ayudará a corregir el error de manera efectiva.

            <div class="flex-center-wrap">
                <img class="miniatura" src="https://i.ibb.co/9yh4dWt/Captura-de-pantalla-2023-08-30-142543.png" data-lightbox-group="${Math.random()}" loading="lazy">
            </div>
        `,
    },
    {
        titulo: `
            AMBIGÜEDADES Y LIMITACIONES EN LA ACTUALIZACIÓN DE IDENTIFICACIÓN DE USUARIOS
        `,
        contenido: `
            Durante la prueba de la función de actualización de documento, se identificaron varias ambigüedades y limitaciones que generan confusión. En el primer intento, se permitió ingresar "cedula de extranjería" con el número "a," lo que plantea preguntas sobre la validez de este formato. En el segundo intento, se recibió un mensaje que indica que el usuario no fue actualizado sin una explicación clara de la causa.

            Existen interrogantes importantes: ¿Las cédulas de extranjería pueden contener letras? ¿Es un solo carácter suficiente para una cédula válida? ¿Existe un límite máximo de actualización de ID? ¿Es apropiado permitir a los usuarios alterar su ID, lo que no es común en la vida real?
        
            Se sugiere proporcionar una guía clara y completa en el input de actualización de documentos que explique los formatos y requisitos válidos para los diferentes tipos de identificación. Además, se debe considerar la limitación de permitir a los usuarios cambiar su ID, ya que esto puede plantear problemas de integridad de datos y seguridad. Una validación más sólida y una retroalimentación más informativa son esenciales para mejorar esta funcionalidad.

            <div class="flex-center-wrap">
                <img class="miniatura" src="https://i.ibb.co/b36v8n1/Captura-de-pantalla-2023-08-30-143941.png" data-lightbox-group="3" loading="lazy">
                <img class="miniatura" src="https://i.ibb.co/jrZdH3q/Captura-de-pantalla-2023-08-30-144015.png" data-lightbox-group="3" loading="lazy">
            </div>
        `,
    },
    {
        titulo: `
            PROBLEMAS CON LOS BOTONES DE NAVEGACIÓN EN LA TABLA SIN PAGINACIÓN
        `,
        contenido: `
            Se ha detectado un problema con los botones de "Siguiente" o "Anterior" en la tabla, ya que no realizan ninguna acción. se observa que solo hay una página visible, lo que indica que no se requiere paginación para esta tabla. Sin embargo, los botones de navegación aparecen, lo que crea una experiencia de usuario dada a mejorar.
        
            Para mejorar la experiencia del usuario, se recomienda eliminar las opciones de páginación, cuando no son funcionales en este contexto. Esto simplificará la interfaz y evitará cualquier confusión relacionada con la navegación que no es necesaria en una tabla sin paginación.
            
            <div class="flex-center-wrap">
                <img class="miniatura" src="https://i.ibb.co/vXdwtkm/Captura-de-pantalla-2023-08-30-144143.png" data-lightbox-group="${Math.random()}" loading="lazy">
            </div>
        `,
    },
    {
        titulo: `
            FUENTE DEMASIADO PEQUEÑA EN EL RESUMEN DE NUEVOS PERFILES
        `,
        contenido: `
            Al crear un nuevo perfil y visualizar el resumen, se nota que el tamaño de la fuente utilizado para el nombre y la descripción es excesivamente pequeño. Esto crea una experiencia incómoda para los usuarios, ya que no hay necesidad de que el texto sea tan diminuto en esta sección.
        
            Se sugiere aumentar el tamaño de la fuente utilizada para el nombre y la descripción en el resumen de nuevos perfiles. Esto mejorará la legibilidad y la comodidad de los usuarios al revisar esta información importante. Un tamaño de fuente más grande asegurará que el contenido sea fácilmente legible y proporcionará una experiencia de usuario más agradable.

            <div class="flex-center-wrap">
                <img class="miniatura" src="https://i.ibb.co/tZLXR3c/Captura-de-pantalla-2023-08-30-144839.png" data-lightbox-group="${Math.random()}" loading="lazy">
            </div>
        `,
    },
    {
        titulo: `
            REDUNDANCIA EN LA VISTA DE PERMISOS DE LA APLICACIÓN
        `,
        contenido: `
            La vista de permisos de la aplicación muestra una gran cantidad de información redundante, ya que todos los usuarios tienen las mismas opciones de permiso. Esto crea una tabla extensa y dificulta la búsqueda del usuario deseado. Se considera que reestructurar completamente esta vista utilizando un elemento de selección (select-option) para los usuarios simplificaría significativamente el espacio y mejoraría la experiencia del usuario al reducir la redundancia.
        
            Se recomienda llevar a cabo una revisión y reestructuración completa de la vista de permisos de la aplicación. Al utilizar un elemento de selección (select-option) para los usuarios y mostrar solo una vez la lista de opciones de permiso disponibles, se simplificará la interfaz y mejorará la eficiencia al buscar y asignar permisos. Esta reestructuración generará una experiencia de usuario más efectiva y fácil de usar en esta vista.
        `,
    },
    {
        titulo: `
            PROBLEMA CRÍTICO CON LA INTERACCIÓN DE LOS CHECKBOX EN LA VISTA DE PERMISOS DE LA APLICACIÓN
        `,
        contenido: `
            Se ha identificado un problema crítico en la vista de permisos de la aplicación relacionado con la interacción de los checkbox. Cambiar el estado de estos botones (activar o desactivar) requiere múltiples clics y no se realiza con facilidad. Esta dificultad en la interacción representa un error crítico, ya que afecta negativamente la usabilidad de la aplicación.

            Es esencial corregir este problema de inmediato para garantizar una experiencia de usuario fluida y eficiente. Se recomienda revisar y ajustar la funcionalidad de los checkbox en la vista de permisos para que los usuarios puedan cambiar el estado de manera rápida y precisa con un solo clic. Esta corrección mejorará significativamente la usabilidad de la aplicación.

            <div class="flex-center-wrap">
                <iframe width="400" height="250" src="https://www.youtube.com/embed/vtNwxlN3lLo" title="PROBLEMA CRÍTICO CON LA INTERACCIÓN DE LOS CHECKBOX EN LA VISTA DE PERMISOS DE LA APLICACIÓN" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
            </div>
        `,
    },
]