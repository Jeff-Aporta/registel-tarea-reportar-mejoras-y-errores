export default `
<h1>Conteo de Reportes</h1>

En el estudio sobre la generación de reportes, he realizado el conteo de los tipos de reportes disponibles para los usuarios

<ol>
    <li>
        <strong>Reportes en Formato PDF</strong>: 
        9 reportes.
    </li>
    <li>
        <strong>Reportes en el Aplicativo Web</strong>: 
        20 reportes.
    </li>
    <li>
        <strong>Reportes en Formato Excel</strong>: 
        18 reportes.
    </li>
</ol>

Estos conteos me han proporcionado una visión clara de la diversidad de reportes disponibles en nuestra plataforma.

<center>
    <img class="miniatura2" src="https://i.ibb.co/RbXtgY1/Captura-de-pantalla-2023-08-23-104517.png" data-lightbox-group="${Math.random()}" loading="lazy">
</center>

<b>Reporte de Tipo Dinámico "Auditoría Ajustes Pre Liquidación"</b>

Destaco la existencia de un reporte interesante "Auditoría Ajustes Pre Liquidación". En este informe, se puede seleccionar los parámetros directamente en el reporte, en lugar de configurarlos previamente. Esta característica me parece especialmente atractiva y creo que sería beneficioso migrar más reportes a este formato dinámico. Si es bienvenida la idea, recomiendo iniciar esta migración pronto para evitar costos significativos en tiempo y recursos en el futuro.

<b>Problema de Datos para Algunos Reportes</b>

He observado que algunos reportes, la base de datos usada es la de Lusitania, no se generaron datos, incluso establecí rango de un mes. Esto podría deberse a la naturaleza de la base de datos que estoy utilizando, y creo que se debería realizar una evaluación con otra base de datos para abordar este problema.

<b>Reportes con problema de generación</b>
<ol>
    <li>
        Consolidado de rutas
    </li>
    <li>
        Consolidado de rutas por vehículo
    </li>
    <li>
        Consolidado de rutas por conductor
    </li>
    <li>
        Incumplimiento de puntos por ruta
    </li>
    <li>
        Auditoria planilla despacho
    </li>
    <li>
        Auditoria ajustes pre liquidación
    </li>
</ol>

<b>Incompatibilidad del Reporte "Estadístico" en PDF/WEB</b>

He identificado que el reporte estadístico no es funcional en los formatos PDF y web. Es importante que evalúe y resuelva esta incompatibilidad para garantizar que todos los reportes estén disponibles en los formatos requeridos.
Destaco que puede ser por la base de datos usada (Lusitania)
`