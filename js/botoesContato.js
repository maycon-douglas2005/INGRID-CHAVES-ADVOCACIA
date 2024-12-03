let botaoVoltar = document.querySelector('.botaoVoltar')

function voltarPagina() {
    window.location.href = "especialidades.php"
}

botaoVoltar.addEventListener('click', voltarPagina)