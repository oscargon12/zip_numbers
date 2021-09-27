import { NgModule } from '@angular/core'; //NgModule, me permite crear un modulo de Angular
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import {MatCardModule} from '@angular/material/card';

@NgModule({
    imports: [ // Llamamos lo que queremos importar 
        MatButtonModule,
        MatToolbarModule,
        MatIconModule,
        MatInputModule,
        MatCardModule
    ],
    exports: [
        MatButtonModule,
        MatToolbarModule,
        MatIconModule,
        MatInputModule,
        MatCardModule
    ] // Declaramos lo que queremos exportar 
})

export class MaterialModule {} //Nombre de la clase que exporto