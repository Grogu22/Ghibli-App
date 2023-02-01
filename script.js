const app = document.getElementById("root");

const logo = document.createElement('img');
logo.alt = 'Studio Ghibli Logo';
logo.src = 'logo.png';

const container = document.createElement('div');
container.setAttribute("class", "container");

app.appendChild(logo);
app.appendChild(container);
let file = 'https://studio-ghibli-films-api.herokuapp.com/api/';
fetch(file).
then(x => x.json()).
then(y => Object.keys(y).forEach(element => {
    const card = document.createElement('div');
    card.setAttribute("class", "card");

    const h1 = document.createElement('h1');
    h1.textContent = element;

    const p = document.createElement('p');
    p.textContent = `${y[element]['synopsis'].substring(0, 300)}...`;

    container.appendChild(card);
    card.appendChild(h1);
    card.appendChild(p);
})).
catch(e => document.getElementsByClassName("container").innerText = e);