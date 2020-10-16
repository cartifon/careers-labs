import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  reports: any[] = [];

  constructor() { }

  ngOnInit(): void {
  }

  addReport(): void {
    this.reports.push({
      description: '',
      amount: 0,
      currency: 'CAD'
    });
  }

}
