window.addEventListener("load", () => {
  const form = document.getElementById("form");
  const nombreCompleto = document.getElementById("nombreCompleto");
  const telefono = document.getElementById("tele");
  const email = document.getElementById("email");

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    validaCampos();
  });

  const validaCampos = () => {
    const nombreValor = nombreCompleto.value.trim();
    const telefonoValor = telefono.value.trim();
    const emailValor = email.value.trim();

    //Valida campo nombre
    if (nombreValor === "") {
      validacionFalla(nombreCompleto, "Campo vacio");
    } else {
      validacionOk(nombreCompleto);
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

    //valida campo email
    if (!emailValor) {
      validacionFalla(email, "Campo vacio");
    } else if (!validaEmail(emailValor)) {
      validacionFalla(email, "El e-mail no es valido");
    } else {
      validacionOk(email);
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
});
/*Arrastrar cv */
let sube = document.querySelector(".cv-bg");
let accion = document.querySelector(".hiddent");

sube.addEventListener("dragover", (e) => {
  e.preventDefault();
  e.stopPropagation();
  e.target.classList.add("active");
});

sube.addEventListener("dragleave", (e) => {
  e.preventDefault();
  e.stopPropagation();
  e.target.classList.remove("active");
});

accion.addEventListener("dragover", (e) => {
  e.preventDefault();
  e.stopPropagation();
  e.target.classList.add("active");
});
