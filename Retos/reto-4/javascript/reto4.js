function validar_nom(nombre) {
    if (Number.isInteger(nombre) == false && nombre != "") {
        return true;
    } else {
        alert("El nombre ingresado no es válido");
        return false;
    };
};

function validar_peso(peso) {
    const pos_coma = peso.search(",");
    peso = parseFloat(peso);
    if (pos_coma != -1) {
        alert("El peso ingresado no es válido");
        return false;
    } else if (peso >= 0) {
        return true;
    } else {
        alert("El peso ingresado no es válido");
        return false;
    };
};

function validar_altura(altura) {
    const pos_coma = altura.search(",");
    altura = parseFloat(altura);
    if (pos_coma != -1) {
        alert("La altura ingresada no es válida");
        return false;
    } else if (altura >= 0) {
        return true;
    } else {
        alert("La altura ingresada no es válida");
        return false;
    };
};

function validar_edad(edad) {
    if (Number.isInteger(edad) == true && edad >= 0) {
        return true;
    } else {
        alert("La edad ingresada no es válida");
        return false;
    };
};

function calcular_imc(peso, altura) {
    altura = altura;
    const imc = peso / altura ** 2;
    return imc;
};

function obtener_clasificacion(imc) {
    let clas_string = "";
    if (imc >= 18.5 && imc < 25) {
        clas_string = "Peso normal";
        return clas_string;
    } else if (imc >= 25 && imc < 30) {
        clas_string = "Sobrepeso";
        return clas_string;
    } else if (imc < 18.5) {
        clas_string = "Bajo peso";
        return clas_string;
    } else {
        clas_string = "Obesidad";
        return clas_string;
    };
};

function calcular_ged(factor_act_fis, peso) {
    const ged = factor_act_fis * peso;
    return ged;
};

function obtener_estado_nutricional(imc) {
    let est_nut = "";
    if (obtener_clasificacion(imc) == "Peso normal") {
        est_nut = "El estado nutricional es adecuado";
        return est_nut;
    } else {
        est_nut = "Necesita atención especializada";
        return est_nut;
    };
};

function calcular() {

    const nombre = document.getElementById('id_nombre').value;
    let peso = document.getElementById('id_peso').value;
    let altura = document.getElementById('id_altura').value;
    const edad = Number(document.getElementById('id_edad').value);
    const genero = document.getElementById('id_genero').value;
    const act_fisica = document.getElementById('id_act_fisica').value;

    if (validar_nom(nombre) && validar_peso(peso) && validar_altura(altura) && validar_edad(edad)) {
        
        peso = parseFloat(peso);
        altura = parseFloat(altura);

        // ###########################

        const imc = calcular_imc(peso,altura);
        const clasificacion = obtener_clasificacion(imc);
        const ged = calcular_ged(act_fisica,peso) + " kcal";
        const est_nut = obtener_estado_nutricional(imc);

        // ###########################

        document.getElementById('nom_h2').innerHTML = nombre;
        document.getElementById('id_imc').innerHTML = imc;
        document.getElementById('id_clasificacion').innerHTML = clasificacion;
        document.getElementById('id_ged').innerHTML = ged;
        document.getElementById('id_est_nut').innerHTML = est_nut;

    } else {

        document.getElementById('nom_h2').innerHTML = "";
        document.getElementById('id_imc').innerHTML = "";
        document.getElementById('id_clasificacion').innerHTML = "";
        document.getElementById('id_ged').innerHTML = "";
        document.getElementById('id_est_nut').innerHTML = "";

    };
};

function validar(numero) {
    if (Number.isInteger(numero) == true && numero >= 0) {
        return true;
    } else {
        return false;
    };
};