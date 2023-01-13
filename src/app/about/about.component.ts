import { Component, OnInit } from '@angular/core';
import { NewsService } from '../service/news.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css'],
})
export class AboutComponent implements OnInit {
  user: any = [];
  repos: any = [];

  constructor(private newsApi: NewsService) {}

  ngOnInit(): void {
    this.newsApi.getUser().subscribe((res: any) => {
      this.user = res;
    });
    this.newsApi.getUserRepos().subscribe((res: any) => {
      this.repos = res;
    });
  }
}
