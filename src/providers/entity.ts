import { Length } from "class-validator";

import {
    Entity,
    Column,
    PrimaryGeneratedColumn,
    UpdateDateColumn,
    CreateDateColumn,
    BaseEntity,
    ManyToMany,
    JoinTable
} from 'typeorm'
import { Product } from "../products/entity";

@Entity()
export class Provider extends BaseEntity{
    @PrimaryGeneratedColumn()
    id: number

    @Column({
        length: 20,
        unique: true
    })
    @Length(5)
    name: string

    @Column({
        unique: true,
        length: 18
    })
    @Length(18)
    cnpj: string

    @ManyToMany(() => Product, product => product.providers)
    @JoinTable()
    products?: Provider[]

    @Column({
        nullable: true
    })
    phone?: string

    @Column({
        default: true
    })
    active?: boolean

    @CreateDateColumn()
    created_at?: Date

    @UpdateDateColumn()
    updated_at?: Date
}