import { Categoria } from './categoria.class';
import { URL_SERVICIOS } from './../../config/config';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Producto } from './producto.class';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map'


@Injectable()
export class ProductosServiceService {

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  productoLista: Producto[];
  categoriaLista: Categoria[];


  constructor(public http: HttpClient) { }

  public getProductoLista()    {
    let url = URL_SERVICIOS + '8081/productos';
    return this.http.get(url);
  }


  public actualizarProducto(producto: Producto){
    let url = URL_SERVICIOS + '8081/productos/'+producto.id;
    return this.http.put(url, producto,this.httpOptions);
  }

  public crearProducto(producto: Producto){
    let url = URL_SERVICIOS + '8081/productos';
    return this.http.post(url, producto,this.httpOptions);
  }

  public eliminarProducto(id: string){
    let url = URL_SERVICIOS + '8081/productos/'+id;
    return this.http.delete(url,this.httpOptions);
  }

  public getCategoriaProductoLista()    {
    let url = URL_SERVICIOS + '8081/categorias-productos';
    return this.http.get(url);
  }

  public getServiciosAdicionales()    {
    let url = URL_SERVICIOS + '8081/servicios-adicionales';
    return this.http.get(url);
  }



}
