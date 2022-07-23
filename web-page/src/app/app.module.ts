import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CategoriasComponent } from './categorias/categorias.component';
import { MusicaComponent } from './musica/musica.component';

@NgModule({
  declarations: [
    AppComponent,
    CategoriasComponent,
    MusicaComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
