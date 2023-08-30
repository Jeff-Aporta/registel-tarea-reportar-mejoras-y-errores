export default [
    {
        titulo: `
            PROBLEMA CON EL FILTRADO DE PERFILES EN LA VISTA DE ASIGNAR ESTADO DE PAGO
        `,
        contenido: `
            Se ha identificado un problema en la vista de asignación de estado de pago relacionado con el filtrado de perfiles. Cuando se selecciona un perfil en un campo, el filtro no se aplica automáticamente al campo de usuario siguiente, lo que dificulta la selección precisa del usuario deseado.

            Para mejorar la eficiencia y la experiencia del usuario, se sugiere ajustar la funcionalidad de filtrado para que se aplique de manera automática al campo de usuario después de seleccionar un perfil. Esto facilitará la selección de usuarios relacionados con el perfil específico y mejorará la usabilidad de la vista de asignación de estado de pago.
            
            <div class="flex-center-wrap">
                <img class="miniatura" src="https://i.ibb.co/9VYLPht/Captura-de-pantalla-2023-08-30-153438.png" data-lightbox-group="${Math.random()}" loading="lazy">
            </div>

        `,
    },
    {
        titulo: `
            SIMPLIFICACIÓN DE LA VISTA "ASIGNAR ESTADO" Y "REGISTRO DE ESTADO"
        `,
        contenido: `
            Se considera que la vista "Registro de Estado" podría ser una opción dentro de "Asignar Estado" para simplificar el proceso y evitar la necesidad de cambiar entre pestañas. La creación de un estado implica solo dos campos, lo que hace que sea más eficiente manejarlo desde la misma vista de "Asignar Estado". Además, se ha observado que en "Asignar Estado" solo hay una opción disponible, por lo que el campo select-option podría simplificarse a un texto plano si solo existe una opción.

            Para mejorar la eficiencia y la experiencia del usuario, se sugiere combinar las funciones de "Asignar Estado" y "Registro de Estado" en una sola vista. Esto reducirá la complejidad y permitirá a los usuarios gestionar los estados de manera más sencilla desde una ubicación central. Además, si solo hay una opción en "Asignar Estado", el campo select-option puede eliminarse o mostrarse como texto plano para simplificar aún más la interfaz.
        `,
    },
    {
        titulo: `
            FALTA DE CLARIDAD EN LA TERMINOLOGÍA Y FUNCIONALIDAD DE LOS ESTADOS
        `,
        contenido: `
            Se ha identificado una falta de claridad en la terminología y la funcionalidad de los estados en la aplicación. Por ejemplo, al crear un estado denominado "ABC," al aplicarlo a un usuario, se interpreta como una suspensión en lugar de reflejar el término "ABC." Esto genera confusión sobre el propósito y el significado de los estados en la aplicación.

            Es crucial definir y comunicar claramente el propósito y la terminología asociada con los estados en la aplicación. Se recomienda revisar y ajustar la funcionalidad de los estados para que reflejen de manera precisa los términos creados por los usuarios y eviten malentendidos. Además, proporcionar una documentación o ayuda contextual sobre el uso de estados ayudará a los usuarios a comprender su función y aplicación en la aplicación. La claridad en la terminología y funcionalidad es esencial para una experiencia de usuario efectiva.

            <div class="flex-center-wrap">
                <img class="miniatura" src="https://i.ibb.co/nL9yM9S/Captura-de-pantalla-2023-08-30-160842.png" data-lightbox-group="${Math.random()}" loading="lazy">
            </div>
        `,
    },
]