import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { pet } from '../interfaces/pet';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(
    private http: HttpClient,
  ) { }

  getData() {
    const url = 'https://data.moa.gov.tw/Service/OpenData/TransService.aspx?UnitId=IFJomqVzyB0i&IsTransData=1';

    return this.http.get<pet[]>(url);

  }
}
