import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-categorias',
  templateUrl: './categorias.component.html',
  styleUrls: ['./categorias.component.css']
})
export class CategoriasComponent {

  name = 'Stiware Quintero'
  titulo = "titulo"

  modName(event: Event){
    this.titulo = (<HTMLInputElement>event.target).value
  }

  change(event: Event){
    this.name = "Daniel galindo"
  }
  

}
