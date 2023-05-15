window.addEventListener("load", () => {
  const form = document.getElementById("form");
  const nombreCompleto = document.getElementById("nombreCompleto");
  /* const nDni = document.getElementById('NDni') */
  const telefono = document.getElementById("tele");
  const email = document.getElementById("email");

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    validaCampos();
  });

  form.addEventListener("change", (e) => {
    e.preventDefault();
    validaArchivo();
  });

  const validaCampos = () => {
    const nombreValor = nombreCompleto.value.trim();
    /*const nDniValor = nDni.value.trim() NO SON VALIDOS PARA NUMEROS*/
    const telefonoValor = telefono.value.trim();
    const emailValor = email.value.trim();
    // const cvValor = cv.value.trim()

    //Valida campo nombre
    if (nombreValor === "") {
      console.log("NOMBRE VACIO");
      validacionFalla(nombreCompleto, "Campo vacio");
    } else {
      validacionOk(nombreCompleto);
    }

    //valida campo email
    if (!emailValor) {
      validacionFalla(email, "Campo vacio");
    }
    if (!validaEmail(emailValor)) {
      validacionFalla(email, "El e-mail no es valido");
    } else {
      validacionOk(email);
    }

    //valida campo telefono
    if (!telefonoValor) {
      //El telefono esta en formato String
      validacionFalla(telefono, "Campo vacio");
    } else if (!validaTelefono(telefonoValor)) {
      validacionFalla(telefono, "El telefono no es valido");
    } else {
      validacionOk(telefono);
    }
  };

  const validacionFalla = (input, msje) => {
    const formControl = input.parentElement;
    const aviso = formControl.querySelector("small");
    aviso.innerText = msje;

    formControl.className = "form-control falla";
  };
  const validacionOk = (input) => {
    const formControl = input.parentElement;
    formControl.className = "form-control ok";
  };

  const validaEmail = (email) => {
    return /^(([^<>()\[\]\\.,;:\s@”]+(\.[^<>()\[\]\\.,;:\s@”]+)*)|(“.+”))@((\[[0–9]{1,3}\.[0–9]{1,3}\.[0–9]{1,3}\.[0–9]{1,3}])|(([a-zA-Z\-0–9]+\.)+[a-zA-Z]{2,}))$/.test(
      email
    );
  };

  const validaTelefono = (telefono) => {
    return /^\d{2}\d{4}\d{4}$/.test(telefono);
  };

  //valida extension file

  //Detalles a tener en cuenta, permite mas de un archivo
  // esta obligado a subir un archivo o tira error (ARREGAR)
  // y tira la exceptcion si comenzas por los primeros campos (ARREGAR)
  function validaArchivo() {
    let archivo = document.getElementById("cv");
    let archivoRuta = archivo.value;
    let ExtensAccept = /(.jpg|.jpeg|.png|.pdf)$/i;
    if (!ExtensAccept.exec(archivoRuta)) {
      validacionFalla(archivo, "Extensiones permitidas: jpeg | jpg | png | pdf");
    } else if (archivo.files && archivo.files[0]) {
      validacionOk(archivo);
      console.log(archivoRuta);
    }
  }
});
