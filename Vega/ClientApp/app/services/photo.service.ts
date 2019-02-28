import { Http } from '@angular/http';
import { Injectable } from '@angular/core';

@Injectable()
export class PhotoService {

    constructor(private http: Http) { }

    upload(vehicleId: number, photo: any) {
        var formData = new FormData();
        formData.append('file', photo)  //file debe ser el mismo nombre de la variable del server
        return this.http.post(`/api/vehicles/${vehicleId}/photos`, formData)
        .map(res => res.json());
    }
    getPhotos(vehicleId: any) {
        return this.http.get(`/api/vehicles/${vehicleId}/photos`)
          .map(res => res.json());
      }
}