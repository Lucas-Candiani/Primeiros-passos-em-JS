function carregar(){
    var msg = window.document.getElementById("msg")
    var msgdois = document.getElementById("msg2")
    var img = window.document.getElementById("imagem") 
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `Agora são ${hora} horas`
    if (hora >= 0 && hora < 12){
        img.src = "imagens/manha.png"
        document.body.style.background = "#d8bb8f"
        msgdois.innerHTML = `Bom dia!`
    } else if (hora>=12 && hora<18){
        //Boa tarde
        img.src = "imagens/tarde.png"
        document.body.style.background = "#308cf1"
        msgdois.innerHTML = `Boa tarde!`
    } else {
        //Boa noite!
        img.src = "imagens/noite.png"
        document.body.style.background = "#212022"
        msgdois.innerHTML = `Boa noite!`
    }
}


