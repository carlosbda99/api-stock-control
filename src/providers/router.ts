import express, { Router } from 'express'
import { findOne, findAll, findOneById, deleteOne, insertOne, updateOne} from './controller'

const router: Router = express.Router()

router.get('/provider', findOne)
router.get('/providers/:id', findOneById)
router.get('/providers', findAll)
router.post('/providers', insertOne)
router.delete('/providers/:id', deleteOne)
router.patch('/providers/:id', updateOne)

export default router