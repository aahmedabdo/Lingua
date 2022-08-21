import { Observable } from 'rxjs/Rx';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { DomSanitizer } from '@angular/platform-browser';
import { Global } from '../Global/Global';

export interface IRate{
  _Id:string,
  RateCount:string,
  Name:string,
  Notes:string,
  CreationDate:Date;
}

@Injectable({
  providedIn: 'root'
})

export class RateServiceService {
  httpOptions = {
    headers: new HttpHeaders()
      .append('Content-Type', 'application/json')
      .append('Access-Control-Allow-Headers', 'X-Requested-With,content-type')
      .append('Access-Control-Allow-Origin', '*')
      .append('Access-Control-Allow-Credentials', 'true')

  };
  constructor(private http: HttpClient) { }

  //url common
  GlobalUrl = Global.urls.GlobalUrl;

  //rate Crud operations
  UrlGetAllRates = this.GlobalUrl + '/Rate/GetAll';
  UrlGetOneRateById = this.GlobalUrl + '/Rate/GetOne/';
  UrlSaveRate = this.GlobalUrl + '/Rate/Create';
  UrlUpdateRate = this.GlobalUrl + '/Rate/Update/';
  UrlDeleteRate = this.GlobalUrl + '/Rate/Delete/';
  UrlGetCount = this.GlobalUrl + '/Rate/GetCount';

//Service 
GetAllRates() {
  return this.http.get(this.UrlGetAllRates , this.httpOptions);
}

GetOneRateById(id:string) {
  return this.http.get(this.UrlGetOneRateById + id , this.httpOptions);
}

SaveRate(rateeee:any){
  return this.http.post<any>(this.UrlSaveRate,rateeee);
}

UpdateRate(id:string,rate:IRate) {
  return this.http.post<any>(this.UrlUpdateRate + id , rate , this.httpOptions);
}

DeleteRate(id:string) {
  return this.http.delete(this.UrlDeleteRate + id , this.httpOptions);
}

GetAllCounts() {
  return this.http.get(this.UrlGetCount , this.httpOptions);
}
}
