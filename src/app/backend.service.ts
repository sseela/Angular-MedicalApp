import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import { hasParentInjector } from '@angular/core/src/render3/util';
import { Observable } from 'rxjs';
import { PatientInfo } from './models/patientInfo.model';

@Injectable({
  providedIn: 'root'
})
export class BackendService {

  constructor(private http: HttpClient) { 
  }

  /* sendName(name: string) {
    let p = new HttpParams().append('name', name);
    return this.http.get('http://localhost:8080/storeName', {params: p, responseType: 'text'});
  } */

  savePatientInfo(patient: PatientInfo) {
      return this.http.post('http://localhost:8080/savePatientInfo', patient);
  }
}
