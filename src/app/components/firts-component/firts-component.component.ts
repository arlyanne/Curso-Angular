import { Component } from '@angular/core';

@Component({
  selector: 'app-firts-component',
  templateUrl: './firts-component.component.html',
  styleUrls: ['./firts-component.component.css']
})
export class FirtsComponentComponent {

  name = 'Maria';
  age = '28';
  job = 'Estudante/Desenvolvedora';
  hobbies = ['Estudar', 'Ler livros', 'Jogar Bola'];
  car = {
    name: "Argo",
    year: "2020"
  }
}
