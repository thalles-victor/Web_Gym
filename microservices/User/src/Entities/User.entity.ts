import { hashPasswordTransform } from 'src/common/crypt';
import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { AddressEntity } from './Address.entity';

@Entity({ name: 'user' })
export class UserEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ type: 'varchar' })
  name: string;

  @Column({ type: 'varchar' })
  email: string;

  @Column({ type: 'varchar', transformer: hashPasswordTransform })
  password: string;

  @OneToMany(() => AddressEntity, (address) => address.user)
  address: AddressEntity[];
}
