import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { InscriptionModel } from './inscriptions.model';

@Injectable({
  providedIn: 'root'
})
export class InscriptionsService {

  constructor(private http: HttpClient) { }

  listarInscricoes() : Observable<any>{
    return this.http.get("http://127.0.0.1:8000/api/inscricoes");
  }
  listarInscricoesId(id:any) : Observable<any>{
    return this.http.get("http://127.0.0.1:8000/api/inscricoes/".concat(id));
  }
  cadastrarInscricao(inscription: InscriptionModel): Observable<any>{
    return this.http.post("http://127.0.0.1:8000/api/inscricoes", inscription);
  }
  removerInscricao(id:any): Observable<any>{
    return this.http.delete("http://127.0.0.1:8000/api/inscricoes/".concat(id));
  }
}
