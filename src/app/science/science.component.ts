import { Component, OnInit } from '@angular/core';
import { NewsService } from '../service/news.service';
@Component({
  selector: 'app-science',
  templateUrl: './science.component.html',
  styleUrls: ['./science.component.css'],
})
export class ScienceComponent implements OnInit {
  public sources: any = [];
  public category: any = [];

  constructor(private newsAppi: NewsService) {}

  ngOnInit(): void {
    this.newsAppi
      .getArticlesByCategory((this.category = 'science'))
      .subscribe((res: any) => {
        console.log(res);
        this.sources = res.articles;
      });
  }

  getSources() {}
}
