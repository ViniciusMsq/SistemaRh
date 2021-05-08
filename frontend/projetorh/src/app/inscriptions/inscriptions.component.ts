import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CandidatosComponent } from '../candidatos/candidatos.component';
import { CandidatosService } from '../candidatos/candidatos.service';
import { Usuario } from '../login/usuario.model';
import { InscriptionModel } from './inscriptions.model';
import { InscriptionsService } from './inscriptions.service';

@Component({
  selector: 'app-inscriptions',
  templateUrl: './inscriptions.component.html',
  styleUrls: ['./inscriptions.component.css']
})
export class InscriptionsComponent implements OnInit {

  inscription: InscriptionModel = new InscriptionModel();
  inscriptions: Array<any> =  new Array();

  candidatos: Array<any> = new Array();

  usuario: Usuario = new Usuario();

  constructor(private inscriptionService: InscriptionsService, private candidatosService: CandidatosService, private router:Router) { }

  ngOnInit(): void {
    this.listarCandidatos();
  }
  
  listarCandidatos() {
    this.candidatosService.listarCandidatos().subscribe(candidatos => {
      this.candidatos = candidatos;
    }, err => {
      console.log("Erro ao listar Candidatos", err);
    })
  }
  cadastrar(){
    this.inscriptionService.cadastrarInscricao(this.inscription).subscribe(inscription =>{
      this.inscription = new InscriptionModel();
    }, err =>{
      console.log("Erro cadastrar inscricao ", err)
    })
  }

  fazerLogin(){
    for (let i = 0; i < this.candidatos.length; i++) {
      if(this.candidatos[i].login == this.usuario.login && this.candidatos[i].senha == this.usuario.senha){
        this.router.navigate([`/candidatoVaga`, this.candidatos[i].id]);
      }
    }
  }
}
