import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { CandidatoModel } from './candidato.model';


@Injectable({
  providedIn: 'root'
})
export class CandidatosService {

  constructor(private http: HttpClient) { }

  
  listarCandidatos() : Observable<any>{
    return this.http.get("http://localhost:8000/api/candidatos");
  }
  
  cadastrarCandidato(candidato: CandidatoModel) : Observable<any>{
    return this.http.post("http://localhost:8000/api/candidatos", candidato);
  }

  atualizarCandidato(id: any, candidato: CandidatoModel) : Observable<any>{
    return this.http.put("http://localhost:8000/api/candidatos/".concat(id), candidato);
  }

  removerCandidato(id:any): Observable<any>{
    return this.http.delete("http://localhost:8000/api/candidatos/".concat(id));
  }
}
