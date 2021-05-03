import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './login/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'projetorh';

  isCollapsed = true;

  mostrarMenu:boolean = false;

  constructor(private authService: AuthService, private router: Router){

  }

  ngOnInit(){
    this.authService.mostrarMenuEmitter.subscribe(
      mostrar => this.mostrarMenu = mostrar
    );
  }

  rotaHome(){
    this.router.navigate(['/']);
  }
  rotaCandidato(){
    this.router.navigate(['/candidatos']);
  }
  rotaVagas(){
    this.router.navigate(['/vagas']);
  }
  rotaLinguagens(){
    this.router.navigate(['/linguagens']);
  }
  rotaInscriptions(){
    this.router.navigate(['/inscricoes'])
  }
  
}
