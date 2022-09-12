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
