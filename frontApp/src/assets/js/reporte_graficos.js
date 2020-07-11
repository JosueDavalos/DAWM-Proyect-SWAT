
function bar_cantidad_adopciones(){
    var ctx = document.getElementById('reporte_adopciones').getContext('2d');
    var myChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ['Perro', 'Gato', 'Pericos', 'Totuga', 'Loro', 'Cerdo'],
            datasets: [{
                label: 'Cantidad de adopciones',
                data: [12, 19, 3, 5, 2, 3],
                backgroundColor: [
                    'rgba(255, 99, 132, 0.5)',
                    'rgba(54, 162, 235, 0.5)',
                    'rgba(255, 206, 86, 0.5)',
                    'rgba(75, 192, 192, 0.5)',
                    'rgba(153, 102, 255, 0.5)',
                    'rgba(255, 159, 64, 0.5)'
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)'
                ],
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero: true
                    }
                }]
            }
        }
    });
}


function pie_adopciones_asociacion(){
    var ctx = document.getElementById('reporte_adopciones_por_asociacion').getContext('2d');
    var pieChart = new Chart(ctx, {
        type: 'doughnut',
        data: {
            labels: ['GPA', 'LOREM', 'RAG'],
            datasets: [{
                label: 'Cantidad de adopciones',
                data: [12, 19, 4],
                backgroundColor: [
                    'rgba(255, 99, 132)',
                    'rgba(54, 162, 235)',
                    'rgba(255, 206, 86)'
                ]
            }]
        },
    });
}

function line_adopciones_por_fecha(){
    var ctx = document.getElementById('reporte_adopciones_por_fecha').getContext('2d');
    var pieChart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: ['Enero', 'Febrero', 'Marzo','Abril', 'Mayo','Junio','Julio','Agosto','Septiembre','Octubre','Noviembre','Diciembre'],
            datasets: [{
                label: 'Cantidad de adopciones - 2019',
                data: [12, 19, 4,11,6,7,2,8,16,18,8,24],
                borderColor:'rgba(255, 206, 86)',
                backgroundColor: 'rgba(255, 206, 86,0.1)'
            }]
        },
    });
}

function reportes_graficos(){
    if (document.getElementById('reporte_adopciones_por_asociacion')!=null){
        bar_cantidad_adopciones();
        pie_adopciones_asociacion();
        line_adopciones_por_fecha();
    }
}