const min=0
const max=1000
function getRandomInt (){
    return Math.floor(Math.random() * (max - min)) + min;
}

export default getRandomInt;