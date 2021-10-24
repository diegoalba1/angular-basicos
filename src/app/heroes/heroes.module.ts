import { CommonModule } from '@angular/common';
import {NgModule} from '@angular/core';
import { HeroeComponent } from './heroe/heroe.component';
import { ListadoComponent } from './listado/listado.component';

@NgModule({
    declarations:[
        HeroeComponent,
        ListadoComponent
    ],
    exports:[ // lo que quiero que sea publico que se pueda ver en otros modulos.
        ListadoComponent
    ],
    imports:[  // lo que queremos importar, aqui solo van modulos.
        CommonModule
    ]
})

export class HeroesModule{}