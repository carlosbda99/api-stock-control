import { Request, Response } from 'express'
import connection from '../db/conn'
import { Product } from '../products/entity'
import { Provider } from './entity'

async function findAll(req: Request, res: Response): Promise<void> {
    Provider.findAndCount({relations: ['products']})
    .then( ([providers, providerCount]) => {
        res.json({
            count: providerCount,
            providers: providers,
        })
    }).catch( err => {
        res.status(500).json({
            msg: 'Unsuccessfully operation',
            err: err
        })
    })
}

async function findOne(req: Request, res: Response): Promise<void> {
    const name: string = req.body.name;

    Provider.findOne({name: name}, {relations: ['products']})
    .then( provider => {
        res.json({
            provider: provider
        })
    }).catch( err => {
        res.status(500).json({
            msg: 'Unsuccessfully operation',
            err: err
        })
    })
}

async function findOneById(req: Request, res: Response): Promise<void> {
    const id: number = parseInt(req.params.id);

    Provider.findOne({id: id})
    .then( provider => {
        res.json({
            provider: provider
        })
    }).catch( err => {
        res.status(500).json({
            msg: 'Unsuccessfully operation',
            err: err
        })
    })
}

async function insertOne(req: Request, res: Response): Promise<void> {
    let products: object[] = []

    if (req.body.products){
        products = req.body.products.map(id => {id: id})
    }

    const provider: Provider = new Provider();
    provider.cnpj = req.body.cnpj
    provider.name = req.body.name
    provider.phone = req.body.phone
    provider.products = req.body.products? await Product.find({
        where: products
    }) : req.body.products

    Provider.insert(provider)
    .then( provider => {
        res.json({
            msg: 'Successfully inserted',
            provider: provider.raw[0]
        })
    }).catch( err => {
        res.status(500).json({
            msg: 'Unsuccessfully operation',
            err: err
        })
    })
}

async function deleteOne(req: Request, res: Response): Promise<void> {
    const id: number = parseInt(req.params.id);

    Provider.delete({id: id})
    .then( provider => {
        res.json({
            msg: 'Successfully deleted',
            provider: provider
        })
    }).catch( err => {
        res.status(500).json({
            msg: 'Unsuccessfully operation',
            err: err
        })
    })
}

async function updateOne(req: Request, res: Response): Promise<void> {
    const provider: Provider = new Provider()
    provider.id = parseInt(req.params.id)
    provider.name = req.body.name
    provider.cnpj = req.body.cnpj
    provider.phone = req.body.phone;

    (await connection).manager.update(Provider, {id: parseInt(req.params.id)}, provider)
    .then( provider => {
        res.json({
            msg: 'Successfully updated',
            provider: provider
        })
    }).catch( err => {
        res.status(500).json({
            msg: 'Unsuccessfully operation',
            err: err
        })
    })
}

export { findOne, findAll, findOneById, insertOne, deleteOne, updateOne } 