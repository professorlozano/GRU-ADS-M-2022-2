function calcularIMC(){
    //imc = peso / (altura * altura)
    let peso = Number(document.getElementById("peso").value)
    let altura = Number(document.getElementById("altura").value)
    let imc = peso / (altura*altura)
    document.getElementById("retImc").innerHTML = "O imc é: "+imc
    classificarIMC(imc)
}

function classificarIMC(imc){
    let classificacao

    if(imc < 18.5){
        classificacao = "Abaixo do Peso"
    }
    else if(imc < 24.9){
        classificacao = "Peso Normal"
    }
    else if(imc < 29.9){
        classificacao = "Sobrepeso"
    }
    else if(imc < 34.9){
        classificacao = "Obesidade I"
    }
    else if(imc < 39.9){
        classificacao = "Obesidade II"
    }
    else{
        classificacao = "Obesidade III"
    }
    document.getElementById("retClassificacao").innerHTML = "A classificação é: "+classificacao
}