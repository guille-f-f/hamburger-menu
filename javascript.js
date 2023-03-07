const btn = document.querySelector('.btn');
const listHidden = document.querySelector('ul');
const selectorDeSection = [...document.querySelectorAll('.list__link')];

const menuDinamico = () => {
    listHidden.classList.toggle('list-visibility');    
}

const escapeDeMenuDinamico = () => {
    for(let i=0; i<selectorDeSection.length; i++){
        selectorDeSection[i].addEventListener('click', menuDinamico);
    }
}

btn.addEventListener('click', menuDinamico);
escapeDeMenuDinamico()
