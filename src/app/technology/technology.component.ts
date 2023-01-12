import { Component, OnInit } from '@angular/core';
import { NewsService } from '../service/news.service';

@Component({
  selector: 'app-technology',
  templateUrl: './technology.component.html',
  styleUrls: ['./technology.component.css'],
})
export class TechnologyComponent implements OnInit {
  public sources: any = [];
  public category: any = [];

  constructor(private newsAppi: NewsService) {}

  ngOnInit(): void {
    this.newsAppi
      .getArticlesByCategory((this.category = 'technology'))
      .subscribe((res: any) => {
        console.log(res);
        this.sources = res.articles;
      });
  }

  getSources() {}
}
