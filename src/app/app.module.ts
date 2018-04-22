import { privadoModule } from './pages/privado.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';


import { APP_ROUTES } from './app.routes';
import { LoginComponent } from './login/login.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    PagenotfoundComponent
  ],
  imports: [
    BrowserModule,
    APP_ROUTES,
    privadoModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
