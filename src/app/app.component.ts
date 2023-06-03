import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  userName = 'Maria Arlyanne';

  dadosUsuario = {
    email: 'mariaarlyanne@teste.com.br',
    role: 'Estudante/Programadora',
    instituicao: 'Unifametro',
    idade: '28',
    altura: '1.59',
    cor: 'Parda,',
    estadoCivil: 'Namorando',
    corPreferida: 'Vermelha',
    time: 'Flamengo',
    hobbies: 'Estudar, Jogar bola, ler livros'





  }  
  
  title = 'curso-angular';
}
