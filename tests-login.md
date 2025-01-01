Testes de login social

================
1° teste:
Sem adapter
Sem session
Sem callback

O que acontece:

Github
Faz o login normal
As info de user { name, email, image } e expires são retornadas normalmente no front.
A session não é criada.
Nenhuma info é armazenada no banco

Google
Faz o login normal
As info de user { name, email, image } e expires são retornadas normalmente no front, mas a img não carrega.
A session não é criada.
Nenhuma info é armazenada no banco

================
2° teste:
Sem adapter
Sem session
Com callbabk

O que acontece:

Github
Faz o login normal
As info de user { name, email, image }, expires e token { ...token } são retornadas normalmente no front.
A session não é criada.
Nenhuma info é armazenada no banco

================
3° teste:
Com adapter
Sem session
Com callbabk

O que acontece:

Github
Não faz o login

================
4° teste:
Com adapter
Com session
Sem callbabk

O que acontece:

Github
Faz o login
As info de user { name, email } e expires são retornadas no front
A session não é criada.
O account e o user são criados no banco.

=================
4° teste:
Com adapter
Com session
Com callbabk

O que acontece:

Github
Faz o login
As info de user { name, email }, expires e token { ...token } são retornadas no front
A session não é criada.
O account e o user são criados no banco.
