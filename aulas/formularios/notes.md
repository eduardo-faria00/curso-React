========================== Criando formularios ===========================

# No react também vamos utilizar a tag <form> para formulários. As labels
# dos inputs contém o atributo htmlFor, que deve ter o valor do name do
# input. Não utilizamos action, pois o processamento será feito de forma
# assíncrona.

# Em react um padrão comum é a tag <label> envolvendo o <input>, isso faz
# com que o atributo for se torne opcional, simplificando nossa estrutura
# HTML sem perder a semântica.

========================== Manipulando valores ===========================

# Para manipular os valores dos inputs vamos utilizar o hook useState, ou
# seja, podemos armazanar na variável e utilizar o set para alterar o valor.
# Vamos criar uma função para alterar o valor no evento onChange, deixando
# nosso código fácil de trabalhar nas próximas etapas, como envio dos dados
# para DB e validação.

# Quando temos vários inputs podemos realizar a manipulação de forma mais
# simples usando um função inline no onChange, que altera o valor do state
# com o método set, da mesma forma que a função isolada.

========================== Envio de formulário ===========================

# Para enviar um form vamos utilizar o evento onSubmit. Ele chamará uma
# função, e nesta devemos lembrar de parar a submissão com preventDefault.
# Nesta etapa podemos realizar validações, envio de form para o servidor,
# reset de form e  outras ações.

=========================== Controlled inputs ============================

# Controlled inputs é um recurso que nos permite mais flexibilidade nos
# forms de react. Precisamos apenas igualar o valor ao state, um uso muito
# comum: formurios de edição, que os dados vem do back-end, conseguimos
# preencher input mais facilmente.

=========================== Controlled inputs ============================

# Com o controller inputs, para limpar o input basta atribuir um valor
# de uma string vazia as states. Isso será feito após o envio, em formulários
# que o usuário precisa preencher novamente.

=========================== TextArea no React ============================

# O textarea pode ser considerado um input de texto normal. Utilizaremos
# o value para alterar o state inicial e o evento onChange para modificar
# o valor do state.

============================ Select no React =============================

# O select tsmbém será muito semelhante aos outros inputs. Quando temos a
# alteração de um valor, o evento onChange pode captar isso. O value também
# pode atribuir qual option estará selecionada.

