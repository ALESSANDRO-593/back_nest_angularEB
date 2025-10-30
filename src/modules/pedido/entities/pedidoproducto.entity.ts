import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Pedido } from "../../pedido/entities/pedido.entity";
import { Producto } from "../../producto/entities/producto.entity";

@Entity('pedido_producto')
export class PedidoProducto{

    @PrimaryGeneratedColumn()
    id:number;

    @Column()
    pedidoId: number;

    @Column()
    productoId: number;

    @Column()
    cantidad: number;

    @ManyToOne(()=>Pedido,(ped)=>ped.pedidoproducto)
    pedido:Pedido

    @ManyToOne(()=>Producto,pro=>pro.pedidoproducto)
    producto:Producto
}