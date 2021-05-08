import { Component, OnInit } from '@angular/core';
import { CandidatosService } from './candidatos.service';

import { CandidatoModel } from './candidato.model';
import { InscriptionModel } from '../inscriptions/inscriptions.model';
import { InscriptionsService } from '../inscriptions/inscriptions.service';
import { VagaModel } from '../vagas/vaga.model';
import { VagasService } from '../vagas/vagas.service';

@Component({
  selector: 'app-candidatos',
  templateUrl: './candidatos.component.html',
  styleUrls: ['./candidatos.component.css']
})
export class CandidatosComponent implements OnInit {

  candidato: CandidatoModel = new CandidatoModel();
  candidatos: Array<any> = new Array();

  inscription: InscriptionModel = new InscriptionModel();
  inscriptions: Array<any> = new Array();

  inscriptionId: InscriptionModel = new InscriptionModel();
  inscriptionIds: Array<any> = new Array();

  vaga: VagaModel = new VagaModel();
  vagas: Array<any> = new Array();

  constructor(private candidatosService: CandidatosService, private inscriptionService: InscriptionsService, private vagasService: VagasService) {
  }

  ngOnInit(): void {
    this.listarCandidatos();
    this.listarInscricoes();
    this.listarVagas();
  }

  cadastrar() {
    console.log(this.candidato);

    this.candidatosService.cadastrarCandidato(this.candidato).subscribe(candidato => {
      this.candidato = new CandidatoModel();
      this.listarCandidatos();
      this.listarInscricoes();
      this.listarVagas();
    }, err => {
      console.log("Erro ao cadastrar Candidato", err)
    })
  }

  atualizar(id: number) {
    this.candidatosService.atualizarCandidato(id, this.candidato).subscribe(candidato => {
      this.candidato = new CandidatoModel();
      this.listarCandidatos();
      this.listarInscricoes();
    }, err => {
      console.log("Erro ao atualizar Candidato", err)
    })
  }

  remover(id: number) {
    this.candidatosService.removerCandidato(id).subscribe(candidato => {
      this.candidato = new CandidatoModel();
      this.listarCandidatos();
      this.listarInscricoes();
    }, err => {
      console.log("Erro ao remover Candidato", err)
    })
  }

  listarCandidatos() {
    this.candidatosService.listarCandidatos().subscribe(candidatos => {
      this.candidatos = candidatos;
      this.listarVagas();
    }, err => {
      console.log("Erro ao listar Candidatos", err);
    })
  }

  cadInscricao() {
    this.inscriptionService.cadastrarInscricao(this.inscription).subscribe(inscription => {
      this.inscription = new InscriptionModel();
      this.listarInscricoes();
    }, err => {
      console.log("Erro cadastrar inscricao ", err)
    })
  }

  listarInscricoes() {
    this.inscriptionService.listarInscricoes().subscribe(inscriptions => {
      this.inscriptions = inscriptions;
      console.log(this.inscriptions);
    }, err => {
      console.log("Erro ao listar inscricao", err);
    })
  }

  listarInscricoesId(id: any) {
    this.inscriptionService.listarInscricoesId(id).subscribe(inscription => {
      this.inscriptionId = inscription;
    }, err => {
      console.log("Erro ao listar inscricao", err);
    })
  }

  listarVagas() {
    this.vagasService.listarVagas().subscribe(vagas => {
      this.vagas = vagas;
    }, err => {
      console.log("Erro ao listar Vagas", err);
    })
  }

}

