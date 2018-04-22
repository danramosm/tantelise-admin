import { Injectable, EventEmitter } from '@angular/core';
import { Producto } from '../../services/producto.class';

@Injectable()
export class EditarModalServiceService {


  public oculto:string = 'oculto';
  public producto: Producto;
  public notificacion = new EventEmitter;
  public cambios = new EventEmitter;

  constructor() { }

  ocultarModal(cambios: boolean){
    this.oculto = 'oculto';
    this.cambios.emit(cambios);
  }


  mostrarModal(producto: Producto){
    this.oculto = '';
    this.producto = producto;
    this.notificacion.emit(this.producto);
  }
}
