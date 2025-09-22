# Trabalho Dev API

![Logo do Projeto](img/IMGTDA.png)

## Descrição do Projeto

Este projeto é um material didático para aprender desenvolvimento de **APIs REST** com **Node.js**, **TypeScript** e **Express**, utilizando o padrão **MVC**. Ele foi estruturado como uma progressão do básico ao intermediário, com exercícios práticos para consolidar o aprendizado.

O objetivo é fornecer uma base sólida para criação, leitura, atualização e exclusão de dados (`CRUD`) em APIs, além de trabalhar com boas práticas, validação de dados e tipagem forte do TypeScript.

---

## Tecnologias Utilizadas

- [Node.js](https://nodejs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [Express](https://expressjs.com/)
- Git e GitHub (controle de versão)

---

## Estrutura do Projeto

```bash
trabalho-dev-api/
│
├─ src/
│ ├─ controllers/ # Controladores (HTTP layer)
│ ├─ business/ # Regras de negócio
│ ├─ data/ # "Banco de dados" em memória
│ ├─ routes/ # Rotas da API
│ ├─ types/ # Tipos e interfaces TypeScript
│ ├─ db/ # Exporta arrays users e posts
│ └─ server.ts # Arquivo principal do servidor
│
├─ .gitignore
├─ package.json
├─ tsconfig.json
└─ README.md
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

Exemplos:

GET /users/1

```
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

GET /users/age-range?min=25&max=35

```
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
}
```

POST /posts com body JSON:

```
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

PUT /users/1 com body JSON:

```
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

PATCH /posts/1 com body JSON:

```
{
    "id": 1,
    "title": "Título Atualizado",
    "content": "Conteúdo válido com mais de 10 caracteres",
    "authorId": 1,
    "createdAt": "2025-09-22T14:59:09.574Z",
    "published": false
}
```

DELETE /posts/1 com header User-Id: 1

```
{
    "message": "Post removido com sucesso"
}
```

DELETE /users/cleanup-inactive?confirm=true

```
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
    },
    {
        "id": 4,
        "name": "Flavio",
        "email": "flavio@gmail.com",
        "role": "user",
        "age": 34
    }
]
```

## Autor

Arthur Steiner Morais Silva
