import {getRandomInt} from './random'


const createCardNode = ()=>{
    const imagen = document.createElement("img")
    // debugger
    imagen.src=`https://source.unsplash.com/random/${getRandomInt()}` 
    const imageContainer = document.createElement("div")
    imageContainer.className = "image-container"
    const parrafo = document.createElement("p")
    parrafo.className = "description"
    const text = document.createTextNode('Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias perferendis ex, repudiandae dolorum illo illum itaque autem eveniet corporis et obcaecati est provident assumenda fuga aut debitis ab vel voluptas.')
    parrafo.appendChild(text)
    const card = document.createElement("div")
    card.className="card"

    imageContainer.appendChild(imagen)
    card.appendChild(imageContainer)
    card.appendChild(parrafo)

    return card
}

const mountNode = document.querySelector("#app")
const addCardButton = document.querySelector('button') 

const addCard=()=>{
    mountNode.appendChild(createCardNode())
}

addCardButton.addEventListener('click', addCard)


