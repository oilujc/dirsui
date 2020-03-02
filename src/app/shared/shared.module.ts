import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DirsComponent } from './components/dirs/dirs.component';

@NgModule({
    declarations: [
        DirsComponent
    ],
    imports: [
        CommonModule
    ],
    exports: [
        DirsComponent
    ]
})
export class SharedModule { }
