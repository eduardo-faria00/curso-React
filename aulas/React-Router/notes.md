================================== O que é React Router ==================================

# React Router é um dos pacotes mais utilizados para criar uma estrutura de rotas em

# aplicações react. Ou seja, permite que SPAs tenham múltiplas páginas. É preciso

# instalar o pacote no projeto. A configuração e utilização é simples. Também possui

# funções como: Redirect, Nested Routes, Not Found Routes e outros.

============================= Configurando React Router ==================================

# Para configurar o React Router vamos ter que importar três elementos de react-router-dom.

# BrowserRouter: Define a área do nosso app que vai trocar as páginas.

# Routes: Define as rotas

# Route: Um elemento deste para cada rota, configurar com path e componentes da rota.

# Sintaxe: <Route path="/rota" element={<página que vai ser exibida nessa rota />} />.

# Para criar links para as páginas vamos precisar utilizar o Link do React Router. No

# Link configuramos o parâmetro to, que recebe a URL/path para onde quem clicar no link

# será redirecionado. Vamos criar um componente navBar para isso

================================= Carregando dados =======================================

# Vamos exercitar novamente o carregamento de dados com nosso hook useFetch, depois

# podemos utilizá-lo para o carregamento de dados individuais. Utilizaremos o hook

# igual ao da última seção e vamos imprimir os produtos na home da mesma forma.

=================================== Rotas dinamicas ======================================

# Para criar uma rota dinamica vamos precisar definir uma nova Route em App.js, que deve

# ter o padrão de /products/:id, onde id é o dado dinâmico, ou seja, podemos ter qualquer

# valor. Na página podemos utilizar o hook useParams para resgatar esta informação.

============================= Carregando dados individuais ===============================

# Vamos utilizar o id recebido para formar a nova url, e por fim podemos utilizar o hook

# useFetch para trazer o item e fazermos a validação e impressão do mesmo no JSX.

===================================== Nested route =======================================

# As nested routes indicam URLs mais complexas, como /products/:id/something. Neste caso

# vamos precisar criar um componente que corresponda com o padrão indicado e também a

# URL em App.js. Na nested route teremos o acesso ao parametro da URL também.

=================================== Not found route ======================================

# Podemos criar uma página 404 facilmente, basta criarmos o componente da página e, no
# arquivo App.js definir um path como "*". Desta maneira, qualquer rota que não exista cairá
# neste componente.

===================================== Link ativo =========================================

# Para ter fácil acesso a uma modificação para os links ativos vamos trocar o link pelo
# NavLink. Neste elemento temos acesso a um valor chamado isActive, ou seja, uma classe
# "active" é adicionada ao elemento <a> se a rota atual for igual a que está no atributo 
# "to" do <NavLink>. A classe active pode ser usada para adicionar estilos e identificar
# qual rota está ativa no momento.

==================================== Search Params =======================================

# Search Params é um recurso que permite obter o que vem na URL em forma de parâmetro.
# Ex: produtos?q=camisa. Utilizamos o hook useSearchParams para obtê-los. Com este recurso
# fica simples fazer uma funcionalidade de busca no sistema.

======================================= Redirect =========================================

# Eventualmente precisamos de um redirecionamento de páginas, por exemplo: uma página
# antiga dos sistema responde agora a uma nova URL. Para isso vamos criar a rota com
# Route normalmente, mas em element vamos utilizar o componente Navigate com um to que
# vai para a rota correta.