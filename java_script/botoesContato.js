let botaoVoltar = document.querySelector('.botaoVoltar')

function voltarPagina() {
    window.location.href = "../html/especialidades.php"
}

botaoVoltar.addEventListener('click', voltarPagina)