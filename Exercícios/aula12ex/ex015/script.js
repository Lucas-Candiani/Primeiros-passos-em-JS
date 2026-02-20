function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById("txtano")
    var res = document.getElementById("res")
    var img = document.createElement('img')
    img.setAttribute('id', 'foto')
    if (fano.value.length == 0 || fano.value > ano){
        window.alert("[Erro] Verifique os dados e tente novamente")
    } else {
        var fsex = document.getElementsByName("radsex")
        var idade = ano - Number(fano.value)
        var gen = ''
        if (fsex[0].checked) {
            gen = 'Homem'
            if (idade>=0 && idade <10){
                //criança
                img.setAttribute('src', 'criancahomem.png')
            } else if (idade <21){
                //jovem
                img.setAttribute('src', 'adolescentehomem.png')
            } else if (idade <50){
                //adulto
                img.setAttribute('src', 'adultohomem.png')
            } else {
                //idoso
                img.setAttribute('src', 'idosohomem.png')
            }

        } else if (fsex[1].checked) {
            gen = 'Mulher'
            if (idade>=0 && idade <10){
                //criança
                img.setAttribute('src', 'criancamulher.png')
            } else if (idade <21){
                //jovem
                img.setAttribute('src', 'adolescentemulher.png')
            } else if (idade <50){
                //adulto
                img.setAttribute('src', 'adultomulher.png')
            } else {
                //idoso
                img.setAttribute('src', 'idosomulher.png')
            }
        }
        res.style.textAlign = "center"
        res.innerHTML = `Identificamos ${gen} com ${idade} anos`
        res.appendChild(img)
    }
}