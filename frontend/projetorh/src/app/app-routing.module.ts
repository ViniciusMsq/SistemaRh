import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { CandidatoVagaComponent } from './candidato-vaga/candidato-vaga.component';
import { CandidatosComponent } from './candidatos/candidatos.component';
import { AuthGuard } from './guards/auth.guard';
import { HomeComponent } from './home/home.component';
import { InscriptionsComponent } from './inscriptions/inscriptions.component';
import { LinguagensComponent } from './linguagens/linguagens.component';
import { LoginComponent } from './login/login.component';
import { VagasComponent } from './vagas/vagas.component';

const routes: Routes = [
  {path:"", component: AppComponent, canActivate:[AuthGuard]},
  {path:"inscricoes", component: InscriptionsComponent, canActivate:[AuthGuard]},
  {path:"candidatos", component: CandidatosComponent, canActivate:[AuthGuard]},
  {path:"vagas", component: VagasComponent, canActivate:[AuthGuard]},
  {path:"linguagens", component:LinguagensComponent, canActivate:[AuthGuard]},
  {path:"home", component: HomeComponent, canActivate:[AuthGuard]},
  {path:"login", component: LoginComponent},
  {path:"candidatoVaga/:id", component: CandidatoVagaComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
