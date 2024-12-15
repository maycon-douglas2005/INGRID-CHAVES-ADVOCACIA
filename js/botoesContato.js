let botaoVoltar = document.querySelector('.botaoVoltar')

function voltarPagina() {
    window.location.href = "../index.php"
}

botaoVoltar.addEventListener('click', voltarPagina)