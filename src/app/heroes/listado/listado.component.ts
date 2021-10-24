import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
})
export class ListadoComponent  {

  heroes : string [] = ['Spiderman', 'Hulk','Batman', 'Superman', 'Ironman'];
  heroeBorrado: string  ='';
  borrando(){
    this.heroeBorrado = this.heroes.shift() || '';
    
  }

}
