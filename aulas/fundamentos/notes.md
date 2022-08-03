# Na maioria dos projetos os componentes ficam em uma pasta
# chamada <components>. Geralmente os arquivos dos componentes
# são nomeados com camel case. No arquivo, criamos uma função
# que contem a lógica e o template desse componente, e ao final
# exportamos esse componente para que ele possa ser reutilizado

====================== Importando componentes ==========================

# A importação é a forma como reutilizamos um componente.
# Utilizamos a sintaxe <import X from './components/X'> onde X
# é o nome do componente. Para colocar o componente importado em
# outro, precisamos colocar ele em forma de tag: <Componente/>
# e então finalizamos o ciclo de importação.
# As importações geralmente são dividas em seções, sobre o que 
# está sendo importado.

=============================== JSX ====================================

# JSX é o HTML do react. As tags HTML são declaradas no return da
# função do componente. Temos algumas diferenças do HTML, por exemplo
# as classes que são definidas como <className>. Isso se da pelas
# instruções semelhantes de JS e HTML, pois o JSX é JS, então algumas
# tags terão nomes diferentes. O JSX pode ter apenas um elemento pai, ou
# seja, todas as tags devem estar envoltas de uma tag pai, geralmente uma
# <div>.

==================== Comentários no componente =========================

# Os comentários podem ser inseridos nos componentes de duas maneiras:
# Na parte da função, onde é executada a lógica, a sintaxe é '//'. No
# JSX é feito com {/* comentario */}. As chaves permitem executar sentenças
# JS dentro do JSX.

====================== Template Expressions ============================

# Template Expressions é o recurso que nos permite executar JS no JSX,
# e também interpolar variáveis. A sintaxe é { codigo JS }. Tudo que
# está entre chaves é processado em JS.

=================== Hierarquia de componente ===========================

# Os componentes criados podem ser reutilizados em vários componentes.
# Componentes importados dentro de outros componentes formam uma hierarquia.

=========================== Eventos ====================================

# Os eventos para o front-end são essenciais. No react os eventos já
# estão 'prontos', podemos utilizar o onClick por exemplo para executar
# uma função de click em algum elemento. Essa função é criada na própria
# função do componente. As funções geralmente tem o padrão handleAlgumaCoisa.

===================== Funções no evento ================================

# Quando as funções do evento são simples, podemos realizar a lógica no
# próprio evento, mas isso torna o código mais 'complicado' por atrelar
# lógica com HTML, mas em algumas situações é aplicável.

================== Funções de renderização =============================

# Podemos criar funções que retornam JSX. Isso serve para criar situações
# que dependem de outras condições, ou seja, o JSX a ser renderizado pode
# variar de acordo com alguma variável, por exemplo.

