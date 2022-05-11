// validacion captcha
const generador = document.querySelector('#generador')
const btnVerificado = document.querySelector('#btnVerificado')
const btnSubmit = document.querySelector('#btnSubmit')
const ok = document.querySelector('#ok')
let prueba = {
    clave: "",
    claveEnviadaUser: "",
    claveOk:""
}

const  randomKey = (num) => {
    const caracteres ='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let result1= '';
    const caracteresLength = caracteres.length;
    for ( let i = 0; i < num; i++ ) {
        result1 += caracteres.charAt(Math.floor(Math.random() * caracteresLength));
    }

    prueba.clave = result1
    
    console.log(result1) 
}

btnVerificado.addEventListener('click', (e) =>{
    console.log(prueba.clave)
    randomKey(5)
    generador.innerHTML = `
    <p>${prueba.clave}</p>
    <input id="campoClave" type="text" name="" id="">
    <button id="btnVerificar">Verificar</button>
    ` 
    campoClave.addEventListener('change', (e) =>{
        prueba.claveEnviadaUser = e.target.value
        
    })
    btnVerificar.addEventListener('click', (e) =>{
        if(prueba.claveEnviadaUser != ""){
            if(prueba.clave === prueba.claveEnviadaUser){
                generador.innerHTML = `
                <p>Verificado Correctamente </p>
                `
                prueba.claveOk = "ok"
            }else{
                alert("El campo no se verifico")
            }
        }else{
            alert("error campo vacio")
        }
    })

})

btnSubmit.addEventListener('click', (e) =>{
    if(prueba.claveOk != ""){
        ok.innerHTML= `
        <p>Email enviado<p>
        `
    }else{
        alert("CAMPO DE VERIFICACION ERRONEO")
    }
})