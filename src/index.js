import "./index.scss";

window.addEventListener('scroll', () => {
    let nav = document.querySelector('.grid-object-1');
    let windowPosition = window.scrollY > 20;
    
    nav.classList.toggle('scroll-nav-active', windowPosition);
    
})