import { GestionVentasComponent } from './gestion-ventas/gestion-ventas.component';
import { PedidosComponent } from './pedidos/pedidos.component';
import { CatalogoServiciosComponent } from './catalogo-servicios/catalogo-servicios.component';
import { CatalogoProductosComponent } from './catalogo-productos/catalogo-productos.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PagesComponent } from './pages.component';
import { Routes, RouterModule } from '@angular/router';
import { ClientesComponent } from './clientes/clientes.component';
import { ReportesComponent } from './reportes/reportes.component';

const baseTitulo = 'Tante Lise - Admin | ';

const privadoRoutes: Routes = [{
    path: '',
    component: PagesComponent,
    children: [
        { path: 'dashboard', component: DashboardComponent, data: {titulo: baseTitulo + 'Dashboard'}},
        { path: 'catalogo-productos', component: CatalogoProductosComponent, data: {titulo: baseTitulo + 'Catálogo de productos'}},
        { path: 'catalogo-servicios', component: CatalogoServiciosComponent, data: {titulo: baseTitulo + 'Catálogo de servicios'}},
        { path: 'pedidos', component: PedidosComponent, data: {titulo: baseTitulo + 'Pedidos'}},
        { path: 'gestion-ventas', component: GestionVentasComponent, data: {titulo: baseTitulo + 'Gestión de ventas'}},
        { path: 'clientes', component: ClientesComponent, data: {titulo: baseTitulo + 'Clientes'}},
        { path: 'reportes', component: ReportesComponent, data: {titulo: baseTitulo + 'Reportes'}},
        { path: '', component: DashboardComponent, data: {titulo: baseTitulo + 'Dashboard'}}

    ]
}
];

export const PRIVADO_ROUTES  = RouterModule.forChild(privadoRoutes);
