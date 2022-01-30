import {
  BaseEntity,
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm'
import { Client } from './Client'
//must declare the type before declaring the entities
export enum TransactionTypes {
  DEPOSIT = 'deposit',
  WITHDRAW = 'withdraw',
}
@Entity('Transaction')
export class Transaction extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number
  @Column({
    type: 'enum',
    enum: TransactionTypes,
  })
  type: string
  @Column({
    type: 'numeric',
  })
  amount: number

  @ManyToOne(() => Client, (client) => client.transactions)
  @JoinColumn({
    name: 'client_id',
  })
  client: Client
}