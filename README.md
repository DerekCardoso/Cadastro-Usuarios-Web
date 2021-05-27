# Cadastro-Usuarios-Web💻

O desafio proposto foi criar um Cadastro de usuário Web onde o usuário cadastra <br />

📜Dados do cadastro📜:<br />
- ○ Nome <br />
- ○ Email <br />
- ○ Endereço do usuário <br />
    - ■ País <br />
    - ■ Estado <br />
    - ■ Município <br />
    - ■ CEP <br />
    - ■ Rua <br />
    - ■ Número <br />
    - ■ Complemento <br />
- ○ CPF <br />
- ○ PIS <br />
- ○ Senha <br />

E enquanto ele não estiver cadastrado, na tela de Login<br />
Exibir "Olá, visitante” e Após o login "Olá {usuário}.

Também foi proposto que o usuário conseguisse fazer o Logout,<br />
editar as informações de login e remover o seu perfil, fazendo com que <br />
ele deslogue automaticamente do perfil.

## 💻Desenvolvimento💻 <br />

Para desenvolver esse projeto foram usados HTML5, CSS3, Bootstrap, Javascript, JQuery <br />
sem nenhuma linguagem backend e a API ViaCEP.<br />
- HTML, CSS: para fazer toda a parte visual do site assim como sua responsividade,<br />
que foi implementada através de "media query".
- Bootstrap: foi usado para criar o botão modal de editar, assim, sem a necessidade de <br />
criar uma nova página para a edição do cadastro do usuário.
- Javascript: utilizado para as validações dos campos de Nome, E-mail, CPF, PIS, CEP,<br />
e campos de senha que devem ser iguais.
- JQuery: Foi utilizado para o cadastro, para que conseguisse fazer as validações.
- ViaCEP: API dos correios para achar o endereço através do CEP da pessoa, ele só acha CEP <br />
do Brasil e por isso, optei por tirar o campo "País", já que a API foi uma implementação um pouco "restrita".
<br />

Foram criadas páginas de Login, Cadastro e Home, seguindo o que foi proposto no projeto<br />
na página de Login temos uma mensagem dizendo *"Olá, Visitante"*, essa tela sempre será mostrada assim<br />
e após p usuário logar no sistema, no canto superior direito exibirá a mensagem *"Olá, {nome do user}*,<br />
com os respectivos botões "Editar Perfil" e "Logout".
o JS busca o nome do usuário que está logado na função "userLogado" e joga no HTML através do innerHTML.
<br />

Optei por armazenar os dados do usuário cadastrado no LocalStorage, e resgata-los através do JS,<br />
foi uma solução para me desafiar nesse nível e também não precisar usar o back-end.
🚀🚀🚀🚀
