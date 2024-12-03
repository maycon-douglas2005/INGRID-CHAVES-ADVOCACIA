let botao = document.querySelector('.botao')

function trocarTela() {
   window.location.href = "view/especialidades.php"
}

botao.addEventListener('click', trocarTela)