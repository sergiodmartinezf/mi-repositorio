var Math;

function validar() {
    // Se valida que la longitud escogida para la contraseña sea correcta
    const long_cont=Number(document.getElementById("long_cont").value);
    if (long_cont >= 8 && long_cont <=20) {
        return true;
    } else {
        return false;
    };
};


function generarLetras() {
    // Se obtienen todas las letras que usará la contraseña.
    let letras="";
    const mayus=document.getElementById("mayus").value;
    const minus=document.getElementById("minus").value;
    const numeros=document.getElementById("numeros").value;
    const caract_esp=document.getElementById("caract_esp").value;
    // Se verifica si se quieren mayúsculas.
    if (mayus == "on") {
        letras = letras + "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    };
    // Se verifica si se quieren minúsculas.
    if (minus == "on") {
        letras = letras + "abcdefghijklmnopqrstuvwxyz";
    };
    // Se verifica si se quieren números.
    if (numeros == "on") {
        letras = letras + "ABCDEFGHIJKLMNOPQRSTVWXYZ";
    };
    // Se verifica si se quieren carácteres especiales.
    if (caract_esp == "on") {
        letras = letras + "|°}]{[´¨+*'?¿¡-_.:,;!#$%&/\(()=";
    };
    // Se da el conjunto de letras final.
    return letras;
};



function generarContra2() {
    // Obtienen datos importantes para la construcción de la contraseña.
    const long_cont=Number(document.getElementById("long_cont").value);
    const letras=generarLetras();
    let contra="";

    // Se construye contraseña con letras.
    for (let i = 0; i < long_cont; i++) {
        let ind_letra=(Math.random())*10
        ind_letra=ind_letra + (ind_letra);
        ind_letra = ind_letra.toFixed(0);
        contra = contra + letras[ind_letra];
    };

    return contra;


};








function generarContra() {
    // Se inicia proceso general de validación y generación de contraseña.
    const validacion = validar();
    if (validacion == false) {
        // Validación fracasa
        alert("La longitud ingresada no es válida");
        document.getElementById("contra2").innerHTML="";
    } else {
        // Validación funciona
        const nuevaContra=generarContra2();
        document.getElementById("contra2").innerHTML=nuevaContra;
    };
};


