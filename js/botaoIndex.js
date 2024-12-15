let botao = document.querySelector('.botao')

function trocarTela() {
   window.location.href = "view/contato.php"
}

botao.addEventListener('click', trocarTela)