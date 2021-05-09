import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { InscriptionModel } from '../inscriptions/inscriptions.model';
import { InscriptionsService } from '../inscriptions/inscriptions.service';
import { ToolsService } from '../tools/tools.service';

@Component({
  selector: 'app-candidato-vaga',
  templateUrl: './candidato-vaga.component.html',
  styleUrls: ['./candidato-vaga.component.css']
})
export class CandidatoVagaComponent implements OnInit {
  
  inscription: InscriptionModel = new InscriptionModel();
  inscriptions: Array<any> = new Array();

  tools: Array<any> =  new Array();

  constructor(private route: ActivatedRoute, private inscriptionService: InscriptionsService, private toolsService:ToolsService) { }
  id = this.route.snapshot.params.id;
  ngOnInit(): void {
    this.lista();
    this.listarFerramentas();
  }
  
  lista(){
    this.inscriptionService.listarInscricoesId(this.id).subscribe(inscriptions => {
      this.inscriptions = inscriptions;
    }, err => {
      console.log("Erro ao listar inscricao", err);
    })
  }

  listarFerramentas(){
    this.toolsService.listarFerramentas().subscribe(tools => {
      this.tools = tools;
      console.log(this.tools);
    }, err => {
      console.log("Erro ao listar Ferramenetas", err);
    })
  }
  
  removerRelacao(id_candidato: any, id_vaga: any){
    this.inscriptionService.removerInscricao(id_candidato, id_vaga).subscribe(inscription => {
      this.inscription = new InscriptionModel(); 
      this.lista();
    }, err => {
      console.log("Erro ao remover relação candidato_vaga", err)
    })
  }

}
