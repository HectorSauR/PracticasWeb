(function(){
    var formulario = document.getElementById('formulario'),
        nombre = formulario.nombre;
        correo = formulario.correo;
        sexo = formulario.sexo;
        termios = formulario.tereminos;
        error = document.getElementById('error');
    
    function validarNombre(e){
        if(nombre.value == "" || nombre.value == null){
            console.log("Porfavor ingresa tu nombre");
            error.style.display = 'block';
            error.innerHTML += '<li>Porfavor completa el nombre</li>';
            e.preventDefault();
        }else{
            error.style.display = 'none';
        }
    }

    function validarCorreo(e){
        if(correo.value == "" || correo.value == null){
            console.log("Porfavor ingresa tu correo");
            error.style.display = 'block';
            error.innerHTML += '<li>Porfavor completa el correo</li>';
            e.preventDefault();
        }else{
            error.style.display = 'none';
        }
    }

    function validarSexo(e){
        if(sexo.value == '' || sexo.value == null){
            console.log("Porfavor seleccione su sexo");
            error.style.display = 'block';
            error.innerHTML += '<li>Porfavor seleccione su sexo</li>';
            e.preventDefault();
        }else{
            error.style.display = 'none';
        }
    }

    function validarTerminos(e){
        if(!terminos.checked){
            console.log("Porfavor acepte los terminos y condiciones");
            error.style.display = 'block';
            error.innerHTML += '<li>Porfavor acepte los terminos y condiciones</li>';
            e.preventDefault();
        }else{
            error.style.display = 'none';
        }
    }

    function validarFormulario(e){
        error.innerHTML = '';

        validarNombre(e);
        validarCorreo(e);
        validarSexo(e);
        validarTerminos(e);
    }

    formulario.addEventListener('submit', validarFormulario);
}())