import express from 'express'
import bodyParser from 'body-parser'
import cors from 'cors'
import { Request, Response } from 'express'
import { Connection } from 'typeorm'

require('dotenv').config()

import utilsRouter from './utils/router'
import productRouter from './products/router'
import providerRouter from './providers/router'
import categoryRouter from './categories/router'
import connection from './db/conn'


connection
.then( (conn: Connection): void => {
    console.log('Successfully connected to database!')
})
.catch( (error: Error): void => console.log(error));

const routers = [utilsRouter, productRouter, providerRouter, categoryRouter]
const PORT: string | undefined = process.env.API_PORT

const app = express()
app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded())
app.use('/api/v1/', routers)


app.get('/', (req: Request, res: Response) => {
    res.json({
        msg: 'Sucesso'
    })
})

app.listen(PORT, () => {
    console.log(`Server running on port: ${PORT}`)
})