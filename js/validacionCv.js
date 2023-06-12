form.addEventListener("change", (e) => {
    e.preventDefault();
    validaArchivo();
});

function validaArchivo() {
    let archivo = document.getElementById("cv");
    let archivoRuta = archivo.value;
    console.log(archivoRuta);
    
};