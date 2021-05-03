import { EventEmitter, Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BlockLike } from 'typescript';
import { Usuario } from './usuario.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private usuarioAutenticado: boolean =false;

  mostrarMenuEmitter = new EventEmitter<boolean>();


  constructor(private router: Router) { 

  }

  fazerLogin(usuario:Usuario){
    if(usuario.login ==="Admin" && usuario.senha==="root"){
      this.usuarioAutenticado = true;
      
      this.mostrarMenuEmitter.emit(true);
      this.router.navigate(['/'])
      
    }else{
      this.usuarioAutenticado = false;
      this.mostrarMenuEmitter.emit(false);
    }
  }

  usuarioEstaAutenticado(){
    return this.usuarioAutenticado;
  }
}
