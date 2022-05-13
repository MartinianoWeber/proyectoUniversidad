// validacion captcha
const generador = document.querySelector('#generador')
const btnVerificado = document.querySelector('#btnVerificado')
const btnSubmit = document.querySelector('#btnSubmit')
const ok = document.querySelector('#ok')
const error = document.querySelector('#error')
let validador = {
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

    validador.clave = result1
}

btnVerificado.addEventListener('click', (e) =>{
    e.preventDefault()
    randomKey(5)
    generador.innerHTML = `
    <div class="d-flex sectionContacto__validacion">
        <p class="sectionContacto__texto">${validador.clave}</p>
        <input id="campoClave" type="text" name="" id="">
        <button id="btnValidar">Verificar</button>
    </div>
    
    ` 
    campoClave.addEventListener('change', (e) =>{
        validador.claveEnviadaUser = e.target.value
    })
    btnValidar.addEventListener('click', (e) =>{
        e.preventDefault()
        if(validador.claveEnviadaUser != ""){
            if(validador.clave === validador.claveEnviadaUser){
                generador.innerHTML = `
                <p class="verificacionOk">Verificado Correctamente </p>
                `
                btnVerificado.remove()
                validador.claveOk = "ok"

            }else{
                error.innerHTML=`<p class="error">El campo no se verifico</p>`      
                setTimeout(() =>{
                    error.innerHTML=""
                },3000)  
            }
        }else{
            error.innerHTML=`<p class="error">Error campo vacio</p>`      
            setTimeout(() =>{
                error.innerHTML=""
            },3000)  
        }
    })

})



btnSubmit.addEventListener('click', (e) =>{
    e.preventDefault()
    if(validador.claveOk != ""){
        ok.innerHTML= `
        <div class="grantedMail">
            <p>Email enviado con exito<p>
        </div>
        `
    }else{
        error.innerHTML=`<p class="error">Campo de verificacion vacio</p>`      
        setTimeout(() =>{
            error.innerHTML=""
        },3000)
    }
})

