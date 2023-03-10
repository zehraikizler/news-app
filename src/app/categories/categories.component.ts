import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NewsService } from '../service/news.service';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css'],
})
export class CategoriesComponent implements OnInit {
  public loading = false;
  p: number = 1;
  collection: any = [];
  routeName: any;

  public sources: any = [];
  public category: any = [];

  constructor(
    private newsAppi: NewsService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.loading = true;
    this.routeName = this.router.url.split('/')[1];
    this.activatedRoute.queryParams.subscribe((params) => {
      if (params['q']) {
        this.newsAppi
          .getNewsBySearchCategoryQuery(
            (this.category = this.routeName),
            params['q']
          )
          .subscribe((res: any) => {
            this.loading = false;
            this.sources = res.articles;
          });
      } else {
        this.newsAppi
          .getArticlesByCategory((this.category = this.routeName))
          .subscribe((res: any) => {
            this.loading = false;
            this.sources = res.articles;
          });
      }
    });
    this.newsAppi
      .getArticlesByCategory((this.category = this.routeName))
      .subscribe((res: any) => {
        this.loading = false;
        this.sources = res.articles;
      });
  }
}
