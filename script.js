
//variaveis
const btnMobile = document.getElementById('btn-mobile');

//funcoes

function toggleMenu(event){
    if(event.type === 'touchstart') event.preventDefault();
    const nav = document.getElementById('nav');
    nav.classList.toggle('active');

    // a constante abaixo faz verificar se possui uma classe active e retorna true ou false
    const active = nav.classList.contains('active')
    event.currentTarget.setAttribute('aria-expanded', active);

    if(active) {
        event.currentTarget.setAttribute('aria-label', 'Fechar Menu');
    } else{
        event.currentTarget.setAttribute('aria-label', 'Abrir Menu');

    }
}

//eventos
btnMobile.addEventListener('click', toggleMenu)
btnMobile.addEventListener('touchstart', toggleMenu)