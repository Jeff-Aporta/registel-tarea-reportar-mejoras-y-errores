lightbox3_update_style({
    background: "rgba(0,0,0,0.5)",
    colorBorder: "rgba(0,0,0,0.5)",
    background2: "rgba(0,0,0,0.5)",
    colorButtons: "white"
})

let formatearTextoAHTML =  (texto) => {
    let texto_formateado = texto.replaceAll("\n", "<br>");
    return texto_formateado;
}

function generadorAcordeon(tipo, grupo){
    return e => {
        let sugerencia = document.createElement("div");
        sugerencia.classList.add(tipo);
        let label = document.createElement("label");
        let input = document.createElement("input");
        input.type = "checkbox";
        input.classList.add("checkbox");
        label.innerHTML = e.titulo;
        label.classList.add("titulo");
        label.appendChild(input);
        sugerencia.appendChild(label);
        let contenido = document.createElement("div");
        contenido.innerHTML = formatearTextoAHTML(e.contenido);
        contenido.classList.add("contenido");
        sugerencia.appendChild(contenido);
        document.querySelector(`.actualizaciones-sugerencias .${grupo}`).appendChild(sugerencia);
    }
}