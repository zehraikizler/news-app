import { Component, OnInit } from '@angular/core';
import { NewsService } from '../service/news.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  public loading = false;
  p: number = 1;
  collection: any = [];
  public sources: any = [];

  constructor(
    private newsApi: NewsService,
    private newsAppi: NewsService,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.loading = true;
    this.newsApi.getAllNews().subscribe((res: any) => {
      this.loading = false;

      this.sources = res.articles;
      this.sources.splice(0, 3);
    });

    this.activatedRoute.queryParams.subscribe((params) => {
      if (params['q']) {
        this.loading = false;
        this.newsAppi
          .getNewsBySearchAllQuery(params['q'])
          .subscribe((res: any) => {
            this.sources = res.articles;
          });
      } else {
        this.newsApi.getAllNews().subscribe((res: any) => {
          this.loading = false;
          this.sources = res.articles;
          this.sources.splice(0, 3);
        });
      }
    });
  }
}
