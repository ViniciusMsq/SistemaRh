import { Component, OnInit } from '@angular/core';
import { ToolModel } from './tool.model';
import { ToolsService } from './tools.service';

@Component({
  selector: 'app-tools',
  templateUrl: './tools.component.html',
  styleUrls: ['./tools.component.css']
})
export class ToolsComponent implements OnInit {

  tool: ToolModel = new ToolModel();
  tools: Array<any> =  new Array();

  constructor(private toolsService: ToolsService) { }

  ngOnInit(): void {
    
  }

  cadastrar(){
    this.toolsService.cadastrarFerramenta(this.tool).subscribe(tool =>{
      this.tool = new ToolModel();
    }, err =>{
      console.log("Erro cadastrar ferramenta ", err)
    })
  }
}
