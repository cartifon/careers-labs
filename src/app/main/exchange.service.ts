import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ExchangeService {

  currencyBase = 'base=CAD';
  constructor(private httpClient: HttpClient) { }

  getExchangeRates(): Observable<any[]> {
    return this.httpClient.get<any[]>(`${environment.exchangeApiUrl}?${this.currencyBase}`);
  }
}
