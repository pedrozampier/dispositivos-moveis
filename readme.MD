# Descrição do App

Este aplicativo foi desenvolvido como parte de um projeto acadêmico para a disciplina de Desenvolvimento Mobile. Ele tem como objetivo trazer organização na rotina de tarefas do usuário, com opções de cadastro de atividades junto de seus prazos de entrega.

# Comandos

Para instalar o projeto em sua máquina utilize:

`git clone https://github.com/pedrozampier/dispositivos-moveis.git`

Para instalar as dependências do projeto rode:

`yarn i`

Após instalar as dependências inicie o projeto com:

`yarn start`

Para rodar os testes unitários rode:

`yarn test:unit`

Para rodar os testes E2E rode:

`yarn test:e2e`

## Diferença entre testes unitários e testes E2E (End to End)

- [Testes Unitários]

Testam a menor parte possível do código de forma isolada, como uma única função ou um componente. O objetivo é garantir que essa pequena peça funcione corretamente por si só, sem depender do resto do aplicativo. Eles são rápidos e ajudam a encontrar erros na lógica interna do código.

- [Testes End to End]

Testam um fluxo completo do usuário na aplicação, do início ao fim. Eles simulam a jornada real do usuário, como fazer login, navegar por várias telas e completar uma ação. O objetivo é garantir que todas as partes do sistema (interface, banco de dados, rede) funcionem bem juntas.