import { Component, OnInit } from '@angular/core';

import { DatalistingService } from '../datalisting.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss']
})
export class HomePage implements OnInit {
  constructor(
    private datalistingService: DatalistingService,
    private httpClient: HttpClient
  ) {}
  loading = false;
  quotes = [];

  ngOnInit() {
    // this.getAll();
    this.getAllObservables();
  }

  async getAllAwait() {
    const result = await this.datalistingService.getQuotes().toPromise();
    console.log('result', result);
    this.quotes = result.data;
    console.log('asdasdasd vasdasdasd');
  }
  async getAllPromise() {
    const promise = new Promise((resolve, reject) => {
      const url = `https://random-quotes.now.sh/get-all-quotes`;
      resolve(this.httpClient.get(url).toPromise());
    });
    promise
      .then(res => {
        console.log('res', res);
        this.quotes = res['data'];
      })
      .catch(function(ex) {
        console.log('ex', ex);
      });

    console.log('xyz asdasd');
    console.log('xyz asdasdv123123 ');
  }

  getAllObservables() {
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
