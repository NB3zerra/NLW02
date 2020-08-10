import express from 'express'
import cors from 'cors'
import routes from './routes'


//declarando a variável app
const app = express()

app.use(cors())
//->localhost:3333/users
//habilitando a leitura de json 
app.use(express.json())
//importando as rotas de dentro do arquivo routes.ts
app.use(routes)


//GET: Buscar ou listar uma informação
//POST: Criar uma nova informação
//PUT: Atualizar uma informação existente
//DELETE: Deletar uma informação existente

//Corpo (Request body): dados para criação ou edição de registro
//Route Params: Identifica qual recurso a atualizar ou deletar
//Query Params: Paginação, filtros, ordenação


//definindo rotas dentro da api

//habilitando listener de http (porta)

app.listen(3333)