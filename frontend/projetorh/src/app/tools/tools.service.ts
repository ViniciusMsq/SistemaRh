import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ToolModel } from './tool.model';

@Injectable({
  providedIn: 'root'
})
export class ToolsService {

  constructor(private http: HttpClient) { }

  listarFerramentas() : Observable<any>{
    return this.http.get("http://127.0.0.1:8000/api/ferramentas");
  }
  listarFerramentasId(id:any) : Observable<any>{
    return this.http.get("http://127.0.0.1:8000/api/ferramentas/".concat(id));
  }
  cadastrarFerramenta(tool: ToolModel): Observable<any>{
    return this.http.post("http://127.0.0.1:8000/api/ferramentas", tool);
  }
  removerFerramenta(id:any): Observable<any>{
    return this.http.delete("http://127.0.0.1:8000/api/ferramentas/".concat(id));
  }
}
