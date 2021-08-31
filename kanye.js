const loadKanye = () => {
    fetch('https://api.kanye.rest/')
        .then(res => res.json())
        .then(data => displayLoad(data))
}



const displayLoad = element => {
    const roodDiv = document.getElementById('main');
    const newdiv = document.createElement('div');
    newdiv.innerHTML = `
    <p class='text'>${element.quote}<p>
    `
    roodDiv.appendChild(newdiv);
}
loadKanye()