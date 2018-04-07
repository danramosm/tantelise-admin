import { LoginComponent } from './login/login.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { Routes, RouterModule } from '@angular/router';

const appRoutes: Routes = [

    { path: 'login', component: LoginComponent},
    { path: 'notfound', component: PagenotfoundComponent}

];

export const APP_ROUTES = RouterModule.forRoot(appRoutes, {useHash: true});
