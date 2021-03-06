document.oncontextmenu = new Function("return false;");
const blackPieces = [
    {
        id: 'blackPawnA',
        img: './assets/png/bp.png',
        position: 'A7'
    },
    {
        id: 'blackPawnB',
        img: './assets/png/bp.png',
        position: 'B7'
    },
    {
        id: 'blackPawnC',
        img: './assets/png/bp.png',
        position: 'C7'
    },
    {
        id: 'blackPawnD',
        img: './assets/png/bp.png',
        position: 'D7'
    },
    {
        id: 'blackPawnE',
        img: './assets/png/bp.png',
        position: 'E7'
    },
    {
        id: 'blackPawnF',
        img: './assets/png/bp.png',
        position: 'F7'
    },
    {
        id: 'blackPawnG',
        img: './assets/png/bp.png',
        position: 'G7'
    },
    {
        id: 'blackPawnH',
        img: './assets/png/bp.png',
        position: 'H7'
    },

    ////////////////////////////////////////////

    {
        id: 'blackRookA',
        img: './assets/png/br.png',
        position: 'A8'
    },
    {
        id: 'blackKnightB',
        img: './assets/png/bn.png',
        position: 'B8'
    },
    {
        id: 'blackBishopC',
        img: './assets/png/bb.png',
        position: 'C8'
    },
    {
        id: 'blackQueenD',
        img: './assets/png/bq.png',
        position: 'D8'
    },
    {
        id: 'blackKingE',
        img: './assets/png/bk.png',
        position: 'E8'
    },
    {
        id: 'blackBishopF',
        img: './assets/png/bb.png',
        position: 'F8'
    },
    {
        id: 'blackKnightG',
        img: './assets/png/bn.png',
        position: 'G8'
    },
    {
        id: 'blackRookH',
        img: './assets/png/br.png',
        position: 'H8'
    },
]
const whitePieces = [
    {
        id: 'whitePawnA',
        img: './assets/png/wp.png',
        position: 'A2'
    },
    {
        id: 'whitePawnB',
        img: './assets/png/wp.png',
        position: 'B2'
    },
    {
        id: 'whitePawnC',
        img: './assets/png/wp.png',
        position: 'C2'
    },
    {
        id: 'whitePawnD',
        img: './assets/png/wp.png',
        position: 'D2'
    },
    {
        id: 'whitePawnE',
        img: './assets/png/wp.png',
        position: 'E2'
    },
    {
        id: 'whitePawnF',
        img: './assets/png/wp.png',
        position: 'F2'
    },
    {
        id: 'whitePawnG',
        img: './assets/png/wp.png',
        position: 'G2'
    },
    {
        id: 'whitePawnH',
        img: './assets/png/wp.png',
        position: 'H2'
    },

    ////////////////////////////////////////////

    {
        id: 'whiteRookA',
        img: './assets/png/wr.png',
        position: 'A1'
    },
    {
        id: 'whiteKnightB',
        img: './assets/png/wn.png',
        position: 'B1'
    },
    {
        id: 'whiteBishopC',
        img: './assets/png/wb.png',
        position: 'C1'
    },
    {
        id: 'whiteQueenD',
        img: './assets/png/wq.png',
        position: 'D1'
    },
    {
        id: 'whiteKingE',
        img: './assets/png/wk.png',
        position: 'E1'
    },
    {
        id: 'whiteBishopF',
        img: './assets/png/wb.png',
        position: 'F1'
    },
    {
        id: 'whiteKnightG',
        img: './assets/png/wn.png',
        position: 'G1'
    },
    {
        id: 'whiteRookH',
        img: './assets/png/wr.png',
        position: 'H1'
    },
]
const roles = {
    pawn: {

    }
}

const arr = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H']
let reverse = true
let index = 1

for (const row of [8, 7, 6, 5, 4, 3, 2, 1]) {
    let squareIndex = 1
    const rowNode = document.createElement("div");
    rowNode.classList.add(`row`)
    for (const col of ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H']) {
        const square = document.createElement("div");
        const numLabel = document.createElement("div");
        const letterLabel = document.createElement("div");
        numLabel.classList.add('lb-num')
        letterLabel.classList.add('lb-letter')
        square.classList.add(`square`)
        square.setAttribute('id', col + row)
        square.setAttribute('ondrop', 'drop_handler(event)')
        square.setAttribute('ondragover', 'dragover_handler(event)')
        if (row === 1) letterLabel.innerText = col
        if (col === "A") numLabel.innerText = row

        square.appendChild(numLabel);
        square.appendChild(letterLabel);
        rowNode.appendChild(square);
        if (reverse) {
            square.style.backgroundColor = squareIndex % 2 == 0 ? '#a6a6a6' : '#fff'
            // square.style.color = squareIndex % 2 != 0 ? '#000' : '#fff'
        } else {
            square.style.backgroundColor = squareIndex % 2 != 0 ? '#a6a6a6' : '#fff'
            // square.style.color = squareIndex % 2 == 0 ? '#000' : '#fff'
        }
        squareIndex++
    }
    table.appendChild(rowNode);
    reverse = !reverse

}
start()
function dragstart_handler(ev) {
    // Adiciona o id do elemento alvo para o objeto de transferência de dados
    ev.dataTransfer.setData("text/plain", ev.target.id);
    ev.dropEffect = "move";
    currentPiece = ev.target.id

}
function dragover_handler(ev) {
    ev.preventDefault();
    // Define o dropEffect para ser do tipo move
    ev.dataTransfer.dropEffect = "move"

}
let currentPiece
let turn = 'W'
function drop_handler(ev) {
    ev.preventDefault();
    if (ev.target.getAttribute('class') == 'square') {
        // Pega o id do alvo e adiciona o elemento que foi movido para o DOM do alvo
        var data = ev.dataTransfer.getData("text");
        ev.target.appendChild(document.getElementById(data));
    }
    let isFrendly = ''

    switch (ev.target.className) {
        case document.querySelector('#' + currentPiece).className:
            isFrendly = true
            break;
        case 'square':
            isFrendly = true
            break;
        default:
            isFrendly = false
            break;
    }
    if (!isFrendly) {
        movieToTrash()
    }

    function movieToTrash() {
        const element = document.querySelector('#' + ev.target.id)
        const targetElement = ev.target.parentElement
        const peice = document.querySelector('#' + currentPiece)
        if (peice.className.search('black') > -1) {
            turn = 'B'
        } else {
            turn = 'W'
        }
        const trash = document.querySelector('#trash' + turn)
        element.animate({
            top: [element.offsetTop + 'px', trash.offsetTop + 'px'],
            left: [element.offsetLeft + 'px', trash.offsetLeft + 'px'],
            easing: ['ease-in', 'ease-out'],
            width: [50 + 'px', 25 + 'px'],
        }, 200).onfinish = e => {
            const target = document.querySelector('#' + ev.target.id)
            target.style.width = '25px'
            target.style.position = 'relative'
            trash.appendChild(target)
        }


        peice.animate({
            top: [peice.offsetTop + 'px', targetElement.offsetTop + 'px'],
            left: [peice.offsetLeft + 'px', targetElement.offsetLeft + 'px'],
            easing: ['ease-in', 'ease-out'],
            width: [50 + 'px', 25 + 'px'],
        }, 100).onfinish = e => {
            // const target = document.querySelector('#' + ev.target.id)
            // target.style.width = '25px'
            // target.style.position = 'relative'
            targetElement.appendChild(peice)
        }

    }
    document.querySelector('audio').play()
}

function start() {
    whitePieces.forEach(piece => {
        const pieceNode = document.createElement("img");
        pieceNode.setAttribute('src', piece.img)
        pieceNode.setAttribute('id', piece.id)
        pieceNode.classList.add('piece', 'white')
        pieceNode.setAttribute('draggable', true)
        pieceNode.setAttribute('ondragstart', "dragstart_handler(event)")
        const parent = document.querySelector(`#${piece.position}`)
        parent.appendChild(pieceNode)

    });
    blackPieces.forEach(piece => {
        const pieceNode = document.createElement("img");
        pieceNode.setAttribute('src', piece.img)
        pieceNode.setAttribute('id', piece.id)
        pieceNode.classList.add('piece', 'black')
        pieceNode.setAttribute('draggable', true)
        pieceNode.setAttribute('ondragstart', "dragstart_handler(event)")
        const parent = document.querySelector(`#${piece.position}`)
        parent.appendChild(pieceNode)

    });
}
// let timer = {
//     sec: 60,
//     min: 5
// }
// let min = 0
// let sec = 0
// setInterval(e => {
//     sec++
//     timer.sec = timer.sec - sec
//     if (sec == 60) {
//         sec = 0
//         min -= 1
//     }
//     clock.innerHTML = min +":"+timer.sec
// }, 1000)
