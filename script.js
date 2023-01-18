
//variaveis
const btnMobile = document.getElementById('btn-mobile');

//funcoes

function toggleMenu(event){
    if(event.type === 'touchstart') event.preventDefault();
    const nav = document.getElementById('nav');
    nav.classList.toggle('active')


}


//eventos
btnMobile.addEventListener('click', toggleMenu)
btnMobile.addEventListener('touchstart', toggleMenu)