import { Component, OnInit } from '@angular/core';
import { NewsService } from '../service/news.service';
@Component({
  selector: 'app-health',
  templateUrl: './health.component.html',
  styleUrls: ['./health.component.css'],
})
export class HealthComponent implements OnInit {
  public sources: any = [];
  public category: any = [];

  constructor(private newsAppi: NewsService) {}

  ngOnInit(): void {
    this.newsAppi
      .getArticlesByCategory((this.category = 'health'))
      .subscribe((res: any) => {
        console.log(res);
        this.sources = res.articles;
      });
  }

  getSources() {}
}
