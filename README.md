# Sistema de Controle de Finanças

Trabalho da disciplina engenharia de software 2019/2 - UFMG

[Gráfico de Burndown](https://docs.google.com/spreadsheets/d/1KRXindVpbPPlh4wqAOevZejgXKAlSzO3aCgjvkosT2w/edit?usp=sharing)

[Apuração das Horas Trabalhadas](https://docs.google.com/spreadsheets/d/16JtWW3AM-SDiT9QmpeOsUrTl0WN9IUOz0tFlID1_4I8/edit?usp=sharing)

## Estórias de usuário

### Cadastro e login de usuário (E1) - 5 pontos

Eu como morador gostaria de me cadastrar e fazer login no sistema para poder gerenciar as finanças da(s) minha(s) casa(s).

Confirmação:

- O usuário deve poder visualizar e editar o seu perfil
- O usuário pode visualizar os perfis dos outros moradores da casa
- No perfil do usuário deve conter o valor do débito dele
- No cadastro, o usuário deve fornecer a sua renda mensal

### Cadastro de casa (E2) - 3 pontos

Eu como administrador da casa gostaria de cadastrar uma casa para gerenciar as finanças dela.

Confirmação:

- Um usuário pode ter várias casas cadastradas
- Configurar a data de vencimento dos pagamentos

### Inclusão de outros moradores na casa (E3) - 3 pontos

Eu como administrador da casa gostaria de incluir outros moradores na minha casa para dividir as despesas com eles.

Confirmação:

- Também deve ser possível excluir morador da casa

### Inclusão de despesa fixa (E4) - 8 pontos

Eu como administrador da casa gostaria de incluir uma despesa fixa na casa para que eu possa fazer o controle dela e dividir o seu valor com os outros moradores.

Confirmação:

- Cada despesa deve ter uma categoria
- As instâncias das despesas recorrentes devem aparecer no histórico da casa.
- As despesas recorrentes devem permanecer cadastradas para todos os meses (ou por um período definido pelo administrador).
- Deve ser possível editar despesa
- Deve ser possível excluir despesa

### Inclusão de despesa única (E5) - 3 pontos

Eu como administrador da casa gostaria de incluir uma despesa única na casa para que eu possa fazer o controle dela e dividir o seu valor com os outros moradores.

Confirmação:

- Cada despesa deve ter uma categoria
- As despesas únicas devem aparecer no histórico da casa.
- Deve ser possível editar despesa
- Deve ser possível excluir despesa

### Histórico de despesas (E6) - 3 pontos

Eu como morador gostaria de visualizar o histórico de despesas da casa para ter controle dos gastos.

Confirmação:

- Exibir gráficos para visualização da média de gastos da casa por categoria por mês.

### Divisão de despesas (E7) - 3 pontos

Eu como administrador da casa gostaria de configurar a divisão das despesas para poder escolher o melhor critério de divisão.

Confirmação:

- Dividir igualmente para os moradores
- Dividir por renda dos moradores
- Opção de dividir só para não administradores ou para todos

### Registro de pagamentos (E8) - 2 pontos

Eu como administrador da casa gostaria de registrar um pagamento de um membro para informar que o pagamento foi feito.

Confirmação:

- Os pagamentos não se referem à despesas e sim ao montante devido.
- Registrar data

### Definição de datas de pagamento (E9) - 13 pontos

Eu como administrador da casa gostaria de definir uma data de pagamento para que os moradores possam pagar as despesas recorrentes da casa.

Confirmação:

- O administrador pode definir quantas datas ele quiser e o valor que deve ser pago em cada data.
- A soma total do valor pago nas datas não pode ultrapassar o valor total das despesas recorrentes.
- Débitos de despesas únicas não tem data limite porém devem estar sinalizados para todos os usuários.
- A divisão de despesas funciona da mesma forma em cada data: Se a divisão foi configurada como "por renda" então o valor da data é dividido por renda, se a divisão foi configurada como "igualmente" então o valor é divido igualmente.

### Cadastro de metas (E10) - 13 pontos

Eu como administrador da casa gostaria de cadastrar metas para fazer/comprar melhorias para a casa.

- Ninguém é obrigado a contribuir com as metas
- Exemplo: *Meta*: comprar um fogão novo
  - valor desejado: 500 dinheiros
  - valor arrecadado: 120 dinheiros

## Estorias e tarefas do Sprint

- Cadastro e login de usuário (E1) - 5 pontos
  - Tela de cadastro de usuário (T1.1)
  - Instalar banco de dados, projetar e criar tabelas (T1.2)
  - Criar modelo relacional do banco de dados (T1.3)
  - Tela de login de usuário (T1.4)
  - Backend do login (T1.5)
  - Backend do cadastro (T1.6)
- Cadastro de casa (E2) - 3 pontos
  - Tela de gerenciamento de casas (T2.1)
  - Backend da gerencia de casa (T2.2)
  - Tela de inclusão de casa (T2.3)
- Inclusão de outros moradores na casa (E3) - 3 pontos
  - Tela de inclusão de morador (modal) (T3.1)
  - Backend gerencia de morador (T3.2)
  - Tela lista de moradores (T3.3)
- Inclusão de despesa única (E5) - 3 pontos
  - Tela de despesas únicas (T5.1)
  - Modal de adicionar despesa (T5.2)
  - Backend de gerência de despesas (T5.3)
- Histórico de despesas (E6) - 3 pontos
  - Tela geral (T6.1)
  - Tela de gráficos (T6.2)
  - Backend histórico de despesas (T6.3)
- Divisão de despesas (E7) - 3 pontos
  - Mostrar o número na tela geral (T7.1)
  - Backend divisão de despesas (T7.2)
  - Mostrar na tela geral (T7.3)
- Registro de pagamentos (E8) - 2 pontos
  - Backend registro de pagamentos (T8.1)
  - Tela de registro de pagamentos (T8.2)
  - Status de pagamento na tela da lista de membros (T8.3)
