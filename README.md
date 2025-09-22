# Trabalho Dev API

![Logo do Projeto](img/IMGTDA.png)

## Descrição do Projeto

Este projeto serve como material didático para aprender o desenvolvimento de **APIs REST** utilizando **Node.js**, **TypeScript** e **Express**. A aplicação segue o padrão **MVC (Model-View-Controller)**, garantindo uma arquitetura escalável e bem estruturada.

Através de uma abordagem prática, o repositório oferece exercícios que cobrem as operações básicas de um sistema de **CRUD** (Criar, Ler, Atualizar, Deletar) e também se preocupa com boas práticas como validação de dados, tipagem forte e organização de código.

O foco principal é **consolidar o aprendizado** do desenvolvimento de APIs com as tecnologias mencionadas, ajudando a entender conceitos importantes, como:

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
├─ img/
│ └─ IMGTDA.png           # Imagem do Repositório (para estilização e branding)
│
├─ src/                    # Código-fonte do aplicativo
│ ├─ business/             # Regras de negócio (lógica de processamento da aplicação)
│ ├─ controllers/          # Controladores (camada de controle da API, lida com requisições HTTP)
│ ├─ data/                 # "Banco de dados" em memória (simula persistência de dados)
│ ├─ routes/               # Definição das rotas da API
│ ├─ types/                # Tipos e interfaces TypeScript (tipagem forte)
│ ├─ db.ts                 # Arquivo principal (simula a persistência dos dados e exporta os dados dos usuários e posts)
│ └─ server.ts             # Arquivo que inicializa o servidor Express e configura o servidor da API
│
├─ .gitignore              # Arquivo que ignora arquivos desnecessários no repositório
├─ package.json            # Gerenciador de dependências e scripts do projeto
├─ tsconfig.json           # Configuração do TypeScript
└─ README.md               # Documentação do projeto (este arquivo)
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

Você pode usar o Postman, Insomnia ou qualquer cliente HTTP para testar os endpoints.

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

**Arthur Steiner Morais Silva**  
Estudante de Análise e Desenvolvimento de Sistemas - FAMINAS (Muriaé)  
GitHub: [@arthursteinerr](https://github.com/arthursteinerr)

---

Este projeto foi desenvolvido como parte do **Trabalho Acadêmico** para a disciplina de **Desenvolvimento de APIs** da **FAMINAS**. 

---


Arthur Steiner Morais Silva
