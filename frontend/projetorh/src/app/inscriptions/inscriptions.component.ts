import { Component, OnInit } from '@angular/core';
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

  constructor(private inscriptionService: InscriptionsService) { }

  ngOnInit(): void {
    
  }

  cadastrar(){
    this.inscriptionService.cadastrarInscricao(this.inscription).subscribe(inscription =>{
      this.inscription = new InscriptionModel();
    }, err =>{
      console.log("Erro cadastrar inscricao ", err)
    })
  }

}
