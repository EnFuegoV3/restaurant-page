export function loadContact() {
    const content = document.querySelector('#content');

    content.innerHTML = `
    <div class="contact">
        <h1>Contact Us</h1>
        <article>
            <h2>Little Italy Pizza</h2>
            <p>111 New Yawk Ave. <br> New Yawk, New Yawk 09516 <br>(111)-111-1111</p>
        </article>
    </div>`
}