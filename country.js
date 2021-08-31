const loadCountries = () => {
    fetch('https://restcountries.eu/rest/v2/all')
        .then(res => res.json())
        .then(data => displayCountry(data))
}
loadCountries()

const displayCountry = countris => {
    const rootdiv = document.getElementById('countries')
    countris.forEach(element => {
        const newdiv = document.createElement('div')
        newdiv.classList.add('list')
        newdiv.innerHTML = `
            <h3>${element.name}</h3>
            <p>${element.population}</p>
            <button  onclick="displayDetails('${element.name}')" type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
            Launch static backdrop modal
          </button>
        `
        rootdiv.appendChild(newdiv)
    });
}

const displayDetails = name => {
    const url = `https://restcountries.eu/rest/v2/name/${name}`
    fetch(url)
        .then(res => res.json())
        .then(data => displayCountryDetails(data[0]))


}

const displayCountryDetails = data => {
    const newdata = data.name;
    console.log(newdata)
    const div = document.getElementById('modal')
    div.innerHTML = `
                        <div class="modal-header">
                            <h5 class="modal-title" id="staticBackdropLabel">Country Name:${data.name}</h5>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div>
                        <div class="modal-body">
                        <img class="img-fluid" src="${data.flag}" alt="">
                    </div>
                    <div><p>${data.cioc}</p>
                    <h3>Population:${data.population}</h3></div>
                    <p>${data.languages[0].nativeName}</p>
                        </div>
    `
}
