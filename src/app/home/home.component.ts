import { Component, OnInit } from '@angular/core';
import { NewsService } from '../service/news.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  public sources: any = [];
  public category: any = [];

  constructor(private newsAppi: NewsService) {}

  ngOnInit(): void {
    this.newsAppi.getAllNews().subscribe((res: any) => {
      this.sources = res.articles;
    });
  }

  getSources() {}
}
