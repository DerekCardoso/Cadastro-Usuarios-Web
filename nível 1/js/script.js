let nome = document.querySelector('#username');
let labelnome = document.querySelector('#labelname');
let validnome = false;

let cpf = document.querySelector('#cpf');
let labelcpf= document.querySelector('#labelcpf');
let validcpf = false;

let pis = document.querySelector('#pis');
let labelpis = document.querySelector('#labelpis');
let validpis = false;

let cep = document.querySelector('#cep');
let labelcep = document.querySelector('#labelcep');
let validcep = false;

let logradouro = document.querySelector('#logradouro');
let labelrua = document.querySelector('#labelrua');
let validrua = false;

let numero = document.querySelector('#numero');
let labelnumero = document.querySelector('#labelnumero');
let validnumero = false;

let complemento = document.querySelector('#complemento');
let labelcomplemento = document.querySelector('#labelcomplemento');
let validcomplemento = false;

let bairro = document.querySelector('#bairro');
let labelbairro = document.querySelector('#labelbairro');
let validbairro = false;

let estado = document.querySelector('#estado');
let labelestado = document.querySelector('#labelestado');
let validestado = false;

let password = document.querySelector('#password');
let labelpassword = document.querySelector('#labelpassword');
let validpassword = false;

let passconfirmation = document.querySelector('#passconfirmation');
let labelpassconfirmation = document.querySelector('#labelpassconfirmation');
let validpassconfirmation = false;

cpf.addEventListener('keyup', () => {
   if(cpf.value.length < 11) {
    labelcpf.setAttribute('style', 'color:red')
    labelcpf.innerHTML = 'CPF *insira os 11 caracteres'
    cpf.setAttribute = ('style', 'border-color: red')
   } else {
    labelcpf.setAttribute('style', 'color:green')
    labelcpf.innerHTML = 'CPF'
   }
});

pis.addEventListener('keyup', () => {
   if(pis.value.length < 11) {
    labelpis.setAttribute('style', 'color:red')
    labelpis.innerHTML = 'PIS *insira os 11 caracteres'
    pis.setAttribute = ('style', 'border-color: red')
   } else {
    labelpis.setAttribute('style', 'color:green')
    labelpis.innerHTML = 'PIS'
   }
});

cep.addEventListener('keyup', () => {
   if(cep.value.length <= 7) {
    labelcep.setAttribute('style', 'color:red')
    labelcep.innerHTML = 'CEP *insira os 8 caracteres'
    cep.setAttribute = ('style', 'border-color: red')
   } else {
    labelcep.setAttribute('style', 'color:green')
    labelcep.innerHTML = 'CEP'
   }
});

password.addEventListener('keyup', () => {
   if(password.value.length <= 5) {
    labelpassword.setAttribute('style', 'color:red')
    labelpassword.innerHTML = 'Senha *insira 6 caracteres, entre letras maiúsculas e um número '
    password.setAttribute = ('style', 'border-color: red')
   } else {
    labelpassword.setAttribute('style', 'color:green')
    labelpassword.innerHTML = 'Senha'
   }
});

passconfirmation.addEventListener('keyup', () => {
   if(password.value != passconfirmation.value) {
    labelpassconfirmation.setAttribute('style', 'color:red')
    labelpassconfirmation.innerHTML = 'Confirmar senha *As senhas não conferem'
    passconfirmation.setAttribute = ('style', 'border-color: red')
   } else {
    labelpassconfirmation.setAttribute('style', 'color:green')
    labelpassconfirmation.innerHTML = 'Confirmar Senha'
   }
});

// mapeamento de todas as validações do projeto
class Validator {

    constructor() {
      this.validations = [
        'data-required',
        'data-min-length',
        'data-max-length',
        'data-email-validate',
        'data-only-letters',
        'data-equal',
        'data-password-validate',
        ]
    }

    // iniciar a validação de todos os campos
    validate(form) {

        // limpa todas as validações
        let currentValidations = document.querySelectorAll('form .error-validation');

        if(currentValidations.length) {
            this.cleanValidations(currentValidations);
    }

        // pegar todos os inputs
        let inputs = form.getElementsByTagName('input');
      

        //HTMLColletion para array
        let inputsArray = [...inputs];


        //loop nos inputs e validação ao que for encontrado
        inputsArray.forEach(function(input) {

            // loop em todas as validações
            for(let i = 0; this.validations.length > i; i++) {
                // verifica se a validação atual existe no input
                if(input.getAttribute(this.validations[i]) != null) {

                    //data-min-length -> minlength
                    //limpando string para virar método
                    let method = this.validations[i].replace('data-', '').replace('-','');
                
                    //valor input
                    let value = input.getAttribute(this.validations[i]);

                    //invocar metodo
                    this[method](input, value);
                }
            }
        }, this);

    }

// verifica se o input tem o número minimo de caracteres.
minlength(input, minValue) {

    let inputLength = input.value.length;

    let errorMessage = `O campo precisa ter ${minValue} caracteres`;

    if(inputLength < minValue) {
       this.printMessage(input, errorMessage);
   }
}

// método para validar se passou do máximo de caracteres
maxlength(input, maxValue) {

    let inputLength = input.value.length;

    let errorMessage = `O campo precisa ter menos que ${maxValue} caracteres`;

    if(inputLength > maxValue) {
      this.printMessage(input, errorMessage);
    }

  }

// validação de e-mails
emailvalidate(input) {

    let re = /\S+@\S+\.\S+/;

    let email = input.value;

    let errorMessage = `Insira um e-mail no padrão email@email.com`;

    if(!re.test(email)) {
      this.printMessage(input, errorMessage);
    }
}

//validação de campo com apenas letras
onlyletters(input) {

    let re = /^[A-Za-z]+$/;;

    let inputValue = input.value;

    let errorMessage = `Este campo não aceita números nem caracteres especiais`;

    if(!re.test(inputValue)) {
      this.printMessage(input, errorMessage);
    }

  }

// verifica se o input é requerido
required(input) {
    
    let inputValue = input.value;

    if(inputValue === '' ) {
        let errorMessage = `Este campo é obrigatório`

        this.printMessage(input, errorMessage);
    }

}

// verifica se os campos de senha são iguais
equal(input, inputName) {

    let inputToCompare = document.getElementsByName(inputName)[0];

    let errorMessage = `Este campo precisa estar igual ao ${inputName}`;

    if(input.value != inputToCompare.value) {
      this.printMessage(input, errorMessage);
    }
  }

  //validação do campo senha
passwordvalidate(input) {

    //transformar string em array
    let charArr = input.value.split("");

    let uppercases = 0;
    let numbers = 0;

    for(let i = 0; charArr.length > i; i++) {
        if(charArr[i] === charArr[i].toUpperCase() && isNaN(parseInt(charArr[i]))) {
            uppercases++;
        }else if (isNaN(parseInt(charArr[i]))) {
            numbers++
        }
    }

    if(uppercases === 0 || numbers === 0){
        let errorMessage = `A senha precisa de um caractere maiúsculo e um número`;
    
        this.printMessage(input, errorMessage);
    }
}

// imprimir mensagens de erro na tela
printMessage(input, msg){

    // quantidade de erros que o input possui
    let errorsQty = input.parentNode.querySelector('.error-validation');

    if (errorsQty === null) {
        let template = document.querySelector('.error-validation').cloneNode(true);

        template.textContent = msg;

        let inputParent = input.parentNode;

        template.classList.remove('template');

        inputParent.appendChild(template);
    }

}

// remove todas as validações para fazer a checagem novamente
cleanValidations(validations) {
    validations.forEach(el => el.remove());
  }

}

let form = document.getElementById("register-form");
let submit = document.getElementById("btn-submit");


let validator = new Validator();
//evento que dispara as validações no HTML
submit.addEventListener('click', function(e) {

    e.preventDefault();


    validator.validate(form); //manda a validação do formulário

});

//armazenar valores usuário
function cadastraUsuario() {
    let nome = document.getElementById('username');
    let sobrenome = document.getElementById('lastname');
    let email = document.getElementById('email');
    let cpf = document.getElementById('cpf');
    let pis = document.getElementById('pis');
    let cep = document.getElementById('cep');
    let rua = document.getElementById('logradouro');
    let numero = document.getElementById('numero');
    let complemento = document.getElementById('complemento');
    let bairro = document.getElementById('bairro');
    let estado = document.getElementById('estado');
    let password= document.getElementById('password');

    let dadosUser = JSON.parse(localStorage.getItem('dadosUser') || '[]');

    dadosUser.push(
        {
            nomeCad: nome.value,
            lastCad: sobrenome.value,
            emailCad: email.value,
            cpfCad: cpf.value,
            pisCad: pis.value,
            cepCad: cep.value,
            ruaCad: rua.value,
            numCad: numero.value,
            compCad: complemento.value,
            bairroCad: bairro.value,
            estCad: estado.value,
            senhaCad: password.value
        }
    )

    localStorage.setItem('dadosUser', JSON.stringify(dadosUser));

        window.location.href = 'index.html';
}
