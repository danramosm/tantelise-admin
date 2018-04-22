import { CrearProductoModalServiceService } from './catalogo-productos/crear--producto-modal/crear-producto--modal-service.service';
import { NgModule } from '@angular/core';
import { AppComponent } from './../app.component';
import { CommonModule } from '@angular/common';
import {HttpClientModule} from '@angular/common/http';

import { PagesComponent } from './pages.component';
import { HeaderComponent } from './shared/header/header.component';
import { SidebarComponent } from './shared/sidebar/sidebar.component';
import { SharedComponent } from './shared/shared.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PRIVADO_ROUTES } from './privado.routes';
import { CatalogoProductosComponent } from './catalogo-productos/catalogo-productos.component';
import { CatalogoServiciosComponent } from './catalogo-servicios/catalogo-servicios.component';
import { PedidosComponent } from './pedidos/pedidos.component';
import { GestionVentasComponent } from './gestion-ventas/gestion-ventas.component';
import { ReportesComponent } from './reportes/reportes.component';
import { ClientesComponent } from './clientes/clientes.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ProductosServiceService } from './services/productos-service.service';
import { EditarProductoModalComponent } from './catalogo-productos/editar-producto-modal/editar-producto-modal.component';
import { EditarModalServiceService } from './catalogo-productos/editar-producto-modal/editar-modal--service.service';
import { CrearProductoModalComponent } from './catalogo-productos/crear--producto-modal/crear--producto-modal.component';

@NgModule({
    declarations: [
        DashboardComponent,
        PagesComponent,
        SharedComponent,
        DashboardComponent,
        SidebarComponent,
        HeaderComponent,
        CatalogoProductosComponent,
        CatalogoServiciosComponent,
        PedidosComponent,
        GestionVentasComponent,
        ReportesComponent,
        ClientesComponent,
        EditarProductoModalComponent,
        CrearProductoModalComponent
    ],
    imports: [
        PRIVADO_ROUTES,
        CommonModule,
        HttpClientModule,
        FormsModule

    ],
    providers: [ProductosServiceService, EditarModalServiceService, CrearProductoModalServiceService],
    bootstrap: [AppComponent]
})
export class privadoModule{};
