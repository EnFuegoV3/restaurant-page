import pizza from '/public/pizza.jpg'

export function loadPage() {

const content = document.querySelector('#content');

content.innerHTML = `
<div class="home">
<h1 class="name">Little Italy Pizza</h1>
<section>
<img src="${pizza}" alt="pizza" class="pizza-pic">
</section>
<section>
<h2 class="tag-line">The Greatest Pizza Shop in town!</h2>
<p class="info">If you're looking for delicious and unique pizzas made with fresh, high-quality ingredients in a cozy and welcoming atmosphere with friendly staff. Look no further!</p>
</section>
</div>
`
}