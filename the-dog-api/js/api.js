
const loadDog = () => {
    fetch("https://api.thedogapi.com/v1/breeds")
        .then(res => res.json())
        .then(data => displayDog(data))
}
const displayDog = (dogList) => {
    const main = document.getElementById('main');
    const first10Data = dogList.slice(0, 100);

    for (const dog of first10Data) {
        console.log(dog.weight)
        const div = document.createElement('div');
        div.className = "col-lg-4"
        div.innerHTML = `
        <h2>${dog.name}</h2>
        <p>${dog.temperament}</p>
        <h4>${dog.weight.imperial}</h4>

        <img wight="400px" height="250px" src="${dog.image.url}" alt="">
        `


        main.appendChild(div)

    }
}