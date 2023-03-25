import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'porducts' })
export class ProductEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ length: 500 })
  title: string;

  @Column('varchar')
  main_image: string;

  @Column('varchar', { array: true })
  secodary_images: string[];

  @Column('text')
  description: string;

  @Column('int')
  price: number;

  @Column('text')
  created_at: Date;
}
