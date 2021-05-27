# Cadastro-Usuarios-Web💻

O desafio proposto foi, criar um Cadastro de usuário Web <br />
onde o usuário cadastra <br />

Dados do cadastro:<br />
  ○ Nome <br />
  ○ Email <br />
  ○ Endereço do usuário <br />
      ■ País <br />
      ■ Estado <br />
      ■ Município <br />
      ■ CEP <br />
      ■ Rua <br />
      ■ Número <br />
      ■ Complemento <br />
  ○ CPF <br />
  ○ PIS <br />
  ○ Senha <br />

E enquanto ele não estiver cadastrado, na tela de Login<br />
Exibir "Olá, Visitante" e Após o login "Olá {usuário}.

Também foi proposto que o usuário conseguisse fazer o Logout,<br />
editar as informações de login e remover o seu perfil, fazendo com que <br />
ele deslogue automáticamente do perfil.

## Desenvolvimento <br />

Para desenvolver esse projeto foram usados HTML5, CSS3, Bootstrap, Javascript, JQuery <br />
sem nenhuma linguagem backend.<br />
Optei por armazenar os dados no LocalStorage, e resgata-los através do JS.<br />
<br />
Foram criadas páginas de Login, Cadastro e Home, Seguindo o que foi proposto no projeto<br />
na página de Login temos uma mensagem dizendo "Olá, Visitante" e na página de login<br /> 
o JS busca o nome do usuário que está logado na função "userLogado" e joga no HTML através do innerHTML.
