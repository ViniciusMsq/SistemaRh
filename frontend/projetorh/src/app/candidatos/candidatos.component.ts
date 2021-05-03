import { Component, OnInit } from '@angular/core';
import { CandidatosService } from './candidatos.service';

import { CandidatoModel } from './candidato.model';

@Component({
  selector: 'app-candidatos',
  templateUrl: './candidatos.component.html',
  styleUrls: ['./candidatos.component.css']
})
export class CandidatosComponent implements OnInit {

  candidato: CandidatoModel = new CandidatoModel();
  candidatos: Array<any> = new Array();
  
  constructor(private candidatosService: CandidatosService) { 
  }

  ngOnInit(): void {
    this.listarCandidatos();
  }

  cadastrar(){
    console.log(this.candidato);

    this.candidatosService.cadastrarCandidato(this.candidato).subscribe(candidato => {
      this.candidato = new CandidatoModel();
      this.listarCandidatos();
    }, err =>{
      console.log("Erro ao cadastrar aluno", err)
    })
  }

  atualizar(id: number ){
    this.candidatosService.atualizarCandidato(id, this.candidato).subscribe(candidato => {
      this.candidato = new CandidatoModel();
      this.listarCandidatos();
    }, err =>{
      console.log("Erro ao atualizar aluno", err)
    })
  }

  remover(id:number){
    this.candidatosService.removerCandidato(id).subscribe(candidato => {
      this.candidato = new CandidatoModel();
      this.listarCandidatos();
    },err =>{
      console.log("Erro ao remover aluno", err)
    })
  }

  listarCandidatos(){
    this.candidatosService.listarCandidatos().subscribe(candidatos => {
      this.candidatos = candidatos;
    }, err => {
      console.log("Erro ao listar alunos", err);
    })
  }
}

