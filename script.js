const Black_shawa = document.querySelector("div.container");
const Poluchit = function (shaurma) {
    const item = `
        <div class="card">
            <div class="card-img" style="background-image: url(${shaurma.img_link})"></div>
            <h3>${shaurma.name}</h3>
            
        </div>
    `
    Black_shawa.innerHTML += item;
}

cats.forEach(cat => {
    Poluchit(cat);});

