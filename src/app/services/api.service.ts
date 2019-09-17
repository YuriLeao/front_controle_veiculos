import { POITempo } from './../models/POITempo.model';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }
  public getPOITempo(): Observable<any> {
    return this.http.get(`https://api-controle-veiculos.herokuapp.com/poitempo/poitempos/ / /`);
  }

  public getPOITempoParam(placa: string, data: string): Observable<any> {
    return this.http.get(`https://api-controle-veiculos.herokuapp.com/poitempo/poitempos/`+placa+`/`+data+`/`);
  }
}
