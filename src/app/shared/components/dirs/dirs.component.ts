import { Component, OnInit } from '@angular/core';
import { DocumentsService } from 'src/app/core/services/documents.service';
import { Observable } from 'rxjs';

@Component({
    selector: 'app-dirs',
    templateUrl: './dirs.component.html',
    styleUrls: ['./dirs.component.scss']
})
export class DirsComponent implements OnInit {

    buckets: any;
    selectedBucket: any;

    constructor(
        private documentService: DocumentsService
    ) { }

    ngOnInit() {
        this.documentService.getBucket().subscribe(data => {
            this.buckets = data;
            if (this.selectedBucket === undefined) {
                this.selectedBucket = this.buckets;
            }
        });
    }

    setBucket(slug) {
        console.log(slug);
        this.documentService.getBucket(slug).subscribe(data => {
            console.log(data);
            this.selectedBucket = data;
        })
    }

}
