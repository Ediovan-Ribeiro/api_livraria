# API de Livraria

## Descrição
A API de Livraria é um projeto desenvolvido para gerenciar um catálogo de livros. Ela permite realizar operações como listar, adicionar, atualizar e remover livros de um banco de dados MongoDB.

## Tecnologias Usadas
- Node.js
- Express
- MongoDB
- Mongoose
- Dotenv

## Instalação e Execução
Siga os passos abaixo para rodar o projeto localmente:

1. Clone o repositório:
   ```bash
   git clone <URL_DO_REPOSITORIO>
   ```
2. Acesse o diretório do projeto:
   ```bash
   cd express-mongo
   ```
3. Instale as dependências:
   ```bash
   npm install
   ```
4. Configure as variáveis de ambiente:
   - Crie um arquivo `.env` na raiz do projeto.
   - Adicione a variável `DB_CONNECTION_STRING` com a string de conexão do MongoDB.

5. Inicie o servidor:
   ```bash
   npm run dev
   ```

O servidor estará disponível em `http://localhost:3000`.

## Arquitetura do Projeto
O projeto segue uma estrutura modular para facilitar a manutenção e escalabilidade:

```
express-mongo/
├── src/
│   ├── app.js               # Configuração principal do Express e rotas
│   ├── config/
│   │   └── dbConnect.js     # Conexão com o banco de dados MongoDB
│   ├── models/
│   │   └── Livro.js         # Modelo Mongoose para a coleção de livros
│   └── routes/              # (Futuro) Rotas organizadas por módulos
├── server.js                # Inicialização do servidor
├── .env                     # Variáveis de ambiente
├── package.json             # Dependências e scripts do projeto
└── README.md                # Documentação do projeto
```

## Endpoints

### 1. **GET /**  
**Descrição:** Retorna uma mensagem de boas-vindas.  
**Resposta:**  
```json
"Curso de Node.js"
```

---

### 2. **GET /livros**  
**Descrição:** Retorna a lista de todos os livros.  
**Resposta:**  
```json
[
  {
    "id": "64f1c2e5f1a2b3c4d5e6f7g8",
    "titulo": "Livro Exemplo",
    "editora": "Editora Exemplo",
    "preco": 29.99,
    "paginas": 200
  }
]
```

---

### 3. **GET /livros/:id**  
**Descrição:** Retorna um livro específico pelo ID.  
**Resposta:**  
```json
{
  "id": "64f1c2e5f1a2b3c4d5e6f7g8",
  "titulo": "Livro Exemplo",
  "editora": "Editora Exemplo",
  "preco": 29.99,
  "paginas": 200
}
```

---

### 4. **POST /livros**  
**Descrição:** Adiciona um novo livro.  
**Requisição:**  
```json
{
  "titulo": "Novo Livro",
  "editora": "Nova Editora",
  "preco": 39.99,
  "paginas": 300
}
```
**Resposta:**  
```json
"livro adicionado com sucesso!"
```

---

### 5. **PUT /livros/:id**  
**Descrição:** Atualiza o título de um livro pelo ID.  
**Requisição:**  
```json
{
  "titulo": "Título Atualizado"
}
```
**Resposta:**  
```json
[
  {
    "id": "64f1c2e5f1a2b3c4d5e6f7g8",
    "titulo": "Título Atualizado",
    "editora": "Editora Exemplo",
    "preco": 29.99,
    "paginas": 200
  }
]
```

---

### 6. **DELETE /livros/:id**  
**Descrição:** Remove um livro pelo ID.  
**Resposta:**  
```json
"livro removido com sucesso!"
```

## Exemplo de Requisição e Resposta
### Usando `curl`:
**Requisição GET /livros:**  
```bash
curl -X GET http://localhost:3000/livros
```

**Resposta:**  
```json
[
  {
    "id": "64f1c2e5f1a2b3c4d5e6f7g8",
    "titulo": "Livro Exemplo",
    "editora": "Editora Exemplo",
    "preco": 29.99,
    "paginas": 200
  }
]
```

## Contribuições
Contribuições são bem-vindas! Sinta-se à vontade para abrir issues e enviar pull requests. 😊
