import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NewsService } from '../service/news.service';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css'],
})
export class CategoriesComponent implements OnInit {
  p: number = 1;
  collection: any = [];

  public sources: any = [];
  public category: any = [];

  constructor(private newsAppi: NewsService, private router: Router) {}

  ngOnInit(): void {
    let routeName = this.router.url.split('/')[1];
    this.newsAppi
      .getArticlesByCategory((this.category = routeName))
      .subscribe((res: any) => {
        this.sources = res.articles;
      });
  }
}
