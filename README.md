# Trabalho Dev API

![Logo do Projeto](src/img/IMGTDA.png)

## Descrição do Projeto

A aplicação segue o padrão **MVC (Model-View-Controller)**, garantindo uma arquitetura escalável e bem estruturada.

Através de uma abordagem prática, o repositório oferece a resolução de exercícios que cobrem as operações básicas de um sistema de **CRUD** (Criar, Ler, Atualizar, Deletar) e também se preocupa com boas práticas como validação de dados, tipagem forte e organização de código.

O foco principal desse projeto foi **consolidar o aprendizado** do desenvolvimento de APIs com as tecnologias mencionadas, ajudando a entender conceitos importantes, como:

- Estruturação de projetos com TypeScript.
- Boas práticas em APIs REST.
- Gerenciamento de dados (em memória, neste caso).
- Validação de dados e controle de permissões de usuários.

---

## Tecnologias Utilizadas

- **[Node.js](https://nodejs.org/)**: Ambiente de execução JavaScript no lado do servidor.
- **[TypeScript](https://www.typescriptlang.org/)**: Superset do JavaScript que adiciona tipagem estática e outras funcionalidades.
- **[Express](https://expressjs.com/)**: Framework minimalista para construção de APIs e servidores HTTP.
- **Git** e **GitHub**: Controle de versão e colaboração em equipe.

---

## Estrutura do Projeto

A estrutura do projeto foi organizada de maneira a separar as responsabilidades e facilitar a manutenção e escalabilidade:

```bash
trabalho-dev-api/
│
│
├─ src/                   # Código-fonte da aplicação
│ ├─ business/            # Service: regras e lógica de negócio da aplicação
│ │ ├─ userBusiness.ts    # Lógica de negócio relacionada a usuários
│ │ └─ postBusiness.ts    # Lógica de negócio relacionada a posts
│ │
│ ├─ controllers/         # Controller: lida com requisições HTTP e respostas
│ │ ├─ userController.ts  # Controladores para rotas de usuários
│ │ └─ postController.ts  # Controladores para rotas de posts
│ │
│ ├─ data/                # Repository: acesso e manipulação dos dados (simulação do DB)
│ │ ├─ userData.ts        # Funções para acessar/manipular dados dos usuários
│ │ └─ postData.ts        # Funções para acessar/manipular dados dos posts
│
│ ├─ img/                 # Imagem para branding e estilização do projeto
│ └─ IMGTDA.png           # Imagem do Repositório
│ │
│ ├─ routes/              # Routes: definição dos endpoints da API
│ │ ├─ userRoutes.ts      # Rotas relacionadas a usuários
│ │ └─ postRoutes.ts      # Rotas relacionadas a posts
│ │
│ ├─ types/               # Models: tipos e interfaces TypeScript para tipagem forte
│ │ ├─ userTypes.ts       # Tipos e interfaces para usuários
│ │ └─ postTypes.ts       # Tipos e interfaces para posts
│ │
│ ├─ app.ts               # Configura o Express, middlewares e rotas (novo arquivo)
│ │
│ ├─ db.ts                # Simulação do banco de dados (dados em memória)
│ │                       # Exporta listas de usuários e posts
│ │
│ └─ server.ts            # Entry point: inicializa e configura o servidor Express
│                         # Configura middlewares e rotas principais
│
├─ .gitignore             # Arquivos e pastas ignoradas pelo Git
├─ package.json           # Gerenciador de dependências e scripts do projeto
├─ tsconfig.json          # Configurações do compilador TypeScript
└─ README.md              # Documentação do projeto

```

---

## Funcionalidades

O projeto contém os seguintes exercícios/funcionalidades:

### Exercício 1: GET /users/:id
- Buscar um usuário específico pelo ID.
- Retorna 404 se não encontrado.

### Exercício 2: GET /users/age-range?min=25&max=35
- Filtra usuários por faixa etária.
- Valida se os parâmetros são números válidos.

### Exercício 3: POST /posts
- Criar posts relacionados aos usuários.
- Valida título (mínimo 3 caracteres), conteúdo (mínimo 10 caracteres) e `authorId`.

### Exercício 4: PUT /users/:id
- Atualização completa do usuário.
- Todos os campos obrigatórios.
- Evita conflitos de email.

### Exercício 5: PATCH /posts/:id
- Atualização parcial de posts.
- Permite atualizar apenas `title`, `content` e `published`.

### Exercício 6: DELETE /posts/:id
- Apenas o autor do post ou admins podem remover.
- Verifica existência do post e autorização via header `User-Id`.

### Exercício 7: DELETE /users/cleanup-inactive?confirm=true
- Remove usuários sem posts.
- Não remove administradores.
- Retorna lista de usuários removidos.

---

## Testando a API

Você pode usar o Postman, Thunder Client ou qualquer cliente HTTP para testar os endpoints.

[Pasta no Postman](https://arthursteinerr-4295979.postman.co/workspace/Arthur-Steiner's-Workspace~3abe7c33-dc8c-47a6-8e21-6f6a7a03e4fe/folder/47732566-1285ca89-1a42-47a7-aa77-f5bd79531bd7?action=share&creator=47732566&ctx=documentation)

### Exercício 1: `GET /users/:id`
- **Resposta de Sucesso**:
    ```json
    {
      "success": true,
      "data": {
        "id": 1,
        "name": "Arthur",
        "email": "arthur@gmail.com",
        "role": "admin",
        "age": 20
      }
    }
    ```
- **Erro (404)**: Se o usuário não for encontrado.

---

### Exercício 2: `GET /users/age-range?min=25&max=35`
- **Validação**: Parâmetros `min` e `max` devem ser números válidos.
- **Resposta de Sucesso**:
    ```json
    {
      "success": true,
      "data": [
        {
          "id": 2,
          "name": "Thiago",
          "email": "thiago@gmail.com",
          "role": "user",
          "age": 35
        },
        {
          "id": 4,
          "name": "Flavio",
          "email": "flavio@gmail.com",
          "role": "user",
          "age": 34
        }
      ]
    }
    ```

---

### Exercício 3: `POST /posts`
- **Validação**: O título deve ter no mínimo 3 caracteres, o conteúdo, 10 caracteres, e o `authorId` deve corresponder a um usuário válido.
- **Resposta de Sucesso**:
    ```json
    {
      "success": true,
      "data": {
        "id": 1,
        "title": "Meu Terceiro Post",
        "content": "Conteúdo válido com mais de 10 caracteres",
        "authorId": 1,
        "createdAt": "2025-09-22T14:59:09.574Z",
        "published": false
      }
    }
    ```

---

### Exercício 4: `PUT /users/:id`
- **Validação**: Todos os campos são obrigatórios e a atualização verifica possíveis conflitos no email.
- **Resposta de Sucesso**:
    ```json
    {
      "success": true,
      "data": {
        "id": 1,
        "name": "Arthur Steiner",
        "email": "arthur@teste.com",
        "role": "admin",
        "age": 30
      }
    }
    ```

---

### Exercício 5: `PATCH /posts/:id`
- **Permite** atualizar o `title`, `content` ou `published`.
- **Resposta de Sucesso**:
    ```json
    {
      "id": 1,
      "title": "Título Atualizado",
      "content": "Conteúdo válido com mais de 10 caracteres",
      "authorId": 1,
      "createdAt": "2025-09-22T14:59:09.574Z",
      "published": false
    }
    ```

---

### Exercício 6: `DELETE /posts/:id`
- **Requisito**: Deve passar o `User-Id` no header para verificar permissões.
- **Resposta de Sucesso**:
    ```json
    {
      "message": "Post removido com sucesso"
    }
    ```

---

### Exercício 7: `DELETE /users/cleanup-inactive?confirm=true`
- **Restrições**: Administradores não são removidos.
- **Resposta de Sucesso**:
    ```json
    [
      {
        "id": 2,
        "name": "Thiago",
        "email": "thiago@gmail.com",
        "role": "user",
        "age": 35
      },
      {
        "id": 3,
        "name": "Thais",
        "email": "thais@gmail.com",
        "role": "user",
        "age": 19
      }
    ]
    ```
## Autor e Créditos

**Arthur Steiner**  
Estudante de Análise e Desenvolvimento de Sistemas - FAMINAS (Muriaé)  
GitHub: [@arthursteinerr](https://github.com/arthursteinerr)

---

Este projeto foi desenvolvido como parte do **Trabalho Acadêmico** para a disciplina de **Desenvolvimento de APIs** da **FAMINAS**. 

---
