import { CrearProductoModalServiceService } from './crear--producto-modal/crear-producto--modal-service.service';
import { Categoria } from './../services/categoria.class';
import { EditarModalServiceService } from './editar-producto-modal/editar-modal--service.service';
import { ProductosServiceService } from './../services/productos-service.service';

import { Component, OnInit } from '@angular/core';
import { Chart } from 'chart.js';
import { Producto } from '../services/producto.class';
import { CrearProductoModalComponent } from './crear--producto-modal/crear--producto-modal.component';

import swal from 'sweetalert2'
// CommonJS

@Component({
  selector: 'app-catalogo-productos',
  templateUrl: './catalogo-productos.component.html',
  styles: []
})
export class CatalogoProductosComponent implements OnInit {

  chart = [];
  productoLista: Producto[];
  totalProductos;
  cargando:boolean = true;
  seleccionado: Producto;

  constructor(public productosServiceService: ProductosServiceService, public editarModalServiceService: EditarModalServiceService, public crearProductoModalServiceService: CrearProductoModalServiceService) {
    
    this.cargarData();
   }

   cargarData(){
    this.cargando = true;
    this.cargarActualizaciones();
     this.cargarProductos();
     this.cargando = false;

   }

   editarProducto(producto: Producto){
     this.seleccionado = producto;
     this.editarModalServiceService.mostrarModal(this.seleccionado);
   }

   crearProducto(){
    let nuevo: Producto = new Producto(null,'Nomrbe del producto','Escriba una descripción...','','','','','Habilitado', '');
    nuevo.detalleProducto = {"servicioAdicional": [] , "unidadVenta": [] };
    this.crearProductoModalServiceService.mostrarModal(nuevo);
  }

  eliminarProducto(id: string, nombre: string){
    swal({
      title: '¿Eliminar el producto: <strong>' +nombre+'</strong>?',
      text: "Se eliminará este producto, no podrás volver a editarlo",
      type: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#d33',
      cancelButtonColor: '#3085d6',
      confirmButtonText: 'Si, seguro'
    }).then((result) => {
      if (result.value) {
        if(id == null || id.length<=0 ){
            swal(
              'Error :(',
              'No se ha podido eliminar el producto',
              'error'
            );
        }else{
          this.productosServiceService.eliminarProducto(id).subscribe( (rest: any) =>{
            if(rest){
              swal(
                'Se ha eliminado con éxito!',
                'No se mostrará más este producto',
                'success'
              );
              this.cargarProductos();
            }else{
              swal(
                'Error :(',
                'No se ha podido eliminar el producto',
                'error'
              );
            }
          });
        }
      }
    });
  }

   cargarActualizaciones(){
    this.editarModalServiceService.cambios.subscribe( (cambios: boolean) => {
      if(!cambios){
        this.cargarProductos();
      }else{
        swal(
          'Actualización exitosa ',
          'Se ha actualizado exitosamente el producto!',
          'success'
        )
      }
    });

    this.crearProductoModalServiceService.creado.subscribe( (creado: boolean) => {
      if(creado){
        this.cargarProductos();
        swal(
          'Se ha creado el producto exitosamente!',
          'El producto se agregará a la lista',
          'success'
        )
      }
    });

   }

  cargarProductos(){
    this.cargando = true;
    this.productosServiceService.getProductoLista()
    .subscribe( (productos: Producto[]) =>{
        this.productoLista = productos;
        this.totalProductos = this.productoLista.length;
        this.cargando = false;
        console.log(this.productoLista);

    });
  }

  ngOnInit() {
    this.iniciarlizarGgrafico();
  }

  iniciarlizarGgrafico(){
    this.chart = new Chart('canvas', {
      type: 'doughnut',
      data: {
          labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
          datasets: [{
              label: 'Cantidad de productos',
              data: [12, 19, 3, 5, 2, 3],
              backgroundColor: [
                  'rgba(255, 99, 132, 0.2)',
                  'rgba(54, 162, 235, 0.2)',
                  'rgba(255, 206, 86, 0.2)',
                  'rgba(75, 192, 192, 0.2)',
                  'rgba(153, 102, 255, 0.2)',
                  'rgba(255, 159, 64, 0.2)'
              ],
              borderColor: [
                  'rgba(255,99,132,1)',
                  'rgba(54, 162, 235, 1)',
                  'rgba(255, 206, 86, 1)',
                  'rgba(75, 192, 192, 1)',
                  'rgba(153, 102, 255, 1)',
                  'rgba(255, 159, 64, 1)'
              ],
              borderWidth: 1
          }]
      },
      options: {
        title: {
          display: true,
          text: 'Distribución por categoría'
         }
      }
    });
  }
}
