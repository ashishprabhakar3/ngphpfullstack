import { Component } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams, HttpErrorResponse } from '@angular/common/http';
import { Papa} from 'ngx-papaparse';
import { DataService } from './services/data.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  title = 'frontend';
  csvPath = "./../addresses.csv";
  fileData: any;
  jsonData: any; 

  constructor(private dataService: DataService, private papa: Papa) {
    // this.papa.parse(this.csvPath, {
    //   complete: (result) => {
    //     console.log('Parsed data', result);
    //   }
    // })
  }

  ngOnInit() {
    this.dataService.getCsvData();
    this.dataService.castCsvData.subscribe( data => {
      if(data && data.length > 0){
        this.fileData = data;
        console.log("filedata value", this.fileData);
        this.papa.parse(this.fileData, {
          complete: (result) => {
            console.log('parsed json data', result);
            this.jsonData = result;
          }
        })
      }
     
    }
      );
    
  }
}
