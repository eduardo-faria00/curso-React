================================== CSS global =====================================

# O CSS global é usado para estilizar diversos elementos em comum ou fazer
# um reset no CSS. Utilizamos o arquivo index.css para isso, que está na
# pasta src.

============================== CSS de componente ==================================

# O CSS de componente é usado para um componente específico, geralmente é criado
# um arquivo com o mesmo nome do componente e este é importado no componente. Note
# que este método não é scoped, ou seja o CSS vaza para outros componentes se houver
# uma regra em colisão. O React já cria um exemplo desta técnica com o App.css/js.
# Tente sempre estilizar componentes com classes.

================================== CSS inline =====================================

# O inline style é igual o do CSS. Por meio do atributo style conseguimos aplicar
# regras diretamente em um elemento. Devemos optar por outras maneiras de CSS, o
# inline pode dificultar a manutenção ou deixar o código imprevisível em algumas
# situações. O css inline no react é atribuido como um objeto, ou seja, chave e
# valor. sintaxe: <element style={{...css...}}></element>. Dentro do objeto css,
# as chaves devem ser escritas com camelCase, e os valores devem estar entre aspas.

============================== CSS inline dinâmico ================================

# O CSS inline dinâmico aplica estilo baseado em uma condicional. Vamos inserir no
# atributo um if ternário e dependendo da condição podemos mudar que regras de
# estilo o elemento recebe. 
# sintaxe: <element style={condição ? {css} : {css}}></element>

============================ CSS classes dinâmicas ================================

# Podemos aplicar lógica para mudar a classe de CSS de um elemento, também
# utilizando if ternário. Essa abordagem é mais interessante que o CSS inline, pois
# as classes estarão isoladas no arquivo CSS, resolvendo o problema de organização
# do código.

================================= CSS modules =====================================

# O CSS Modules é um recurso de CSS scoped, ou seja, ele vai ser exclusivo do
# componente. O nome do arquivo é <Componente.module.css>, e também deve ser
# importado no componente.
