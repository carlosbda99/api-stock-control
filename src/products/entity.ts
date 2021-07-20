import { IsDecimal, IsNumber, Length, Min} from "class-validator";
import {
    ManyToOne,
    ManyToMany,
    Entity,
    Column,
    PrimaryGeneratedColumn,
    UpdateDateColumn,
    CreateDateColumn,
    BaseEntity,
    JoinColumn,
    JoinTable
} from 'typeorm'

import { Provider } from "../providers/entity";
import { Category } from "../categories/entity";

@Entity()
export class Product extends BaseEntity{
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

    @Column({
        default: 0
    })
    @IsNumber()
    @Min(0)
    stock: number

    @ManyToOne(() => Category, category => category.products)
    category: Category

    @ManyToMany(() => Provider, provider => provider.products)
    @JoinTable()
    providers: Provider[]

    @Column({
        default: 0,
        nullable: true
    })
    @IsDecimal()
    value?: number

    @Column({
        default: true
    })
    active?: boolean

    @Column({
        default: 0,
        nullable: true
    })
    @IsNumber()
    @Min(0)
    width?: number

    @Column({
        default: 0,
        nullable: true
    })
    @IsNumber()
    @Min(0)
    height?: number

    @Column({
        default: 0,
        nullable: true
    })
    @IsNumber()
    @Min(0)
    lenght?: number

    @CreateDateColumn()
    created_at?: Date

    @UpdateDateColumn()
    updated_at?: Date
}