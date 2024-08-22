let nome = prompt("diga seu nome")
let sobrenome = prompt("diga seu sobrenome")
let curso = prompt("diga seu curso")
let dataNascimento = prompt("diga sua data de nascimento")
let idade = 2024 - dataNascimento

alert(`Olá ${nome} ${sobrenome}
então você estuda ${curso}, e tem ${idade} anos, Legal`)

// atividade 2

let num1 = parseInt(prompt("diga um número "))
let num2 = parseInt(prompt("diga um número "))

let soma = num1 + num2
let subtracao = num1 - num2
let multiplicacao = num1 * num2
let divisao = num1 / num2

alert(`
Resultado:
${num1} + ${num2} = ${soma}
${num1} - ${num2} = ${subtracao}
${num1} * ${num2} = ${multiplicacao}
${num1} / ${num2} = ${divisao}
`)
