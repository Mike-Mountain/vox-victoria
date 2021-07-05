import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Quote } from '../models/quote.model';

@Injectable({
  providedIn: 'root'
})
// TODO: Create base http service to extend
export class QuoteService {

  constructor(private http: HttpClient) { }

  getQuote(): Observable<Quote[]> {
    return this.http.get<Quote[]>('/api');
  }
}
