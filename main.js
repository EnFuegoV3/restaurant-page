import './style.css'
import { loadPage } from './pageLoad.js'
import { loadMenu } from '/menu.js'
import { loadContact } from './contact';


const home = document.getElementById('home');
const menu = document.getElementById('menu');
const contact = document.getElementById('contact');
const content = document.getElementById('content');

home.addEventListener('click', () => {
  content.innerHTML = "";
  loadPage();
});

menu.addEventListener('click', () => {
  content.innerHTML = "";
  loadMenu();
})

contact.addEventListener('click', () => {
  content.innerHTML = "";
  loadContact();
})

loadPage();
