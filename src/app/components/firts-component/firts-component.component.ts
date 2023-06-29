import { Component } from '@angular/core';

@Component({
  selector: 'app-firts-component',
  templateUrl: './firts-component.component.html',
  styleUrls: ['./firts-component.component.css']
})
export class FirtsComponentComponent {
  name = "Maria";
  age = "28";
  profile = 'Estudante';
  hobbies = ['Estudar', 'Futebol', 'Ler'] // Utilizando array
  car = {
    marca: 'FIAT',
    modelo: 'Argo',
    motor: '1.0 - Drive',
    ano: '20/21',
    cor: 'Vermelha'
  }


}