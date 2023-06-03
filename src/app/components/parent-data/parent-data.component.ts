import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-parent-data',
  templateUrl: './parent-data.component.html',
  styleUrls: ['./parent-data.component.css']
})
export class ParentDataComponent {

  @Input() name: string = '';
  @Input() dadosUsuario!:
    {email: string, 
     role: string,
     instituicao: string, 
     idade: string, 
     altura: string, 
     cor: string, 
     estadoCivil: string, 
     corPreferida: string, 
     time: string, 
     hobbies: string
    }


}
