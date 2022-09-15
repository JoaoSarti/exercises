function calcular(){
    var res = document.querySelector('#res')

    var num1 = Number(prompt('Digite a primeira nota'))
    var num2 = Number(prompt('Digite a segunda nota'))
    var num3 = Number(prompt('Digite a terceira nota'))
    var num4 = Number(prompt('Digite a quarta nota'))

    var média = (num1 + num2 + num3 + num4) / 4

    res.innerHTML = `A média do aluno foi ${média}`
}

