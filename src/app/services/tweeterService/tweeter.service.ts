import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Tweet } from 'src/app/models/tweet';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TweeterService {
  private requestUrl = environment.baseUrl + environment.tweeterUrl;

  constructor(private httpClient: HttpClient) { }

  getTweets(): Observable<Tweet[]> {
  return this.httpClient.get<Tweet[]>(this.requestUrl)
  }
}
