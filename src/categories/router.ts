import express, { Router } from 'express'
import { findOne, findAll, findOneById, deleteOne, insertOne, updateOne} from './controller'

const router: Router = express.Router()

router.get('/category', findOne)
router.get('/categories/:id', findOneById)
router.get('/categories', findAll)
router.post('/categories', insertOne)
router.delete('/categories/:id', deleteOne)
router.patch('/categories/:id', updateOne)

export default router