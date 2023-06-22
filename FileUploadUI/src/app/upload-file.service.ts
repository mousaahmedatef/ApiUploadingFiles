import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UploadFileService {

  constructor(private _http :HttpClient) { }

  AddOneFile(FormData:any)
  {
    return this._http.post("http://localhost:51375/Api/UploadFile" , FormData ,{responseType: 'text'});
  }

  AddManyFiles(FormData:any){
    return this._http.post("http://localhost:51375/Api/UploadManyFiles" , FormData , {responseType: 'text'});
  }

  AddDataWithFileProperty(FormData:any){
    return this._http.post("http://localhost:51375/Api/AddDataWithFileProperty" , FormData , {responseType: 'text'});
  }
}
