import { Component, OnInit } from '@angular/core';
import { LinguagemModel } from '../linguagens/linguagem.model';
import { LinguagensService } from '../linguagens/linguagens.service';
import { VagaModel } from './vaga.model';
import { VagasService } from './vagas.service';

@Component({
  selector: 'app-vagas',
  templateUrl: './vagas.component.html',
  styleUrls: ['./vagas.component.css']
})
export class VagasComponent implements OnInit {

  vaga: VagaModel = new VagaModel();
  vagas: Array<any> = new Array();

  linguagem: LinguagemModel = new LinguagemModel();
  linguagens: Array<any> = new Array();
  
  constructor(private vagasService: VagasService, private linguagemService: LinguagensService) { 
  }

  ngOnInit(): void {
    this.listarVagas();
    this.listarLinguagens();
  }

  cadastrar(){
    console.log(this.vaga);

    this.vagasService.cadastrarVaga(this.vaga).subscribe(vaga => {
      this.vaga = new VagaModel();
      this.listarVagas();
    }, err =>{
      console.log("Erro ao cadastrar Vaga", err)
    })
  }

  atualizar(id: number ){
    this.vagasService.atualizarVaga(id, this.vaga).subscribe(vaga => {
      this.vaga = new VagaModel();
      this.listarVagas();
    }, err =>{
      console.log("Erro ao atualizar Vaga", err)
    })
  }

  remover(id:number){
    this.vagasService.removerVaga(id).subscribe(vaga => {
      this.vaga = new VagaModel();
      this.listarVagas();
    },err =>{
      console.log("Erro ao remover Vaga", err)
    })
  }

  listarVagas(){
    this.vagasService.listarVagas().subscribe(vagas => {
      this.vagas = vagas;
    }, err => {
      console.log("Erro ao listar Vagas", err);
    })
  }

  listarLinguagens(){
    this.linguagemService.listarLinguagens().subscribe(linguagens => {
      this.linguagens = linguagens;
    }, err => {
      console.log("Erro ao listar linguagens", err);
    })
  }
}
