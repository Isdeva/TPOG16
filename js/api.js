const listaProvincias = document.getElementById('listaProvincias');

fetch('https://infra.datos.gob.ar/catalog/modernizacion/dataset/7/distribution/7.2/download/provincias.json')
    .then(response => response.json())
    .then(data => {
        data.forEach(provincia => {
            const li = document.createElement('li');
            li.textContent = provincia.nombre;
            listaProvincias.appendChild(li);
        });
    })
    .catch(error => console.log(error));