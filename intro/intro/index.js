
const root = document.getElementById("root");

const home = document.createElement("div");
home.className = "home-container";
root.appendChild(home);
// const title = document.createElement("h1");
// title.innerText = "Winter";
// title.className = "home-title";

// const homeImage = document.createElement("img");
// homeImage.src = "./winter.png";
// homeImage.alt = "anotimp";
// homeImage.style.width = "100%";

//root.append(title, homeImage);

const cards = [{
    title: "winter",
    image: "./winter.png"
},
{
    title: "Erica",
    image: "./erica.jpg"
},
{
    title: "Nutcracker",
    image: "./02.jpg"
}
]

function Card(cardTitle, imageSrc) {

    let state = true;
    const card = document.createElement("div");
    card.className = "home-card";
    const title = document.createElement("h4");
    title.innerText = cardTitle;
    title.className = "home-card-title";

    const homeImage = document.createElement("img");
    homeImage.src = imageSrc;
    homeImage.alt = "home-card-photo";
    homeImage.style.width = "100%";

    const showImg = document.createElement("button");
    showImg.innerText = "Show Image"
    showImg.onclick = () => {
        state = !state;
        state ? card.insertBefore(homeImage, showImg) :  card.removeChild(homeImage)
    }
    card.append(title, homeImage, showImg);
    return card;
}

cards.forEach(obj => {
    const card = Card(obj.title, obj.image);
    home.append(card);
})

