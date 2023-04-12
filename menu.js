import oven from '/public/oven.jpg'

export

function loadMenu() {
    const content = document.querySelector('#content');

    content.innerHTML = `
    <div class="menu">
    <h1>Menu</h1>
    <img src="${oven}" alt="oven" class="oven">
    <ul>
        <li>Margherita Pizza</li>
        <li>Pepperoni Pizza</li>
        <li>Mushroom Pizza</li>
        <li>Sausage Pizza</li>
        <li>Buffalo Chicken Pizza</li>
    </ul>
    </div>`
}