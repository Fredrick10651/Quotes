import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-likes',
  templateUrl: './likes.component.html',
  styleUrls: ['./likes.component.css']
})
export class LikesComponent implements OnInit {

  numberOfLikes : number = 0;

  likeButtonClick() {

    this.numberOfLikes++;
  }


  dislikeButtonClick() {

    this.numberOfLikes--;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
