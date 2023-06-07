import { Component } from '@angular/core';
import { ColdObservable } from 'rxjs/internal/testing/ColdObservable';

@Component({
  selector: 'app-firts-component',
  templateUrl: './firts-component.component.html',
  styleUrls: ['./firts-component.component.css']
})
export class FirtsComponentComponent {
name = 'Matheus Battisti';
platform = 'Youtube';
namePag =  'Angular - Hora de Cordar';
year = '2022';
duration = '44hrs'
}
