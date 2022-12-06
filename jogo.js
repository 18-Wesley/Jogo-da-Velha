const jogador = document.querySelector('.jogador')

let player = "X"

// let arrayBotoes = []
let posicoes;

let posicoesAcertos = [
    [1,2,3],
    [4,5,6],
    [1,4,7],
    [2,5,8],
    [3,6,9],
    [1,5,9],
    [3,5,7],
    [7,8,9],
]

const iniciar = () =>{
    posicoes = []
    jogador.innerHTML = `${player}`

    document.querySelectorAll(".container-grid button").forEach((item) =>{
        item.innerHTML = ""
        item.addEventListener("click", novaJogada )
    })
}

const novaJogada = (e) =>{
    let index = e.target.getAttribute("data-i")
    e.target.innerHTML = player
    e.target.removeEventListener("click", novaJogada)
    posicoes[index] = player

    setTimeout(()=>{
        chechar()
    },[100])

    player = player === "X" ? player = "O" : player = "X"
    jogador.innerHTML = `${player}`

   

}

const chechar = () =>{

    console.log(posicoes)

    let proximoPlayer = player === "X" ? "O" : "X"

    const items = posicoes
        .map((item, i) => {
            return [item, i]
        })
        .filter((item) => {
            return item[0] === proximoPlayer
        })
        .map((item) => {
            return item[1]
        })

    for(pos of posicoesAcertos){
        if(pos.every((item) => items.includes(item))){
            alert('Jogador '+ proximoPlayer + ' ganhou')
            iniciar()
            return
        }
        
    }
    if(posicoes.filter((item) => item).length === 9 ){
        console.log('empate')
        alert('Deu empate')
        iniciar()
        return
    }
}

iniciar()
