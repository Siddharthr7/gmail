import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';

import { MainbodyComponent } from './mainbody/mainbody.component';
import { HeaderOfBodyComponent } from './mainbody/header-of-body/header-of-body.component';
import { LoginPageComponent } from './mainbody/login-page/login-page.component';
import { BodyComponent } from './mainbody/body/body.component';
import { FooterComponent } from './footer/footer.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
  
    MainbodyComponent,
    HeaderOfBodyComponent,
    LoginPageComponent,
    BodyComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
