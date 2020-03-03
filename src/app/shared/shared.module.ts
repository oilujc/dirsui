import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DirsComponent } from './components/dirs/dirs.component';
import { ReactiveFormsModule } from '@angular/forms';
import { UploadComponent } from './components/upload/upload.component';
import { DndDirective } from './diretives/dnd.directive';
import { ProgressComponent } from './components/progress/progress.component';

@NgModule({
    declarations: [
        DirsComponent,
        UploadComponent,
        DndDirective,
        ProgressComponent
    ],
    imports: [
        CommonModule,
        ReactiveFormsModule
    ],
    exports: [
        DirsComponent
    ]
})
export class SharedModule { }
