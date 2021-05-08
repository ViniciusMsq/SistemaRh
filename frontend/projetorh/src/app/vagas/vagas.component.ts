import { Component, OnInit } from '@angular/core';
import { LinguagemModel } from '../linguagens/linguagem.model';
import { LinguagensService } from '../linguagens/linguagens.service';
import { ToolModel } from '../tools/tool.model';
import { ToolsComponent } from '../tools/tools.component';
import { ToolsService } from '../tools/tools.service';
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

  tool: ToolModel = new ToolModel();
  tools: Array<any> =  new Array();

  toolId: ToolModel = new ToolModel();
  toolIds: Array<any> =  new Array();
  
  constructor(private vagasService: VagasService, private linguagemService: LinguagensService, private toolsService: ToolsService) { 
  }

  ngOnInit(): void {
    this.listarVagas();
    this.listarLinguagens();
    this.listarFerramentas();
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
      this.listarFerramentas();
      this.listarVagas();
    }, err =>{
      console.log("Erro ao atualizar Vaga", err)
    })
  }

  remover(id:number){
    this.vagasService.removerVaga(id).subscribe(vaga => {
      this.vaga = new VagaModel();
      this.listarFerramentas();
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

  cadFerramenta(){
    this.toolsService.cadastrarFerramenta(this.tool).subscribe(tool =>{
      this.tool = new ToolModel();
      this.listarFerramentas();
    }, err =>{
      console.log("Erro cadastrar ferramenta ", err)
    })
  }

  listarFerramentas(){
    this.toolsService.listarFerramentas().subscribe(tools => {
      this.tools = tools;
    }, err => {
      console.log("Erro ao listar Ferramenetas", err);
    })
  }
  listarFerramentasId(id: any){
    this.toolsService.listarFerramentasId(id).subscribe(tool => {
      this.toolIds = tool;
    }, err => {
      console.log("Erro ao listar Ferramenetas", err);
    })
  }
}
