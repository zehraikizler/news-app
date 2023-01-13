import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class NewsService {
  api_key = '676f017549224f488970f1835f9db971';
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

  getUser() {
    return this.http.get('https://api.github.com/users/zehraikizler');
  }

  getUserRepos() {
    return this.http.get('https://api.github.com/users/zehraikizler/repos');
  }
}
