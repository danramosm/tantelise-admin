import { CrearProductoModalServiceService } from './crear-producto--modal-service.service';
import { Categoria } from './../../services/categoria.class';
import { Component, OnInit } from '@angular/core';
import { Producto } from '../../services/producto.class';
import { ServicioAdicional } from '../../services/ServicioAdicional.class';
import { ESTADOS_PRODUCTOS } from '../../../config/config';
import { ProductosServiceService } from '../../services/productos-service.service';




@Component({
  selector: 'app-crear--producto-modal',
  templateUrl: './crear--producto-modal.component.html',
  styles: []
})
export class CrearProductoModalComponent implements OnInit {


  producto: Producto;
  categoriaLista: Categoria[];
  servicioAdicionalLista: ServicioAdicional[];
  estadoProductos = ESTADOS_PRODUCTOS;
  creado = false;



  constructor(
    public crearProductoModalServiceService: CrearProductoModalServiceService,
    public productosServiceService: ProductosServiceService
  ) {   
    this.cargarData();
   }

   cargarData(){
    this.cargarCategoriaProductos();
    this.cargarServiciosAdicionales();
    this.crearProductoModalServiceService.notificacion.subscribe( (resp: Producto) => {
      this.producto = resp;
      this.creado = false;
    });
  }

  cargarServiciosAdicionales(){
    this.productosServiceService.getServiciosAdicionales().subscribe( (servicios: ServicioAdicional[]) =>{
      this.servicioAdicionalLista = servicios;
    });
  }

   cargarCategoriaProductos(){
    this.productosServiceService.getCategoriaProductoLista().subscribe( (categorias: Categoria[]) =>{
      this.categoriaLista = categorias;
    });
   }

   cerrarModal(){
     this.crearProductoModalServiceService.ocultarModal(this.creado);
   }

   guardarProducto(producto: Producto){
    this.productosServiceService.crearProducto(producto).subscribe( ((resp: any) =>{
      this.creado = true;
      this.cerrarModal();
    }));
   }

   agregarPrecio(){
     let nuevaUnidad = {
       "unidad": "Nueva unidad",
       "precio": 341
     };
     console.log(this.producto);
     this.producto.detalleProducto.unidadVenta.push(nuevaUnidad);
   }

  ngOnInit() {

  }
}
