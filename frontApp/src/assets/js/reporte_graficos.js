
async function bar_cantidad_adopciones(){
    var ctx = document.getElementById('reporte_adopciones').getContext('2d');
    var gatos = await makeGetRequest('http://localhost:8000/animal/gato'); 
    var perro = await makeGetRequest('http://localhost:8000/animal/perro'); 
    var pericos = await makeGetRequest('http://localhost:8000/animal/pericos'); 
    var tortuga = await makeGetRequest('http://localhost:8000/animal/tortuga'); 
    var loro = await makeGetRequest('http://localhost:8000/animal/loro'); 
    var cerdo = await makeGetRequest('http://localhost:8000/animal/cerdo'); 

    var myChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ['Perro', 'Gato', 'Pericos', 'Tortuga', 'Loro', 'Cerdo'],
            datasets: [{
                label: 'Cantidad de mascotas',
                data: [perro.length, gatos.length, pericos.length, tortuga.length, loro.length, cerdo.length],
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



function makeGetRequest(path) { 
    return new Promise(function (resolve, reject) { 
        axios.get(path).then( 
            (response) => { 
                var result = response.data; 
                console.log('Processing Request'); 
                resolve(result); 
            }, 
                (error) => { 
                reject(error); 
            } 
        ); 
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

async function line_adopciones_por_fecha(){
    var ctx = document.getElementById('reporte_adopciones_por_fecha').getContext('2d');

    var enero = await makeGetRequest('http://localhost:8000/adopcion/mes/1'); 
    var febrero = await makeGetRequest('http://localhost:8000/adopcion/mes/2'); 
    var marzo = await makeGetRequest('http://localhost:8000/adopcion/mes/3'); 
    var abril = await makeGetRequest('http://localhost:8000/adopcion/mes/4'); 
    var mayo = await makeGetRequest('http://localhost:8000/adopcion/mes/5'); 
    var junio = await makeGetRequest('http://localhost:8000/adopcion/mes/6'); 
    var julio = await makeGetRequest('http://localhost:8000/adopcion/mes/7'); 
    var agosto = await makeGetRequest('http://localhost:8000/adopcion/mes/8'); 
    var septiembre = await makeGetRequest('http://localhost:8000/adopcion/mes/9'); 
    var octubre = await makeGetRequest('http://localhost:8000/adopcion/mes/10'); 
    var noviembre = await makeGetRequest('http://localhost:8000/adopcion/mes/11'); 
    var diciembre = await makeGetRequest('http://localhost:8000/adopcion/mes/12'); 


    var pieChart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: ['Enero', 'Febrero', 'Marzo','Abril', 'Mayo','Junio','Julio','Agosto','Septiembre','Octubre','Noviembre','Diciembre'],
            datasets: [{
                label: 'Cantidad de adopciones - 2019',
                data: [enero.length, febrero.length, marzo.length,abril.length,mayo.length,junio.length,julio.length,
                    agosto.length,septiembre.length,octubre.length,noviembre.length,diciembre.length],
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