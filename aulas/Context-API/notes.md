================================= Context API =================================

# É um recurso que facilita o compartilhamento de um estado entre componentes,

# ou seja, quando precisamos de dados 'globais', provavelmente precisamos

# utilizar o Context. O Context precisa encapsular os componentes que receberão

# seus valores, geralmente colocamos no App.js ou index.js. Os contextos

# geralmente ficam na pasta context.

=============================== Criando Contexto ==============================

# Primeiramente vamos ter que criar o Context, o arquivo deve sempre ter a

# primeira letra maiúcula no nome, e geralmente termina em Context: SomeContext.js

# A convenção é deixar n pasta context em src. Onde formos utilizar o valor do

# contexto, o arquivo deve ser importado.

=============================== Criando Provider ==============================

# O provider vai delimitar onde o contexto é utilizado. Vamos criar uma espécie

# de componente com a prop children, e este provider deve encapsular os demais

# componentes em que precisamos consultar ou alterar o valor. Geralmente ele fica

# em App.js, ou index.js. Agora poderemos compartilhar o valor do contexto em todos

# os componentes.

============================== Alterando o contexto ===========================

# Para alterar o valor do contexto precisamos criar um componente que utilize a
# função de mudança de contexto. Esta mudança ocorrerá no context e poderá ser
# consumida por todos os componentes que recebem o contexto.

================================ Context com hook =============================

# Podemos criar um hook para utilizar o contexto, isso nos dá algumas vantagens:
# Não precisamos importar o useContext em todos os lugares que vamos usar o
# contexto, apenas o hook, e temos um espaço para fazer uma validação de contexto.

================================ Contexto complexo ============================

# Contextos mais complexos podem ter variações no comportamento. Para isso, vamos
# utilizar um hook chamado useReducer, que é como um useState, mas para controle
# de dados complexos. No reducer teremos diferentes ações com um switch, e na
# aplicação vamos consumir o estado atual do dado que está no reducer.

