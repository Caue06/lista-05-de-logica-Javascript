const exercicio01 = document.querySelector("#ex01")
const exercicio02 = document.querySelector("#ex02")
const exercicio03 = document.querySelector("#ex03")
const exercicio04 = document.querySelector("#ex04")
const exercicio05 = document.querySelector("#ex05")
const exercicio06 = document.querySelector("#ex06")
const exercicio07 = document.querySelector("#ex07")
const exercicio08 = document.querySelector("#ex08")
const exercicio09 = document.querySelector("#ex09")
const exercicio10 = document.querySelector("#ex10")
const exercicio11 = document.querySelector("#ex11")
const exercicio12 = document.querySelector("#ex12")
const exercicio13 = document.querySelector("#ex13")
const exercicio14 = document.querySelector("#ex14")
const exercicio15 = document.querySelector("#ex15")
const res = document.querySelector(".res")

exercicio01.addEventListener("click", () => {
    res.innerHTML = ""
    for (let contadora = 1; contadora < 21; contadora++) {
        res.innerHTML += " " + contadora
    }
    // 1)Faça um programa que exiba os números de 1 a 20.
})

exercicio02.addEventListener("click", () => {
    res.innerHTML = ""
    for (let contadora = 0; contadora < 51; contadora += 2) {
        res.innerHTML += " " + contadora
    }
    // 2) Escreva um programa que exiba apenas os números pares de 1 a 50.
})

exercicio03.addEventListener("click", () => {
    res.innerHTML = ""
    let numeroDigitado = parseInt(prompt("Digite um número para ver a sua tabuada:"))
    for (let contadora = 1; contadora < 11; contadora++) {
        let tabuada = numeroDigitado * contadora
        res.innerHTML += `<p>${numeroDigitado} X ${contadora} = ${tabuada}</p>`
    }
    // 3) Crie um programa que exiba a tabuada de um número fornecido pelo usuário (de 1 a 10).
})

exercicio04.addEventListener("click", () => {
    res.innerHTML = ""
    let soma = 0
    for (let contadora = 1; contadora < 101; contadora++) {
        soma += contadora
    }
    res.innerHTML = soma
    // 4) Faça um programa que calcule a soma dos números de 1 a 100.
})

exercicio05.addEventListener("click", () => {
    res.innerHTML = ""
    let soma = 0
    for (let contadora = 1; contadora < 201; contadora++) {
        if (contadora % 2 == 0) {
            soma += contadora
        }
    }
    res.innerHTML = soma

    // 5) Escreva um programa que calcule a soma dos números pares de 1 a 200.
})

exercicio06.addEventListener("click", () => {
    res.innerHTML = ""
    let maiorValor = Number.MIN_VALUE
    let menorValor = Number.MAX_VALUE
    for (let contadora = 0; contadora < 10; contadora++) {
        let numeroDigitado = parseInt(prompt("Digite um número:"))
        if (numeroDigitado < menorValor) {
            menorValor = numeroDigitado
        } else if (numeroDigitado > maiorValor) {
            maiorValor = numeroDigitado
        }
    }

    res.innerHTML = menorValor + " " + maiorValor
    // 6) Crie um programa que leia 10 números inteiros e mostre o maior e o menor valor.
})

exercicio07.addEventListener("click", () => {
    res.innerHTML = ""
    let soma = 0
    for (let contadora = 1; contadora < 6; contadora++) {
        let numeroDigitado = parseInt(prompt(`Digite o ${contadora}º número: `))
        soma += numeroDigitado
    }
    res.innerHTML = `A média aritmética dos 5 números digitados é: ${soma / 5}`
    // 7) Faça um programa que leia 5 números inteiros e calcule a média aritmética.
})

exercicio08.addEventListener("click", () => {
    // 8) Escreva um programa que mostre a sequência de Fibonacci até o décimo termo.
})

exercicio09.addEventListener("click", () => {
    res.innerHTML = ""
    let numeroDigitado = parseInt(prompt("Digite um número para ver de 1 até ele:"))
    for (let contadora = 1; contadora <= numeroDigitado; contadora++) {
        res.innerHTML += contadora + " "
    }
    // 9) Crie um programa que peça ao usuário um número inteiro N e mostre os números de 1 até N.
})

exercicio10.addEventListener("click", () => {
    res.innerHTML = ""
    for (let contadora = 100; contadora < 201; contadora++) {
        if (contadora % 2 != 0) {
            res.innerHTML += contadora + " "
        }
    }
    // 10) Faça um programa que mostre todos os números ímpares entre 100 e 200.
})

exercicio11.addEventListener("click", () => {
    res.innerHTML = ""
    let maioresDeIdade = 0
    for (let contadora = 1; contadora < 11; contadora++) {
        let idadeDigitada = parseInt(prompt(`Digite a idade da ${contadora}ª pessoa:`))
        if (idadeDigitada > 17) {
            maioresDeIdade++
        }
    }

    res.innerHTML = `Entre as idade digitadas à ${maioresDeIdade} maiores de idade.`
    // 11) Escreva um programa que leia 10 idades e calcule a quantidade de pessoas maiores de idade.
})

exercicio12.addEventListener("click", () => {
    res.innerHTML = ""
    let numeroDigitado = parseInt(prompt("DIgite um número para ver o seu fatorial:"))
    let fatorial = 1
    for (let contadora = 1; contadora <= numeroDigitado; contadora++) {
        fatorial *= contadora
    }
    res.innerHTML = fatorial
    // 12) Crie um programa que leia um número inteiro e calcule o seu fatorial.
})

exercicio13.addEventListener("click", () => {
    res.innerHTML = ""
    let numeroDigitado = parseInt(prompt("Digite um número:"))
    for (let contadora = 1; contadora <= numeroDigitado; contadora++) {
        if (contadora % 3 == 0) {
            res.innerHTML += contadora + " "
        }
    }
    // 13) Faça um programa que peça ao usuário um número e exiba a soma de todos os múltiplos de 3 até esse número.
})

exercicio14.addEventListener("click", () => {
    res.innerHTML = ""
    for (let contadora = 1; contadora < 6; contadora++) {
        let nome = prompt(`Digite o ${contadora}º nome para o ver invertido:`)
        for (let contadora2 = nome.length; contadora2 >= 0; contadora2--) {
            res.innerHTML += nome.charAt(contadora2)
        }
        res.innerHTML += " "
    }
    // 14) Escreva um programa que leia 5 nomes e os exiba em ordem invertida.
})

exercicio15.addEventListener("click", () => {
    res.innerHTML = ""
    let numeroDigitado = parseInt(prompt("Digite um número para formar um triângulo de asterisco:"))
    for (let contadora = 1; contadora <= numeroDigitado; contadora++) {
        for (let contadora2 = 1; contadora2 <= contadora; contadora2++) {
            res.innerHTML += "*"
        }
        res.innerHTML += "<br>"
    }
    // 15)Crie um programa que desenhe na tela um triângulo de asteriscos com base em um número informado pelo usuário.
})