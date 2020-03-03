import { Component, OnInit } from '@angular/core';
import { DocumentsService } from 'src/app/core/services/documents.service';
import { Observable } from 'rxjs';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

declare const $: any;

@Component({
    selector: 'app-dirs',
    templateUrl: './dirs.component.html',
    styleUrls: ['./dirs.component.scss']
})
export class DirsComponent implements OnInit {

    buckets: any;
    selectedBucket: any;
    toUpdateBucket: any;
    bucketForm: FormGroup;
    errorMessage: any;

    constructor(
        private documentService: DocumentsService,
        private fb: FormBuilder
    ) { }

    ngOnInit() {
        this.listBuckets();

        this.bucketForm = this.fb.group({
            name: ['', Validators.required],
            parent: [null]
        });
    }

    closeAlert() {
        this.errorMessage = null;
    }

    showModal(action, bucket?) {

        this.bucketForm = this.fb.group({
            name: ['', Validators.required],
            parent: [null]
        });

        if (this.selectedBucket.id) {
            this.bucketForm.controls.parent.setValue(this.selectedBucket.id);
        }

        if (action === 'update' && bucket) {
            this.toUpdateBucket = bucket;
            this.bucketForm.controls.name.setValue(bucket.name);
        }
        $('#bucketAction').modal('show');

    }

    onSubmit() {

        if (this.bucketForm.valid) {
            const value = this.bucketForm.value;

            if (!this.toUpdateBucket || this.toUpdateBucket === null) {
                this.documentService.createBucket(value).subscribe(data => {

                    $('#bucketAction').modal('hide');
                    this.listBuckets();

                    if (this.selectedBucket.id) {
                        this.getBucket(this.selectedBucket.slug);
                    }
                });
            } else {
                this.documentService.putBucket(this.toUpdateBucket.slug, value).subscribe(data => {

                    this.toUpdateBucket = null;

                    $('#bucketAction').modal('hide');
                    this.listBuckets();
                    this.getBucket(this.selectedBucket.slug);
                });
            }
        }
    }

    listBuckets() {
        this.documentService.getBucket().subscribe(data => {
            this.buckets = data;
            if (this.selectedBucket === undefined) {
                this.selectedBucket = this.buckets;
            }
        });
    }

    getBucket(slug) {
        this.documentService.getBucket(slug).subscribe(data => {
            this.selectedBucket = data;
        }, err => {
            this.selectedBucket = null;
            this.errorMessage = err.error.detail;
            $('.alert').alert();
        });
    }

    deleteBucket(slug) {
        this.documentService.deleteBucket(slug).subscribe(data => {
            this.selectedBucket = null;
            this.listBuckets();
        });
    }

}
