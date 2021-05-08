import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { InscriptionsService } from '../inscriptions/inscriptions.service';

@Component({
  selector: 'app-candidato-vaga',
  templateUrl: './candidato-vaga.component.html',
  styleUrls: ['./candidato-vaga.component.css']
})
export class CandidatoVagaComponent implements OnInit {

  inscriptions: Array<any> = new Array();
  constructor(private route: ActivatedRoute, private inscriptionService: InscriptionsService) { }
  id = this.route.snapshot.params.id;
  ngOnInit(): void {
  }
  
  lista(){
    console.log(this.id);
    this.inscriptionService.listarInscricoesId(this.id).subscribe(inscriptions => {
      this.inscriptions = inscriptions;
      console.log(this.inscriptions);
    }, err => {
      console.log("Erro ao listar inscricao", err);
    })
  }

}
