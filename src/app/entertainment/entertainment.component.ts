import { Component, OnInit } from '@angular/core';
import { NewsService } from '../service/news.service';
@Component({
  selector: 'app-entertainment',
  templateUrl: './entertainment.component.html',
  styleUrls: ['./entertainment.component.css'],
})
export class EntertainmentComponent implements OnInit {
  public sources: any = [];
  public category: any = [];

  constructor(private newsAppi: NewsService) {}

  ngOnInit(): void {
    this.newsAppi
      .getArticlesByCategory((this.category = 'entertainment'))
      .subscribe((res: any) => {
        console.log(res);
        this.sources = res.articles;
      });
  }

  getSources() {}
}
