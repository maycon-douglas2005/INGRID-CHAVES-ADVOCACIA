let botaoVoltar = document.querySelector('.botaoVoltar')

function voltarTela() {
    window.location.href = "../html/index.php"
}

botaoVoltar.addEventListener('click', voltarTela)

let botaoAvancar = document.querySelector('.botaoAvancar')

function avancarTela() {
    window.location.href = "../html/contato.php"
}

botaoAvancar.addEventListener('click', avancarTela)