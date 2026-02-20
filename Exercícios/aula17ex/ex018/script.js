
var num = document.getElementById("valor")
var lista = document.getElementById("area")
var res = document.getElementById("res")
let valores = []
//res.innerHTML += `<option> Valor ${numero} enviado</option>`

function isNumero(n){
    if(Number(n) >=1 && Number(n) <=100) {
        return true
    } else {
        return false
    }
}
//indexOf = "Qual posição está o n?, se ele devolver-1... ele ainda não está na lista. "
function inLista(n, l) {
    if(l.indexOf(Number(n)) != -1){
        return true
    } else {
        return false
    }

}

function enviar(){
    if(isNumero(num.value) && !inLista(num.value, valores)){
        valores.push(Number(num.value))
        let item = document.createElement('option')
        item.text = `Valor ${num.value} adicionado`
        lista.appendChild(item)
        res.innerHTML = ''
    } else {
        window.alert("Valor inválido ou já encontrado na lista.")
    }
    num.value = ''
    num.focus()
}

function finalizar(){
    if (valores.length == 0){
        alert("[ERRO] Nenhum valor adicionado")
    } else {
        valores.sort((a, b) => a - b)
        var tot = valores.length
        var menor = valores[0];
        var maior = valores[tot- 1];
        var soma = 0; 

        for (let pos = 0; pos < valores.length; pos++) {
            soma += valores[pos]
            
        }
        var media = soma/tot
        

        

        res.innerHTML = ''
        res.innerHTML += `<p> Ao todo temos ${tot} números cadastrados. <p>`
        res.innerHTML += `<p>O Menor valor é ${menor}</p>`
        res.innerHTML += `<p>O Maior valor é ${maior}</p>`
        res.innerHTML += `<p>A soma de todos os valores é ${soma}</p>`
        res.innerHTML += `<p>A média de todos os valores é ${media}</p>`
        }
    
}