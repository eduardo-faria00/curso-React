=========================== Imagens em React =============================

# As imagens públicas do nosso projeto podem ficar na pasta public,
# de lá elas podem ser chamadas pelas tags img diretamente pelo
# /nome.jpg, pois a pasta publica fica linkada com o src das imagens

# O padrão mais utilizado para imagens é colocar em uma pasta chamada
# assets, em src. Para usar uma imagem de assets, devemos importar as
# imagens, e o src é dinamico com o nome das importações

================================ Hooks ===================================

# São recursos do React que tem diversas funções, como guardar e alterar
# o estado de algum dado na nossa aplicação. Todos os hooks começam com
# 'use', por exemplo 'useState'. Podemos criar nosso hooks, isso é 
# chamado de 'custom hook'. Os hooks precisam ser importados.

# O hook de 'useState' é utilizado para gerenciar o estado de algum dado,
# variáveis não funcionam corretamente, o componente não re-renderiza, o
# useState re-renderiza o componente sempre que o estado do dado muda.
# Para guardar o dado definimos o nome da variável e para alterar utilizamos
# 'setNome', onde 'nome' é nome do nosso dado.

======================== Renderização de lista ===========================

# Uma ação bem comum é renderizar listas de dados no template. Fazemos 
# isso com os dados com tipo de array. Utilizamos o método map para nos
# auxiliar. Além dos dados, podemos inserir JSX em cada iteração.

# Iterar listas sem a propriedade key nos gera um warning. O React precisa
# de uma chave única em cada um dos item iterados, isso serve para
# ajuda-lo na renderização do componente. Geralmente teremos um array de
# objetos e podemos colocar hey como alguma chave única, como id.
# Em último caso devemos utilizar o index do método map.

============================ Previous State ==============================

# Previous state é um recurso que nos permite pegar o dado em seu valor
# original dentro de um set de dado. Isso é muito utilizado para modificar
# listas, pois temos o valor antigo e transformamos em um valor novo.
# O primeiro argumento de um set sempre será o previous state.

======================= Renderização condicional =========================

# Renderização condicional é quando imprimimos uma parte do template
# baseado em aluma condição, ou seja, utilizando if. Isso é interessante
# em situações como: usuário autenticado / não autenticado. Pode ser
# usado com if/else, && para checar se true ou false, e expressão ternária
# (condição ? (JSX 1) : (JSX 2)).
# && = if
# expressão ternária = if/else

================================= Props ==================================

# Props nos permite acessar valores de um componente pai para um componente
# filho. Isso será muito útil quando dados forem carregados via bacnco de 
# dados por exemplo. As props vem em um objeto no argumento da função do
# componente.

======================= Desestruturação de props =========================

# É muito comum passar mais de uma propriedade para um componente, para
# facilitar isso, o react nos permite desestruturar as propriedades que
# chegam, com o recurso de destructuring. Se temos duas props: name e age
# podemos fazer function MyComponent({name, age}), assim não precisamos
# utilizar o props.algumaCoisa.

===================== Reutilização de componentes ========================

# Com props a reutilização de componentes começa a fazer mais sentido.
# Se temos dados de 1000 carros, podemos reutilizar o nosso CarDetails
# 1000 vezes. Isso torna nosso código mais padronizado, facilitando a 
# manutenção.

======================== Reutilização com loop ===========================

# Os arrays de dados podem ter muitos itens, então é correto utilizar
# uma estrutura de loo (map) para a sua exibição. Com isso conseguimos
# conciliar renderização de listas, reaproveitamento de componentes e
# e props.

============================== Fragments =================================

# Os React Fragments são interessantes para quando precisamos ter mais de
# um elemento pai em um componente. Criamos um tag vazia <>...</> que serve
# como elemento pai, não alterando a estrutura do HMTL com div. Assim, as
# tags html inseridas entre os React Fragments tornam-se filhas do componente
# onde foram inseridas.

============================ Children prop ===============================

# Children prop é um recurso utilizado para quando um componente precisa
# ter JSX dentro dele, porém esse JSX vem do componente pai. Então o 
# componente age como um container, abraçando estes elementos. Children
# é considerada uma propriedade do componente.

========================== Funções em props ==============================

# As funções podem ser passadas para as props normalmente, basta criar
# a função no componente pai e enviar como prop para o componente. No
# componente filho ela pode ser executada por um evento por exemplo.

============================= State lift =================================

# State lift ou elevação de state é quando um valor é elevado do componente
# filho para o componente pai. Geralmente temos um componente que usa o state
# e um componente que altera o state, então precisamos passar o state para o
# componente pai fazer a ponte entre os outros componentes.

