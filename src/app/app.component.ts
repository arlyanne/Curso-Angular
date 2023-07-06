import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
nomeUsuario = 'Maria';

dadosUsuario = {
  email: 'maria@teste.com',
  time: 'Flamengo',
}

  
  title = 'curso-angular';
}
