import { Component, OnInit } from '@angular/core';
import { NewsService } from '../service/news.service';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css'],
})
export class SliderComponent implements OnInit {
  public sources: any = [];
  public sliderSourcesOne: any = [];
  public sliderSourcesTwo: any = [];
  public sliderSourcesThree: any = [];

  constructor(private newsApi: NewsService) {}

  ngOnInit(): void {
    this.newsApi.getAllNews().subscribe((res: any) => {
      this.sources = res.articles;
      this.sources.splice(3, this.sources.length);
      this.sliderSourcesOne = this.sources[0];
      this.sliderSourcesTwo = this.sources[1];
      this.sliderSourcesThree = this.sources[2];
    });
  }
}
