import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpEventType, HttpParams, HttpResponse , HttpHeaders } from '@angular/common/http';
import { environment } from './../../environments/environment'
import { Observable , of } from 'rxjs';
import { BehaviorSubject  } from 'rxjs';

export interface Data {
  firstname: string,
  lastname: string,
  address: string,
  state: string,
  pincode: number
}

@Injectable({
  providedIn: 'root'
})
export class DataService  {
private filePath = environment.filePath;
private csvData = new BehaviorSubject<any>("");
castCsvData = this.csvData.asObservable();


  constructor(private httpClient: HttpClient) { }

  getCsvData(){
    this.httpClient.get(this.filePath, {responseType: 'text'} )
      .subscribe(data => {
        this.setCsvData(data);
      });
         
  }

  setCsvData(data) {
    this.csvData.next(data);
  }
}
