var cantidad = document.getElementById('cantidad');
let boton = document.getElementById('generar');
let botonLimpiar = document.getElementById('limpiar')

let contraseña = document.getElementById('contrasena');
const cadenaCaracteres = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz01!@#$%^&*() ';

function generar(){

    let numeroDigitado = parseInt ( cantidad.value );

    console.log(numeroDigitado);
    if(numeroDigitado < 8 ){
    alert("La cantidad de caracteres tiene que ser mayor que 8");
    }
    let password = '';
    for( let i= 0; i <  numeroDigitado; i++  ) {

        let caracterAleatorio = cadenaCaracteres [Math.floor ( Math.random() * cadenaCaracteres.length)];
            console.log(caracterAleatorio);

            password+=caracterAleatorio;

    }
    contrasena.value= password;

    function limpiarContraseña(){
        contraseña.value = '';
    }

    botonLimpiar.addEventListener('click',limpiarContraseña);
    
}





