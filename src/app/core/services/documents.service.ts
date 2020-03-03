import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
    providedIn: 'root'
})
export class DocumentsService {

    constructor(
        private http: HttpClient
    ) { }


    getBucket(slug?) {
        if (slug) {
            return this.http.get(`${environment.apiUrl}/documents/bucket/${slug}/`);
        }
        return this.http.get(`${environment.apiUrl}/documents/bucket/`);
    }

    createBucket(data) {
        return this.http.post(`${environment.apiUrl}/documents/bucket/`, data);
    }

    putBucket(slug, data) {
        return this.http.put(`${environment.apiUrl}/documents/bucket/${slug}/`, data);
    }

    deleteBucket(slug) {
        return this.http.delete(`${environment.apiUrl}/documents/bucket/${slug}/`);
    }
}
