import { PedidoProducto } from '../../pedido/entities/pedidoproducto.entity';
import { Categoria } from '../../categoria/entities/categoria.entity';
import { Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity('pedido')
export class Pedido {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nombre: string;

  @Column()
  stock: number;

  @Column()
  image: string;

  @Column()
  descripcion: string;

  @Column()
  estado: boolean;

  @ManyToOne(() => Categoria, (cat) => cat.producto)
  categoria: Categoria;

  @OneToMany(() => PedidoProducto, pedprod => pedprod.producto)
  pedidoproducto: PedidoProducto[];
}
