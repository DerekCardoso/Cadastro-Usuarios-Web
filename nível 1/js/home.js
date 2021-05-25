let userLogado = JSON.parse(localStorage.getItem('userLogado'))

let logado = document.querySelector('#logado')

logado.innerHTML = `Olá, ${userLogado.nome}`

if(localStorage.getItem('token') == null){
    alert('Você precisa estar logado para acessar essa página')
    window.location.href = 'index.html'
}

function sair() {
    window.location.href = 'index.html'
}

function EditaRegistro() {
   
}

function remover() {
    localStorage.clear('userlogado')
    window.location.href = 'index.html'
}
    
