import { catalog } from "./store.js";
const games = catalog;
const renderContainer = document.querySelector('.games_container')

console.log(games)

const createElement = games => ` 
<div class="card_game">

<div class="game_img">
  <img src="${games.img}" alt="">
</div>
<div class="data_game">
  <div class="name_game">
    <h3>${games.game}</h3>
    <span>${games.stars}</span>
  </div>
  <div class="category">
    <span>${games.gener}</span>
  </div>
  <div class="price">
    <div>
      <span>$ ${games.price}</span>
      <button>Agregar <i class="fa-solid fa-cart-shopping"></i></button>  
    </div>
  </div>
</div>
</div> 
`;



const paintElement = game => {
  renderContainer.innerHTML = game.map((item) => createElement(item)).join('');
}



const init = () => {

  window.addEventListener('DOMContentLoaded',() => {
    paintElement(games)
  })
}

init() 