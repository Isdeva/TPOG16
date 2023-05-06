window.addEventListener('load', () => {
    const form = document.getElementById('form')
    const nombreCompleto = document.getElementById('nombreCompleto')
    const nDni = document.getElementById('NDni')
    const telefono = document.getElementById('tele')
    const email = document.getElementById('email')

    form.addEventListener('submit', (e) => {
        e.preventDefault()
        validaCampos()
    })


    const validaCampos = () => {
        const nombreValor = nombreCompleto.value.trim()
        /*const nDniValor = nDni.value.trim() NO SON VALIDOS PARA NUMEROS
        const telefonoValor = telefono.value.trim()*/
        const emailValor = email.value.trim()
    
        //Validando campo nombre
        if (nombreValor === '') {
            console.log('CAMPO VACIO');
            validacionFalla(nombreCompleto, 'Campo vacio')
        } else {
            validacionOk(nombreCompleto)
    
        }

        //validando campo email

        if (!emailValor) {
            validacionFalla(email, 'Campo vacio')
        }if (!validaEmail(emailValor)) {
            validacionFalla(email, 'El e-mail no es valido')
        } else {
            validacionOk(email)
        }


    }
    
    const validacionFalla = (input, msje) => {
        const formControl = input.parentElement
        const aviso = formControl.querySelector('small')
        aviso.innerText = msje
    
        formControl.className = 'form-control falla'
    }
    const validacionOk = (input) => {
        const formControl = input.parentElement
        formControl.className = 'form-control ok'
    
    }

    const validaEmail = (email) =>{
        return /^(([^<>()\[\]\\.,;:\s@”]+(\.[^<>()\[\]\\.,;:\s@”]+)*)|(“.+”))@((\[[0–9]{1,3}\.[0–9]{1,3}\.[0–9]{1,3}\.[0–9]{1,3}])|(([a-zA-Z\-0–9]+\.)+[a-zA-Z]{2,}))$/.test(email)
    }
    
})



