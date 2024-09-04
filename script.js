document.getElementById('procesar').addEventListener('click', function () {
    let erroresArcoseno = 0;
    let erroresArcocoseno = 0;
    let erroresRaiz = 0;
    let erroresDivision = 0;
    let erroresLogaritmo = 0;

    for (let i = 0; i < 1000; i++) {
        let x1 = Math.random() * 2 - 1;
        let x2 = Math.random() * 2 - 1;
        let x3 = Math.random() * 2 - 1;
        let x4 = Math.random() * 2 - 1;
        let x5 = Math.random() * 2 - 1;
        let x6 = Math.random() * 2 - 1;
        let x7 = Math.random() * 2 - 1;
        let x8 = Math.random() * 2 - 1;
        let x9 = Math.random() * 2 - 1;
        let x10 = Math.random() * 2 - 1;
        let x11 = Math.random() * 2 - 1;
        let x12 = Math.random() * 2 - 1;
        let x13 = Math.random() * 2 - 1;
        let x14 = Math.random() * 2 - 1;

        // Verificar y contar errores de arcoseno
        if (isNaN(Math.asin(x1))) erroresArcoseno++;
        if (isNaN(Math.asin(x2))) erroresArcoseno++;

        // Verificar y contar errores de arcocoseno
        if (isNaN(Math.acos(x3))) erroresArcocoseno++;
        if (isNaN(Math.acos(x4))) erroresArcocoseno++;

        // Verificar y contar errores de raíz cuadrada
        if (x5 < 0 || isNaN(Math.sqrt(x5))) erroresRaiz++;
        if (x6 < 0 || isNaN(Math.sqrt(x6))) erroresRaiz++;

        // Verificar y contar errores de división
        if (x8 === 0 || isNaN(x7 / x8)) erroresDivision++;
        if (x10 === 0 || isNaN(x9 / x10)) erroresDivision++;
        if (x12 === 0 || isNaN(x11 / x12)) erroresDivision++;

        // Verificar y contar errores de logaritmo natural
        if (x13 <= 0 || isNaN(Math.log(x13))) erroresLogaritmo++;
        if (x14 <= 0 || isNaN(Math.log(x14))) erroresLogaritmo++;
    }

    let totalErrores = erroresArcoseno + erroresArcocoseno + erroresRaiz + erroresDivision + erroresLogaritmo;

    function calcularPorcentaje(errores) {
        return totalErrores === 0 ? '0%' : ((errores / totalErrores) * 100).toFixed(2) + '%';
    }

    document.getElementById('errores-arcoseno').innerText = erroresArcoseno;
    document.getElementById('porcentaje-arcoseno').innerText = calcularPorcentaje(erroresArcoseno);
    document.getElementById('errores-arcocoseno').innerText = erroresArcocoseno;
    document.getElementById('porcentaje-arcocoseno').innerText = calcularPorcentaje(erroresArcocoseno);
    document.getElementById('errores-raiz').innerText = erroresRaiz;
    document.getElementById('porcentaje-raiz').innerText = calcularPorcentaje(erroresRaiz);
    document.getElementById('errores-division').innerText = erroresDivision;
    document.getElementById('porcentaje-division').innerText = calcularPorcentaje(erroresDivision);
    document.getElementById('errores-logaritmo').innerText = erroresLogaritmo;
    document.getElementById('porcentaje-logaritmo').innerText = calcularPorcentaje(erroresLogaritmo);

    google.charts.load('current', { 'packages': ['corechart'] });
    google.charts.setOnLoadCallback(drawChart);

    function drawChart() {
        var data = google.visualization.arrayToDataTable([
            ['Tipo de Error', 'Cantidad'],
            ['Arcoseno', erroresArcoseno],
            ['Arcocoseno', erroresArcocoseno],
            ['Raíz Cuadrada', erroresRaiz],
            ['División', erroresDivision],
            ['Logaritmo Natural', erroresLogaritmo]
        ]);

        var options = {
            title: 'Errores en la Ecuación'
        };

        var chart = new google.visualization.PieChart(document.getElementById('grafico'));
        chart.draw(data, options);
    }
});
