
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BlurService {

  constructor(private http: HttpClient) { }

  blurImageFaces(file: File){
    let blurImageFacesUrl: string = environment.baseUrl + environment.blurImageFaces;
    let formData:FormData = new FormData();
        formData.append('image', file, file.name);
    return this.http.post(blurImageFacesUrl, formData,{ responseType: "blob" });
  }
}
