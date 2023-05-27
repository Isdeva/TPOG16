form.addEventListener("change", (e) => {
    e.preventDefault();
    validaArchivo();
});

//valida extension file

  //Detalles a tener en cuenta, permite mas de un archivo
  // esta obligado a subir un archivo o tira error (ARREGAR)
  // y tira la exceptcion si comenzas por los primeros campos (ARREGAR)

function validaArchivo() {
    let archivo = document.getElementById("cv");
    let archivoRuta = archivo.value;
    let ExtensAccept = /(.jpg|.jpeg|.png|.pdf)$/i;
    if (!ExtensAccept.exec(archivoRuta)) {
        alert('Extensiones permitidas: jpeg | jpg | png | pdf') /* Funciona, siempre tira el alert*/
     } else if (archivo.files && archivo.files[0]) {
        console.log(archivoRuta);
    }

};




