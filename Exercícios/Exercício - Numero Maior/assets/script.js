function clicar(){
   
    var num1 = Number(prompt('DIgite o primeiro número'))
    var num2 = Number(prompt('Digite o segundo número'))
    var res = document.querySelector('#res')


    if(num1 > num2){
        res.innerHTML= `O número ${num1} é maior que o ${num2}`
    }else if(num1 < num2){
        res.innerHTML = `O número ${num2} é maior que o ${num1}`
    }else{
        res.innerHTML = `[ERRO], Numeros invalidos`
    }
    
}