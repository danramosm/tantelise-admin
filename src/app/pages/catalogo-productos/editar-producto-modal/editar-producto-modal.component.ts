import { Categoria } from './../../services/categoria.class';
import { ProductosServiceService } from './../../services/productos-service.service';
import { EditarModalServiceService } from './editar-modal--service.service';
import { Component, OnInit, Input } from '@angular/core';
import { Producto } from '../../services/producto.class';
import { ESTADOS_PRODUCTOS } from '../../../config/config';
import { ServicioAdicional } from '../../services/ServicioAdicional.class';
import swal from 'sweetalert2'
@Component({
  selector: 'app-editar-producto-modal',
  templateUrl: './editar-producto-modal.component.html',
  styles: []
})
export class EditarProductoModalComponent implements OnInit {


  producto: Producto;
  categoriaLista: Categoria[];
  servicioAdicionalLista: ServicioAdicional[];
  estadoProductos = ESTADOS_PRODUCTOS;
  cambios = false;



  constructor(
    public editarModalServiceService: EditarModalServiceService,
    public productosServiceService: ProductosServiceService
  ) {   
    this.cargarData();
   }

   cargarData(){
    this.cargarCategoriaProductos();
    this.cargarServiciosAdicionales();

    this.editarModalServiceService.notificacion.subscribe( (resp: Producto) => {
      this.producto = resp;
      this.cambios = false;
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

    if(!this.cambios){
      swal({
        title: 'Estás seguro?',
        text: "Se perderán los cambios que hayas realizado",
        type: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#d33',
        cancelButtonColor: '#3085d6',
        confirmButtonText: 'Si, seguro'
      }).then((result) => {
        if (result.value) {
          this.editarModalServiceService.ocultarModal(this.cambios);
        }
      });
    }else{
      swal({
        title: 'Confirmar actualización',
        text: "Estás a punto de actualizar este producto, sólo queda confirmar!",
        type: 'info',
        showCancelButton: true,
        confirmButtonColor: '#d33',
        cancelButtonColor: '#3085d6',
        confirmButtonText: 'Confirmo!'
      }).then((result) => {
        if (result.value) {
          this.editarModalServiceService.ocultarModal(this.cambios);
        }
      });

    }
 

   }

   guardarProducto(producto: Producto){
    this.productosServiceService.actualizarProducto(producto).subscribe( ((resp: any) =>{
      this.cambios = true;
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
