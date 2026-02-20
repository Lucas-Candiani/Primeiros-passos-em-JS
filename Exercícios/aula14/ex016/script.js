
function iniciar() {
    var begin = document.getElementById("inicio")
    var end = document.getElementById("fim")
    var jumper = document.getElementById("passador")

    var res = document.getElementById("res")

    if (begin.value.length == 0 || end.value.length == 0 || jumper.value.length == 0) {
        window.alert("[ERRO] Tente novamente")
    } else {
        //Aqui é onde estava dando erro nas nossas outras tentativas, você precisa se lembrar que em JS, os números precisam ser convertidos...
        res.innerHTML= `Contando... <br>`
        var i = Number(begin.value)
        var f = Number(end.value)
        var p = Number(jumper.value)
        if (p <= 0){
            window.alert(`Algo deu errado, vamos considerar o Passo = 1`)
            p = 1 
        }
        if(i < f) {
            //Contagem Crescente 
            for(var c = i; c < f; c += p){
                res.innerHTML += `${c} \u{1F449}`
            }
        } else {
            //Contagem regressiva
            for(var c = i; c > f; c -= p){
                res.innerHTML += `${c} \u{1F449}`
            }
            
        }
        res.innerHTML += `\u{1F3C1}`
        }
        
    }

