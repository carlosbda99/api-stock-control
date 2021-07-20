import { Request, Response } from 'express'

import { Product } from './entity'
import { Provider } from '../providers/entity'

async function findAll(req: Request, res: Response): Promise<void> {
    await Product.findAndCount({relations: ["category", "providers"]})
        .then(([products, productCount]) => {
            res.json({
                count: productCount,
                products: products,
            })
        }).catch(err => {
            res.status(500).json({
                msg: 'Unsuccessfully operation',
                err: err
            })
        })
}

async function findOne(req: Request, res: Response): Promise<void> {
    const name: string = req.body.name;

    Product.findOne({ name: name }, {relations: ["category"]})
        .then(product => {
            res.json({
                product: product
            })
        }).catch(err => {
            res.status(500).json({
                msg: 'Unsuccessfully operation',
                err: err
            })
        })
}

async function findOneById(req: Request, res: Response): Promise<void> {
    const id: number = parseInt(req.params.id);

    Product.findOne({ id: id }, {relations: ["capture_id", "providers"]})
        .then(product => {
            res.json({
                product: product
            })
        }).catch(err => {
            res.status(500).json({
                msg: 'Unsuccessfully operation',
                err: err
            })
        })
}

async function insertOne(req: Request, res: Response): Promise<void> {
    let providers: object[] = []
    if (req.body.providers){
        providers = req.body.providers.map(id => {
            return {id: id}
        })
    }

    const product: Product = new Product()
    product.name = req.body.name
    product.providers = req.body.providers ? await Provider.find({where: providers}) : req.body.providers
    product.description = req.body.description 
    product.stock = req.body.stock
    product.category = req.body.category
    product.width = req.body.width
    product.height = req.body.height
    product.lenght = req.body.lenght
    product.value = req.body.value

    await product.save()
        .then(product => {
            res.json({
                msg: 'Successfully inserted',
                product: product
            })
        }).catch(err => {
            res.status(500).json({
                msg: 'Unsuccessfully operation',
                err: err
            })
        })
}

async function deleteOne(req: Request, res: Response): Promise<void> {
    const id: number = parseInt(req.params.id)

    Product.delete({ id: id })
        .then(product => {
            res.json({
                msg: 'Successfully deleted',
                product: product
            })
        }).catch(err => {
            res.status(500).json({
                msg: 'Unsuccessfully operation',
                err: err
            })
        })
}

async function updateOne(req: Request, res: Response): Promise<void> {
    let providers: object[] = []
    if (req.body.providers){
        providers = req.body.providers.map(id => {
            return {id: id}
        })
    }

    const product: Product = new Product()
    product.id = parseInt(req.params.id)
    product.name = req.body.name
    product.providers = req.body.providers ? await Provider.find({where: providers}) : req.body.providers
    product.description = req.body.description 
    product.stock = req.body.stock
    product.category = req.body.category
    product.width = req.body.width
    product.height = req.body.height
    product.lenght = req.body.lenght
    product.value = req.body.value;

    Product.save(product)
        .then(product => {
            res.json({
                msg: 'Successfully updated',
                product: product
            })
        }).catch(err => {
            res.status(500).json({
                msg: 'Unsuccessfully operation',
                err: err
            })
        })
}

export { findOne, findAll, findOneById, insertOne, deleteOne, updateOne }