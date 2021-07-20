import express, { Router } from 'express'
import { findOne, findAll, findOneById, deleteOne, insertOne, updateOne} from './controller'


const router: Router = express.Router()

router.get('/product', findOne)
router.get('/products/:id', findOneById)
router.get('/products', findAll)
router.post('/products', insertOne)
router.delete('/products/:id', deleteOne)
router.patch('/products/:id', updateOne)

export default router