import { HtmlParser } from '@angular/compiler';
import { Component } from '@angular/core';
import { persona } from './persona.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  titulo = 'listado de personas';
  personas: persona[] = [new persona("juan", "perez"),
  new persona("anita","ramirez"),
  new persona("Carmen","ateortua")
  ];

  nombreInput: string = '';
  apellidoInput: string = ''; 

  agregar()
  {
    if(this.nombreInput == "" && this.apellidoInput == ""){
      
      alert("completa el texto")
      return;
    }
    let persona1 = new persona(this.nombreInput,this.apellidoInput)
    this.personas.push(persona1)
  }
}
