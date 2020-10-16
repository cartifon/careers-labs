import { Component, OnInit } from '@angular/core';
import { ExchangeService } from './exchange.service';

interface Receipt {
  description: string;
  amount: number;
  currency: string;
}

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  reports: Receipt[] = [];

  total = 0;

  exchangeRates: any;

  public currencies: string[] = [
    'CAD',
    'HKD',
    'ISK',
    'PHP',
    'DKK',
    'HUF',
    'CZK',
    'GBP',
    'RON',
    'SEK',
    'IDR',
    'INR',
    'BRL',
    'RUB',
    'HRK',
    'JPY',
    'THB',
    'CHF',
    'EUR',
    'MYR',
    'BGN',
    'TRY',
    'CNY',
    'NOK',
    'NZD',
    'ZAR',
    'USD',
    'MXN',
    'SGD',
    'AUD',
    'ILS',
    'KRW',
    'PLN'
  ];

  constructor(private exchangeService: ExchangeService) { }

  ngOnInit(): void {
    this.exchangeService.getExchangeRates().subscribe((response: any) => {
      this.exchangeRates = response.rates;
    });
  }

  addReport(): void {
    this.reports.push({
      description: '',
      amount: 0,
      currency: 'CAD'
    });
  }

  isDisabled(): boolean {
    return this.reports.length >= 5;
  }

  updateTotal(): void {
    this.total = 0;
    this.reports.forEach(report => {
      this.total += report.amount / this.exchangeRates[report.currency];
    });

  }

  submitReport(): void {
    console.log(this.reports);
  }
}
