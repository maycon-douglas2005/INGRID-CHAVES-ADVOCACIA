let botaoVoltar = document.querySelector('.botaoVoltar')

function voltarTela() {
    window.location.href = "../index.php"
}

botaoVoltar.addEventListener('click', voltarTela)

let botaoAvancar = document.querySelector('.botaoAvancar')

function avancarTela() {
    window.location.href = "contato.php"
}

botaoAvancar.addEventListener('click', avancarTela)