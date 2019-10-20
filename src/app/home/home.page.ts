import { Component, OnInit } from '@angular/core';

import { DatalistingService } from '../datalisting.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss']
})
export class HomePage implements OnInit {
  constructor(private datalistingService: DatalistingService) {}
  loading = false;
  quotes = [];

  ngOnInit() {
    this.getAll();
  }

  getAll() {
    this.loading = true;

    console.log('get');
    this.datalistingService.getQuotes().subscribe(
      data => {
        this.loading = false;
        this.quotes = data.data;
        console.log('data', data);
      },
      error => {
        this.loading = false;

        console.log('error', error);
      }
    );
  }
}
