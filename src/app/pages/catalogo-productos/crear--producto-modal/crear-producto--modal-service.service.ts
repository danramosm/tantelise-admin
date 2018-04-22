import { Injectable, EventEmitter } from '@angular/core';
import { Producto } from '../../services/producto.class';

@Injectable()
export class CrearProductoModalServiceService {

  public oculto:string = 'oculto';
  public producto: Producto;
  public notificacion = new EventEmitter;
  public creado = new EventEmitter;

  constructor() { }

  ocultarModal(creado: boolean){
    this.oculto = 'oculto';
    this.creado.emit(creado);
  }


  mostrarModal(producto: Producto){
    this.oculto = '';
    this.producto = producto;
    this.notificacion.emit(this.producto);
  }
}
