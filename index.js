//console.log('hola mundo')
//1.construyendo los nodos tarjetas
const createCardNode = ()=>{
    const imagen = document.createElement("img")
    imagen.src='https://source.unsplash.com/random/1' //todo random
    const imageContainer = document.createElement("div")
    imageContainer.className = "image-container"
    const parrafo = document.createElement("p")
    parrafo.className = "description"

    const card = document.createElement("div")
    card.className="card"

    imageContainer.appendChild(imagen)
    card.appendChild(imageContainer)
    card.appendChild(parrafo)

    return card
}


//2.Enviar los nodos para renderizar

const mountNode = document.querySelector("#app")
mountNode.appendChild(createCardNode())