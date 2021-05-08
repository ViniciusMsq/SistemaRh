import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import {HttpClientModule} from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';

import {CandidatosService} from './candidatos/candidatos.service';
import {FormsModule} from '@angular/forms';
import { CandidatosComponent } from './candidatos/candidatos.component';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { VagasComponent } from './vagas/vagas.component';
import { LinguagensComponent } from './linguagens/linguagens.component';
import { ToolsComponent } from './tools/tools.component';
import { InscriptionsComponent } from './inscriptions/inscriptions.component';
import { VagasService } from './vagas/vagas.service';
import { LinguagensService } from './linguagens/linguagens.service';
import { InscriptionsService } from './inscriptions/inscriptions.service';
import { ToolsService } from './tools/tools.service';
import { LoginComponent } from './login/login.component';
import { AuthService } from './login/auth.service';
import { HomeComponent } from './home/home.component';
import { AuthGuard } from './guards/auth.guard';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    CandidatosComponent,
    VagasComponent,
    LinguagensComponent,
    ToolsComponent,
    InscriptionsComponent,
    LoginComponent,
    HomeComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    NgbModule
  ],
  providers: [
    CandidatosService,
    VagasService,
    LinguagensService,
    InscriptionsService,
    ToolsService,
    AuthService,
    AuthGuard,
    HttpClientModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }