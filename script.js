
//variaveis
const btnMobile = document.getElementById('btn-mobile');

//funcoes

function toggleMenu(){
    const nav = document.getElementById('nav');
    nav.classList.toggle('active')


}


//eventos
btnMobile.addEventListener('click', toggleMenu)