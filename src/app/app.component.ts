import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {  
  dadosUser= 'Dados para Cadastro:';

  userData = {
   name: 'Maria Arlyanne',
   email: 'maria@teste.com.br',
   role: 'Admin',
   

  }
  
  title = 'Curso-Angular';
}
