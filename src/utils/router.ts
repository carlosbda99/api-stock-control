import express, { Router } from 'express'
import stringAnalyze from './controller'

const router: Router = express.Router()

router.post('/check-string', stringAnalyze)

export default router