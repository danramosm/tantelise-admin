import { ProductosServiceService } from './../services/productos-service.service';
import { Component, OnInit } from '@angular/core';
import { Chart } from 'chart.js';
import { Producto } from '../services/producto.class';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styles: []
})
export class DashboardComponent implements OnInit {

  chart = [];
  productoLista: Producto[];
  cantidadProductos;

  constructor(public productosServiceService: ProductosServiceService) {

  }

  ngOnInit() {

    this.productosServiceService.getProductoLista()
      .subscribe( (productos: Producto[]) =>{
          this.productoLista = productos;
          this.cantidadProductos = this.productoLista.length;
      });

    this.chart = new Chart('canvas', {
      type: 'bar',
      data: {
        labels: ['Diciembre','Enero','Febrero',"Marzo",'Abril' ],
        datasets: [{
              label: 'Monto vendido',
              data: [243400,345200, 230000, 335400, 40000]
            }]
     },
      options: {

         elements: {
          line: {
              tension: 0, // disables bezier curves
          }
        },
        scales: {
            yAxes: [{
                ticks: {
                    // Include a dollar sign in the ticks
                    callback: function(value, index, values) {
                        return '$' + value;
                    }
                }
            }]
          }
      }
    });

}

}