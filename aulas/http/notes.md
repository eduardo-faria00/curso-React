============================ JSON server =================================
# O JSON server é um pacote npm que simula uma api, e isso nos possibilita
# fazer requisições HTTP. Com isso podemos atingir o mesmo resultado que
# teriamos com uma API real, mas sem precisar de uma estrutura no back-end.
# para instalar use o comando <npm i json-server>.
# Para setup inicial, crie uma pasta 'data' na pasta do projeto, e dentro
# de data crie o arquivo 'db.json', que servirá como banco de dados/api.
# Em 'package.json', crie um script "server": "json-server --watch data/db.json"
# Sempre inicie o server antes da aplicação react.

===================== Importancia do useEffect ===========================

# O useEffect faz com que determinada ação seja executada apenas uma vez.
# Isso é interessante pois os componentes estão sempre se re-renderizando,
# mas precisamos ter ações únicas as vezes. O useEffect ainda possui um
# array de dependecias, que deve conter os dados que ativem a execução da
# função de forma automática. Esse hook sempre estará presente nas requisições
# assíncronas

==================== Resgatando dados com React ==========================

# Para trazer os dados vamos ter que utilizar vários recursos, primeiramente
# ter um local para salvá-los (useState), renderizar a chamada da API apenas
# uma vez (useEffect), e um meio de fazer requisição assíncrona (Fetch API)

==================== Adicionando dados com React =========================

# Para adicionar um item vamos precisar resgatar os dados do form com o
# useState, reunir eles em uma função após o submit e enviar um request
# POST para a nossa API. O processo é bem parecido com o de resgate de dados
# mas agora estamos enviando dados.

================== Carregamento dinâmico de dados ========================

# Se a requisição foi feita com sucesso, podemos adicionar o item à lista
# após o request, isso torna nossa aplicação mais performática. Utilizaremos
# o set do useState para isso.

====================== Custom hook para fetch ============================

# É normal dividir funções que podem ser reaproveitadas em hooks. Esta técnica
# é chamada de custom hook, e vamos criar um para o resgate de dados. Os hooks
# geralmente ficam na pasta hooks. Devemos utilizar o padrão useName. Basicamente
# criamos uma função e exportamos ela. A pasta hooks deve ser criada dentro de 
# src.

# Podemos utilizar o mesmo hook para incluir uma etapa de POST. Vamos criar
# um novo useEffect que mapeia uma outra mudança de estado, após ela ocorrer
# executamos a adição do produto. Obs: nem sempre reutilizar um hook é a
# melhor estratégia.

========================= Estado de loading ==============================

# Quando fizermos requisições para API's é normal que haja um intervalo de
# loading entre a requisição e o recebimento da reposta. Podemos fazer isso
# no nosso hook também. Identificar quando começa e termina este estado.

# Podemos bloquear ações indevidas em outras requests também, como no POST
# Uma ação interessante é remover a ação de adionar outro item enquanto o 
# request ainda não finalizou.

=========================== Tratando erros ===============================

# Podemos tratar os erros das requisições por meio de um try catch. Além de
# pegar os dados do erro, também podemos alterar um state para imprimir um
# elemento se algo der errado. Desta maneira conseguimos prever vários
# cenários (resgatados, carregamento e erro).

