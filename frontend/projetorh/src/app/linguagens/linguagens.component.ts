import { Component, OnInit } from '@angular/core';
import { LinguagemModel } from './linguagem.model';
import { LinguagensService } from './linguagens.service';

@Component({
  selector: 'app-linguagens',
  templateUrl: './linguagens.component.html',
  styleUrls: ['./linguagens.component.css']
})
export class LinguagensComponent implements OnInit {

  linguagem: LinguagemModel = new LinguagemModel();
  linguagens: Array<any> = new Array();

  constructor(private linguagensService: LinguagensService) { }

  ngOnInit(): void {
    this.listarlinguagens();
  }
  cadastrar(){
    console.log(this.linguagem);

    this.linguagensService.cadastrarlinguagem(this.linguagem).subscribe(linguagem => {
      this.linguagem = new LinguagemModel();
      this.listarlinguagens();
    }, err =>{
      console.log("Erro ao cadastrar aluno", err)
    })
  }

  atualizar(id: number ){
    this.linguagensService.atualizarlinguagem(id, this.linguagem).subscribe(linguagem => {
      this.linguagem = new LinguagemModel();
      this.listarlinguagens();
    }, err =>{
      console.log("Erro ao atualizar aluno", err)
    })
  }

  remover(id:number){
    this.linguagensService.removerlinguagem(id).subscribe(linguagem => {
      this.linguagem = new LinguagemModel();
      this.listarlinguagens();
    },err =>{
      console.log("Erro ao remover aluno", err)
    })
  }

  listarlinguagens(){
    this.linguagensService.listarLinguagens().subscribe(linguagems => {
      this.linguagens = linguagems;
    }, err => {
      console.log("Erro ao listar alunos", err);
    })
  }
}
