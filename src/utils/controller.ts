import { Request, Response } from 'express'
import checkVowel from './check_string'

async function stringAnalyze(req: Request, res: Response): Promise<void> {
    const text: string = req.body.text
    const startTime: number = new Date().getTime()
    const vogal: string | Function = await checkVowel(text)
    const endTime: number = new Date().getTime()

    res.json({
        string: text,
        vogal: vogal,
        tempoTotal: `${endTime - startTime}ms`,
        requisitos: 'O primeiro caractere Vogal, após uma consoante, onde a mesma é antecessora a uma vogal e que não se repita na string.'
    })
}

export default stringAnalyze