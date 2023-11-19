//Script - Calculadora

const numero1 = document.getElementById('num1')
const numero2 = document.getElementById('num2')
const resultado = document.getElementById('resultado')

function limpar(){
    numero1.value=""
    numero2.value=""
    numero1.focus()
    resultado.innerText="Resultado"
}

function somar(){
    let soma = Number(numero1.value) + Number(numero2.value)
    resultado.innerText = "Resultado: " + soma
    numero1.value=""
    numero2.value=""
    numero1.focus()
}

function subtrair(){
    let subtrair = Number(numero1.value) - Number(numero2.value)
    resultado.innerText = "Resultado: " + subtrair
    numero1.value=""
    numero2.value=""
    numero1.focus()
}

function multiplicar(){
    let multiplicar = Number(numero1.value) * Number(numero2.value)
    resultado.innerText = "Resultado: " + multiplicar
    numero1.value=""
    numero2.value=""
    numero1.focus()
}

function dividir(){
    let dividir = Number(numero1.value) / Number(numero2.value)
    resultado.innerText = "Resultado: " + dividir
    numero1.value=""
    numero2.value=""
    numero1.focus()
}

//Script - Cálculo de nota

const nota1 = document.getElementById('notas1')
const nota2 = document.getElementById('notas2')
const nota3 = document.getElementById('notas3')
const resultadoNota = document.getElementById('resultadoNota')

function verificarAP1(){
    notas1 = Number(nota1.value)
    if(notas1 < 0 || notas1 > 1.5){
        alert("Nota AP1 invalida!")
        nota1.value=""
        nota1.focus()
    }
    else{
        nota2.focus()
    }
}

function verificarAP2(){
    notas2 = Number(nota2.value)
    if(notas2 < 0 || notas2 > 2.5){
        alert("Nota AP1 invalida!")
        nota2.value=""
        nota2.focus()
    }
    else{
        nota3.focus()
    }
}

function verificarAS(){
    notas3 = Number(nota3.value)
    if(notas3 < 0 || notas3 > 6){
        alert("Nota AP1 invalida!")
        nota3.value=""
        nota3.focus()
    }
    
}

function somarNotas(){
    somaNotas = notas1+notas2+notas3
    resultadoNota.innerText = "Resultado: " + somaNotas
    nota1.value=""
    nota2.value=""
    nota3.value=""
    nota1.focus()
    if (somaNotas < 6){
        resultadoNota.innerText = "Nota: " + somaNotas + ". Reprovado! Reforce seus estudos para realização da AF. ❌"
    }
    else{
        resultadoNota.innerText = "Nota: " + somaNotas + ". Aprovado! Parabéns. 🎉"
    }
}

Avaliação Semestral - html divido em duas seções na qual contém uma calculadora e um cálculo de notas.