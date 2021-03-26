import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'fav-photos',
  templateUrl: './fav-photos.component.html',
  styleUrls: ['./fav-photos.component.css']
})
export class FavPhotosComponent implements OnInit {
  photosTitle = 'Favorite photos';
  image1 = 'https://www.launchcode.org/assets/icons/target-00c7a0bc7776901e3c5cdc4c36c465f19e41a249bc7267a595f0bfa14ab944b7.png';
  image2 = 'https://www.thespruceeats.com/thmb/uRDM8jyv0qQJFXgV6H4AnQyqTJ8=/2000x1500/filters:fill(auto,1)/spicy-chicken-nuggets-5079685-13-ea9bd85834d244938d830c24250433b1.jpg'

  constructor() { }

  ngOnInit() {
  }

}