import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { VagaModel } from './vaga.model';

@Injectable({
  providedIn: 'root'
})
export class VagasService {

  constructor(private http: HttpClient) { }

  listarVagas() : Observable<any>{
    return this.http.get("http://localhost:8000/api/vagas");
  }
  
  cadastrarVaga(vaga: VagaModel) : Observable<any>{
    return this.http.post("http://localhost:8000/api/vagas", vaga);
  }

  atualizarVaga(id: any, vaga: VagaModel) : Observable<any>{
    return this.http.put("http://localhost:8000/api/vagas/".concat(id), vaga);
  }

  removerVaga(id:any): Observable<any>{
    return this.http.delete("http://localhost:8000/api/vagas/".concat(id));
  }
}
