<!-- # CursoExtensaoNodeJs

necessário instalar as seguintes bibliotecas, caso não tenha:

npm install express
npm install nodemon
npm install morgan
npm install prisma -D

npx prisma init --datasource-provider mysql
npx prisma migrate dev --name "definicao inicial"

Para executar:

npm run start ou npm run dev -->

# Sistema Escolar Express JS

Projeto de uma API de sistema escolar desenvolvido durante o curso de extensão "NodeJs: Javascript no Back-End" disponibilizado pela UNIFAL-MG.

## Tecnologias

![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E.svg?style=for-the-badge&logo=JavaScript&logoColor=black)
![Node.js](https://img.shields.io/badge/Node.js-339933.svg?style=for-the-badge&logo=nodedotjs&logoColor=white)
![Express.js](https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB)
![MySQL](https://img.shields.io/badge/MySQL-4479A1.svg?style=for-the-badge&logo=MySQL&logoColor=white)
![Prisma](https://img.shields.io/badge/Prisma-3982CE?style=for-the-badge&logo=Prisma&logoColor=white)

## Execução

### Crianção do banco de dados

Antes de tudo você deve criar um banco de dados MySQL com o nome de "curso_nodejs" e configurar o arquivo "prisma/schema.prisma" com as credenciais do seu banco de dados.

```javascript
datasource db {
  provider = "mysql"
  url      = "mysql://<usuario>:<senha>@localhost:3306/curso_nodejs?schema=public"
}
```

### Instalação de dependências

```bash
npm install express
```
```bash
npm install nodemon
```
```bash
npm install morgan
```
```bash
npm install prisma -D
```

### Compilação e execução

Inicialização do prisma:

```bash
npx prisma init --datasource-provider mysql
npx prisma migrate dev --name "definicao inicial"
```

Execução do projeto:
```bash
npm run start
```
ou
```bash
npm run dev
```

## Endpoints

### Alunos/Professores/Cursos

GET `/alunos`- Retorna todos os alunos cadastrados

GET `/alunos/:id` - Retorna o aluno com o id especificado

POST `/alunos` - Cadastra um novo aluno

PATCH `/alunos/:id` - Atualiza os dados do aluno com o id especificado

<!-- router.get('/matricula/curso/:idCurso/aluno/:idAluno', Controlador.getByMatricula);

router.get('/matricula/aluno/:idAluno', Controlador.getByAluno);

router.get('/matricula/curso/:idCurso', Controlador.getByCurso);

router.get('/matricula', Controlador.getAll);

router.delete('/matricula/curso/:idCurso/aluno/:idAluno', Controlador.delete);

module.exports = router; -->

### Matrículas

- GET `/matricula` - Retorna todas as matrículas cadastradas

- GET `/matricula/curso/:idCurso/aluno/:idAluno` - Retorna a matrícula do aluno com o id especificado no curso com o id especificado

- GET `/matricula/aluno/:idAluno` - Retorna todas as matrículas do aluno com o id especificado

- GET `/matricula/curso/:idCurso` - Retorna todas as matrículas do curso com o id especificado

- POST `/matricula` - Cadastra uma nova matrícula

- DELETE `/matricula/curso/:idCurso/aluno/:idAluno` - Deleta a matrícula do aluno com o id especificado no curso com o id especificado










