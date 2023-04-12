(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))r(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const i of t.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&r(i)}).observe(document,{childList:!0,subtree:!0});function a(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function r(e){if(e.ep)return;e.ep=!0;const t=a(e);fetch(e.href,t)}})();const l="/restaurant-page/assets/pizza-28a1b698.jpg";function s(){const n=document.querySelector("#content");n.innerHTML=`
<div class="home">
<h1 class="name">Little Italy Pizza</h1>
<section>
<img src="${l}" alt="pizza" class="pizza-pic">
</section>
<section>
<h2 class="tag-line">The Greatest Pizza Shop in town!</h2>
<p class="info">If you're looking for delicious and unique pizzas made with fresh, high-quality ingredients in a cozy and welcoming atmosphere with friendly staff. Look no further!</p>
</section>
</div>
`}const u="/restaurant-page/assets/oven-f5df456f.jpg";function d(){const n=document.querySelector("#content");n.innerHTML=`
    <div class="menu">
    <h1>Menu</h1>
    <img src="${u}" alt="oven" class="oven">
    <ul>
        <li>Margherita Pizza</li>
        <li>Pepperoni Pizza</li>
        <li>Mushroom Pizza</li>
        <li>Sausage Pizza</li>
        <li>Buffalo Chicken Pizza</li>
    </ul>
    </div>`}function f(){const n=document.querySelector("#content");n.innerHTML=`
    <div class="contact">
        <h1>Contact Us</h1>
        <article>
            <h2>Little Italy Pizza</h2>
            <p>111 New Yawk Ave. <br> New Yawk, New Yawk 09516 <br>(111)-111-1111</p>
        </article>
    </div>`}const m=document.getElementById("home"),p=document.getElementById("menu"),h=document.getElementById("contact"),c=document.getElementById("content");m.addEventListener("click",()=>{c.innerHTML="",s()});p.addEventListener("click",()=>{c.innerHTML="",d()});h.addEventListener("click",()=>{c.innerHTML="",f()});s();
