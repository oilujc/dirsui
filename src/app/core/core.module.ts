import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { UploadComponent } from './components/upload/upload.component';
import { DocumentsService } from './services/documents.service';

@NgModule({
  declarations: [HeaderComponent, FooterComponent, UploadComponent],
  imports: [
    CommonModule
  ],
  exports: [
    HeaderComponent,
    FooterComponent
  ],
  providers: [
    DocumentsService
  ]
})
export class CoreModule { }
