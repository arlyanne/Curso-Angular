import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-firts-component',
  templateUrl: './firts-component.component.html',
  styleUrls: ['./firts-component.component.css']
})
export class FirtsComponentComponent {

  name = "Maria";
  age = "28";
  job = 'Estudante de Programação';
  hobbies = ['Estudar', 'Futebol', 'Ler'] // Utilizando array
  car = {
    name: 'Argo',
    year: '20/21',
   
  }
}
