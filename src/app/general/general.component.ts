import { Component, OnInit } from '@angular/core';
import { NewsService } from '../service/news.service';
@Component({
  selector: 'app-general',
  templateUrl: './general.component.html',
  styleUrls: ['./general.component.css'],
})
export class GeneralComponent implements OnInit {
  public sources: any = [];
  public category: any = [];

  constructor(private newsAppi: NewsService) {}

  ngOnInit(): void {
    this.newsAppi
      .getArticlesByCategory((this.category = 'general'))
      .subscribe((res: any) => {
        console.log(res);
        this.sources = res.articles;
      });
  }

  getSources() {}
}
