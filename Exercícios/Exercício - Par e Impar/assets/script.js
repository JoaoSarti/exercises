function clicar(){
    var num = Number(prompt('Digite o número para saber se ele é par ou ímpar'))
    var res = document.querySelector('#res')


    if(num % 2 == 0){
        res.innerHTML = `O número ${num} é <strong>par!</strong>`
    }else{
        res.innerHTML = `O número ${num} é <strong>ímpar!</strong>`
    }
}
