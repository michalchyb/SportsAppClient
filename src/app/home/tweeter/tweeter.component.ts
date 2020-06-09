import { Component, OnInit } from '@angular/core';
import { Tweet } from 'src/app/models/tweet';
import { TweeterService } from 'src/app/services/tweeterService/tweeter.service';

@Component({
  selector: 'app-tweeter',
  templateUrl: './tweeter.component.html',
  styleUrls: ['./tweeter.component.scss']
})
export class TweeterComponent implements OnInit {
  tweets: Tweet[];

  constructor(private tweetService: TweeterService) { }

  ngOnInit(): void {
    this.getTweets();
  }

  private getTweets() {
    this.tweetService.getTweets().subscribe(
      data => {
        this.tweets = data;
      });
  }
}
