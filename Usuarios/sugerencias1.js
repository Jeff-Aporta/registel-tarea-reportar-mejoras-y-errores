export default [
    {
        titulo: `
            Problema al Registrar un Usuario
        `,
        contenido: `
        Cuando intento registrar un nuevo usuario y completo todos los campos, al hacer clic en "Guardar", surge un problema relacionado con la contraseña. Aparece un mensaje de advertencia que indica que solo se permiten caracteres alfanuméricos. Sin embargo, a pesar de cumplir con esta regla, el sistema continúa mostrando el mismo mensaje de advertencia.
        <div class="flex-center-wrap">
            <img class="miniatura" src="https://i.ibb.co/Qb76kRx/Captura-de-pantalla-2023-08-29-172425.png" data-lightbox-group="${Math.random()}" loading="lazy">
        </div>
        `
    },
    {
        titulo: `
            Problemas al Transferir Usuarios y Configuración No Encontrada
        `,
        contenido: `
            Al utilizar la función de "Transferir Usuarios", me encuentro con un error que muestra el mensaje "* Imposible transferir usuario(s).". Según la información proporcionada, esta función debería transferir usuarios de esta aplicación que no estén en la base de datos principal, siempre y cuando esta base de datos esté especificada en la configuración/entorno web. Sin embargo, no he podido encontrar la dirección o la opción "configuración/entorno web" para asegurarme de que esté configurada correctamente. La falta de esta configuración adecuada puede ser la causa del error al transferir usuarios.

            <div class="flex-center-wrap">
                <img class="miniatura" src="https://i.ibb.co/1Q8sTCn/Captura-de-pantalla-2023-08-30-081003.png" data-lightbox-group="1" loading="lazy">
                <img class="miniatura" src="https://i.ibb.co/G7Tf8Lf/Captura-de-pantalla-2023-08-30-081137.png" data-lightbox-group="1" loading="lazy">
            </div>
        `,
    },
]