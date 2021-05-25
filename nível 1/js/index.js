let btn = document.querySelector('.fa-eye')

btn.addEventListener('click', ()=>{
  let inputSenha = document.querySelector('#senha')
  
  if(inputSenha.getAttribute('type') == 'password'){
    inputSenha.setAttribute('type', 'text')
  } else {
    inputSenha.setAttribute('type', 'password')
  }
})

function entrar(){
  let usuario = document.querySelector('#usuario')
  let userLabel = document.querySelector('#userLabel')
  
  let senha = document.querySelector('#senha')
  let senhaLabel = document.querySelector('#senhaLabel')
  
  let msgError = document.querySelector('#msgError')
  let listaUser = []
  
    let userValid = {
            nome: '',
            last: '',
            email: '',
            cpf:'',
            pis:'',
            cep:'',
            rua:'',
            num: '',
            comp: '',
            bairro: '',
            est: '',
            senha: ''
    }
  
    listaUser = JSON.parse(localStorage.getItem('dadosUser'))
  
    listaUser.forEach((item) => {
      if(usuario.value == item.cpfCad && senha.value == item.senhaCad){
         
                userValid = {
                    nome: item.nomeCad,
                    last: item.lastCad,
                    email: item.emailCad,
                    cpf: item.cpfCad,
                    pis:item.pisCad,
                    cep:item.cepCad,
                    rua:item.ruaCad,
                    num: item.numCad,
                    comp: item.compCad,
                    bairro: item.bairroCad,
                    est: item.estCad,
                    senha: item.senhaCad
                }

        }
    })

    if(usuario.value == userValid.cpf || userValid.pis && senha.value == userValid.senha){
        window.location.href = 'home.html'

        let token = Math.random().toString(16).substr(2)
        localStorage.setItem('token', token)

        localStorage.setItem('userLogado', JSON.stringify(userValid))
    } else {
        userLabel.setAttribute('style', 'color: red')
        usuario.setAttribute('style', 'border-color: red')
        senhaLabel.setAttribute('style', 'color: red')
        senha.setAttribute('style', 'border-color: red')
        msgError.setAttribute('style', 'display: block')
        msgError.innerHTML = 'Usuário ou senha incorretos'
        usuario.focus()
  }
  
}