import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class NewsService {
  api_key = '2b81decb9bf44867a8bc9ff240061fdb';
  constructor(private http: HttpClient) {}

  getAllNews() {
    return this.http.get(
      'https://newsapi.org/v2/top-headlines?country=tr&apiKey=' + this.api_key
    );
  }

  getArticlesByCategory(category: string) {
    return this.http.get(
      'https://newsapi.org/v2/top-headlines?country=tr&category=' +
        category +
        '&apiKey=' +
        this.api_key
    );
  }
}