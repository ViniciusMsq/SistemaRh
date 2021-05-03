import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { LinguagemModel } from './linguagem.model';

@Injectable({
  providedIn: 'root'
})
export class LinguagensService {

  constructor(private http:HttpClient) { }


  listarLinguagens() : Observable<any>{
    return this.http.get("http://localhost:8000/api/linguagens");
  }
  cadastrarlinguagem(linguagem: LinguagemModel) : Observable<any>{
    return this.http.post("http://localhost:8000/api/linguagens", linguagem);
  }

  atualizarlinguagem(id: any, linguagem: LinguagemModel) : Observable<any>{
    return this.http.put("http://localhost:8000/api/linguagens/".concat(id), linguagem);
  }

  removerlinguagem(id:any): Observable<any>{
    return this.http.delete("http://localhost:8000/api/linguagens/".concat(id));
  }
}
