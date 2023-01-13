import { Component, OnInit } from '@angular/core';
import { NewsService } from '../service/news.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  p: number = 1;
  collection: any = [];

  public sources: any = [];
  public totalResults: any;

  constructor(private newsApi: NewsService) {}

  ngOnInit(): void {
    this.newsApi.getAllNews().subscribe((res: any) => {
      this.sources = res.articles;
      this.totalResults = res.totalResults;
      this.sources.splice(0, 3);
    });
  }
}
