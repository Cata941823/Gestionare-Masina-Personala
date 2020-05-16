import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {SignupComponent} from './signup/signup.component';
import {HttpClientModule} from "@angular/common/http";
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import {MatInputModule} from '@angular/material/input';
import {MatSliderModule} from '@angular/material/slider';
import {MatButtonModule} from '@angular/material/button';
import {FormsModule} from "@angular/forms";
import {LoginComponent} from './login/login.component';
import { PlatformaComponent } from './platforma/platforma.component';
import {MatMenuModule} from "@angular/material/menu";
import { ListaMasiniComponent } from './lista-masini/lista-masini.component';
import { AdminPanelComponent } from './admin-panel/admin-panel.component';
import { ContulMeuComponent } from './contul-meu/contul-meu.component';

const appRoutes: Routes = [
  {path: 'signup', component: SignupComponent},
  {path: 'login', component: LoginComponent},
  {path: 'platforma', component: PlatformaComponent},
  {path: '', redirectTo: '/signup', pathMatch: 'full'}
];

@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    LoginComponent,
    PlatformaComponent,
    ListaMasiniComponent,
    AdminPanelComponent,
    ContulMeuComponent
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        BrowserAnimationsModule,
        MatInputModule,
        MatSliderModule,
        MatButtonModule,
        FormsModule,
        RouterModule.forRoot(
            appRoutes,
            {enableTracing: true}
        ),
        MatMenuModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
