function escrevendoLetra () {
    const titulo = document.querySelector('.digitando')

    function ativaLetra(elemento) {
        const arrText = elemento.innerHTML.split('')
        elemento.innerHTML = ''
        arrText.forEach((letra, i)=>{
            setTimeout(()=>{
                elemento.innerHTML += letra
            }, 75 * i)
        }) 
    }

    ativaLetra(titulo)
}

escrevendoLetra();

const ativaMenu = document.querySelector('.fa-bars')
const navMenu = document.querySelector('header .navegacao-primaria')

ativaMenu.addEventListener('click', ()=>{
    ativaMenu.classList.toggle('fa-x')
    navMenu.classList.toggle('ativado')
})