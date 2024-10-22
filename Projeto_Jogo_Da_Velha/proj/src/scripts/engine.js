const emojis = [
    "😀",
    "😀",
    "😑",
    "😑",
    "😡",
    "😡",
    "😴",
    "😴",
    "😜",
    "😜",
    "😎",
    "😎"]
let cartaAberta = []
let embaralhaEmoji = emojis.sort(()=>(Math.random() >0.5 ? 2 : -1))

for(let i=0; i<emojis.length; i++){
    let box = document.createElement("div")
    box.className ="item"
    box.onclick = handleClick
    box.innerHTML = embaralhaEmoji[i]
    document.querySelector(".game").appendChild(box)
}

function handleClick(){
    if(cartaAberta.length < 2){
        this.classList.add("caixaAberta")
        cartaAberta.push(this)

        if(cartaAberta.length == 2){
            setTimeout(checaCartas, 500)
        }
    }
}

function checaCartas(){
    if(cartaAberta[0].innerHTML === cartaAberta[1].innerHTML){
        cartaAberta[0].classList.add("boxMatch")
        cartaAberta[1].classList.add("boxMatch")
    } else{
        cartaAberta[0].classList.remove("caixaAberta")
        cartaAberta[1].classList.remove("caixaAberta")
    }
    cartaAberta = []
}
