var agora = new Date()
var hora = agora.getHours()
if (hora < 12){
    console.log("Bum dia!!")
} else if (hora <19){
    console.log("Batarde!")
} else if (hora<24){
    console.log("Boa noite!")
} else {
    console.log("Um novo dia começa!")
}
