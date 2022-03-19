// (function(){
    var formulario = document.getElementById('formulario'),
        nombre = formulario.nombre;
        correo = formulario.correo;
        edad = formulario.edad;
        usuario = formulario.usuario;
        contra = formulario.contra;
        contraConf = formulario.contraConf;
        mostrarContra = formulario.mostrarContra;
        error = document.getElementById('error');

    let contenedorDatos = document.querySelector('#informacion');
    let datos = [{
        nom: "",
        cor: "",
        age: "",
        usuario: "",
        contra: "",
        ecry: ""
    }];
    const nom = /^[a-zA-Z\s]{1,40}$/;
    const us = /^[a-zA-Z0-9]{5,40}$/;
    const password = /^(?=.*\d)(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&]{8,40}/;

    function validarNombre(e){
        if(nombre.value == "" || nombre.value == null){
            nombre.style.border = "1px solid red";
            error.innerHTML += '<li>Porfavor completa el nombre</li>';
            e.preventDefault();
            return true;
        }
        if(!nom.test(nombre.value)){
            nombre.style.border = "1px solid red";
            error.innerHTML += '<li>Porfavor escribe solo letras y espacios al introducir tu nombre</li>';
            e.preventDefault();
            return true;
        }
        nombre.style.border = "none";
        nombre.style.borderBottom = "2px solid #ccc";
        error.style.display = 'none';
        return false;
        
    }

    function validarCorreo(e){
        if(correo.value == "" || correo.value == null){
            correo.style.border = "1px solid red";
            error.innerHTML += '<li>Porfavor completa el correo</li>';
            e.preventDefault();
            return true;
        }else{
            correo.style.border = "none";
            correo.style.borderBottom = "2px solid #ccc";
            return false;
        }
    }

    function validarNumero(e){
        if(edad.value == "" || edad.value == null){
            edad.style.border = "1px solid red";
            error.innerHTML += '<li>Porfavor ingresa la edad</li>';
            e.preventDefault();
            return true;
        }else{
            edad.style.border = "none";
            edad.style.borderBottom = "2px solid #ccc";
            return false;
        }
    }
    
    function validarUsuario(e){
        if(usuario.value == "" || usuario.value == null){
            usuario.style.border = "1px solid red";
            error.innerHTML += '<li>Porfavor escribe un nombre de usuario</li>';
            e.preventDefault();
            return true;
        }

        if(!us.test(usuario.value)){
            usuario.style.border = "1px solid red";
            error.innerHTML += '<li>Porfavor escribe el usuario sin espacios. Usando letras y números. Mayor a 5 caracteres.</li>';
            e.preventDefault();
            return true;
        }

        usuario.style.border = "none";
        usuario.style.borderBottom = "2px solid #ccc";
        return false;
        
    }

    function validarContra(e){
        if(contra.value == "" || contra.value == null){
            contra.style.border = "1px solid red";
            contraConf.style.border = "1px solid red";
            error.innerHTML += '<li>Porfavor ingresa la Contraseña</li>';
            e.preventDefault();
            return true;
        }
        if(!(contra.value == contraConf.value)){
            error.innerHTML += '<li>Contraseñas no idénticas</li>';
            contraConf.style.border = "1px solid red";
            contra.style.border = "1px solid red";
            e.preventDefault();
            return true;
        }

        if(!password.test(contra.value)){
            contra.style.border = "1px solid red";
            contraConf.style.border = "1px solid red";
            error.innerHTML += '<li>Porfavor escribe la contraseña con al menos un número, al menos un símbolo especial, al menos 8 caracteres.</li>';
            e.preventDefault();
            return true;
        }

        contra.style.border = "none";
        contraConf.style.border = "none";

        contraConf.style.borderBottom = "2px solid #ccc";
        contra.style.borderBottom = "2px solid #ccc";
        return false;
        
    }

    function validarFormulario(e){
        e.preventDefault();
        error.innerHTML = '';
        let resul = validarNombre(e);
        resul = validarNumero(e) || resul; 
        resul = validarCorreo(e) || resul;
        resul = validarUsuario(e) || resul;
        resul = validarContra(e) || resul;
        // resul = validarContra(e) || resul;

        if(resul){
            error.style.display = 'block';  
        }else{
            error.style.display = 'none';
            datos.nom = nombre.value;
            datos.cor = correo.value;
            datos.age = edad.value;
            datos.usuario = usuario.value;
            datos.contra = contra.value;
            datos.encry = CryptoJS.MD5(contra.value);
            // alert(datos.encry);
            // Roteh2345@
            contenedorDatos.style.display = "block";

            

            contenedorDatos.innerHTML+= "<p>Nombre: "+ datos.nom +"</p>"; 
            contenedorDatos.innerHTML+= "<p>Correo: " + datos.cor + "</p>"; 
            contenedorDatos.innerHTML+= "<p>Edad: " + datos.age + "</p>"; 
            contenedorDatos.innerHTML+= "<p>Usuario: " + datos.usuario + "</p>"; 
            contenedorDatos.innerHTML+= "<p>Contraseña: " + datos.contra + "</p>";
            contenedorDatos.innerHTML+= "<p>Contraseña Encriptada: " + datos.encry + "</p>"; 

        } 
    }

    formulario.addEventListener('submit', validarFormulario);
    mostrarContra.addEventListener('click', () =>{
        if(mostrarContra.checked){
            contra.setAttribute("type", "text");
            contraConf.setAttribute("type", "text");
        }else{
            contra.setAttribute("type", "password");
            contraConf.setAttribute("type", "password");
        }
    })
    
    let vlr = true;
    let btnRest= document.querySelector("#btnReset");

    btnRest.addEventListener("click",(e)=>{
        if(vlr){
            e.preventDefault();
            btnRest.setAttribute("value", "Confirmar");
            vlr = false;
        }else{
            btnRest.setAttribute("value", "Limpiar");
            contenedorDatos.style.display = "none";
            contenedorDatos.innerHTML = ""; 
            vlr = true;
        }
    });    
    // }())