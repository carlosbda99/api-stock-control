import { Request, Response } from 'express'
import { Product } from '../products/entity'
import { Category } from './entity'

async function findAll(req: Request, res: Response): Promise<void> {
    Category.findAndCount({relations: ['products']})
    .then( ([categories, categoriesCount]) => {
        res.json({
            count: categoriesCount,
            categories: categories,
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

    Category.findOne({name: name}, {relations: ['products']})
    .then( category => {
        res.json({
            category: category
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

    Category.findOne(id, {relations: ['products']})
    .then( category => {
        res.json({
            category: category
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

    const category: Category = new Category()
    category.name = req.body.name
    category.products = req.body.products ? await Product.find({
        where: products
    }) : req.body.products
    category.description = req.body.description

    Category.save(category)
    .then( category => {
        res.json({
            msg: 'Successfully inserted',
            category: category
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

    Category.delete({id: id})
    .then( category => {
        res.json({
            msg: 'Successfully deleted',
            category: category
        })
    }).catch( err => {
        res.status(500).json({
            msg: 'Unsuccessfully operation',
            err: err
        })
    })
}

async function updateOne(req: Request, res: Response): Promise<void> {
    let products: object[] = []

    if (req.body.products){
        products = req.body.products.map(id => {id: id})
    }

    const category: Category = new Category()
    category.id = parseInt(req.params.id)
    category.name = req.body.name
    category.products = req.body.products ? await Product.find({
        where: products
    }) : req.body.products
    category.description = req.body.description

    Category.save(category)
    .then( category => {
        res.json({
            msg: 'Successfully updated',
            category: category
        })
    }).catch( err => {
        res.status(500).json({
            msg: 'Unsuccessfully operation',
            err: err
        })
    })
}

export { findOne, findAll, findOneById, insertOne, deleteOne, updateOne } 