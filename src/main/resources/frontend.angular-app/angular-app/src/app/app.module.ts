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
import { DocumenteComponent } from './documente/documente.component';
import {MatIconModule} from "@angular/material/icon";
import {MatTableModule} from "@angular/material/table";
import {MatPaginatorModule} from "@angular/material/paginator";
import {MatSortModule} from "@angular/material/sort";
import { AddDocComponent } from './add-doc/add-doc.component';
import { DelDocComponent } from './del-doc/del-doc.component';
import {MatSelectModule} from "@angular/material/select";
import {MatDatepickerModule} from "@angular/material/datepicker";
import { StareTehnicaComponent } from './stare-tehnica/stare-tehnica.component';
import { AddMasinaComponent } from './add-masina/add-masina.component';
import { DelMasinaComponent } from './del-masina/del-masina.component';
import { AddStareComponent } from './add-stare/add-stare.component';
import { DelStareComponent } from './del-stare/del-stare.component';

const appRoutes: Routes = [
  {path: 'signup', component: SignupComponent},
  {path: 'myaccount', component: ContulMeuComponent},
  {path: 'login', component: LoginComponent},
  {path: 'platforma', component: PlatformaComponent},
  {path: 'lista-masini', component: ListaMasiniComponent},
  {path: 'documente', component: DocumenteComponent},
  {path: 'add-doc', component: AddDocComponent},
  {path: 'del-doc', component: DelDocComponent},
  {path: 'add-car', component: AddMasinaComponent},
  {path: 'del-car', component: DelMasinaComponent},
  {path: 'stare-tehnica', component: StareTehnicaComponent},
  {path: 'add-stare', component: AddStareComponent},
  {path: 'del-stare', component: DelStareComponent},
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
    ContulMeuComponent,
    DocumenteComponent,
    AddDocComponent,
    DelDocComponent,
    StareTehnicaComponent,
    AddMasinaComponent,
    DelMasinaComponent,
    AddStareComponent,
    DelStareComponent
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
    MatMenuModule,
    MatIconModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatSelectModule,
    MatDatepickerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
