import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DatalistingService {
  constructor(private httpClient: HttpClient) {}

  public getQuotes(): Observable<any> {
    const url = `https://random-quotes.now.sh/get-all-quotes`;

    return this.httpClient.get(url);
  }
  public getGithubRepos(name: string): Observable<any> {
    const url = `https://api.github.com/users/${name}/repos`;

    return this.httpClient.get(url);
  }
}
