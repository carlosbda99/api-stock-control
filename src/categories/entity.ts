import { IsNumber, Length, Min} from "class-validator";
import {
    OneToMany,
    Entity,
    Column,
    PrimaryGeneratedColumn,
    UpdateDateColumn,
    CreateDateColumn,
    BaseEntity
} from 'typeorm'

import { Product } from "../products/entity";

@Entity()
export class Category extends BaseEntity{
    @PrimaryGeneratedColumn()
    id: number

    @Column({
        length: 20,
        unique: true
    })
    @Length(5)
    name: string
    
    @Column({
        length: 120,
        nullable: true
    })
    @Length(5)
    description?: string

    @OneToMany(() => Product, product => product.category)
    products: Product[]

    @Column({
        default: true
    })
    active?: boolean

    @CreateDateColumn()
    created_at?: Date

    @UpdateDateColumn()
    updated_at?: Date
}