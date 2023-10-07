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