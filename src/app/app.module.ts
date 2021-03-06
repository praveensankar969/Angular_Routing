import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http'

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { UsersComponent } from './users/users.component';
import { ServersComponent } from './servers/servers.component';
import { UserComponent } from './users/user/user.component';
import { EditServerComponent } from './servers/edit-server/edit-server.component';
import { ServerComponent } from './servers/server/server.component';
import { ServersService } from './servers/servers.service';
import { RouterModule, Routes } from '@angular/router';
import { ErrorPageComponent } from './error-page/error-page.component';
import { UserActivate } from './users/user/user.service';
import { FormsComponent } from './forms/forms.component';
import { HttpModulesComponent } from './http-modules/http-modules.component';
import { AuthInterceptor } from './http-modules/auth-interceptor.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

const routes : Routes =[
  {path:'', component: HomeComponent},
  {path : 'users' , component : UsersComponent, children : [
    {path: ':id/:name', component:UserComponent}
  ]},
  {path: 'servers', component :  ServersComponent, children : [
    {path: ':id/edit', component:EditServerComponent},
    {path: ':id', component:ServerComponent}
  ]},
  {path: 'forms', component:FormsComponent},
  {path: 'httpmodule', component:HttpModulesComponent},
  {path: 'not-found', component: ErrorPageComponent},
  {path: '**', redirectTo:'/not-found'}
];



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    UsersComponent,
    ServersComponent,
    UserComponent,
    EditServerComponent,
    ServerComponent,
    ErrorPageComponent,
    FormsComponent,
    HttpModulesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(routes) ,
    BrowserAnimationsModule  
  ],
  providers: [ServersService, UserActivate,{
    provide :  HTTP_INTERCEPTORS,
    useClass : AuthInterceptor,
    multi : true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
