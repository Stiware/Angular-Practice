import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'calculadora-app';
  titulo= 'CALCULADORA'
  a = 0
  b = 0
  suma = 0;

  sumar(){
    this.suma = this.a + this.b;
  }

}
