import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-face-snap',
  templateUrl: './face-snap.component.html',
  styleUrls: ['./face-snap.component.scss']
})
export class FaceSnapComponent implements OnInit {
  title!: string;
  description!: string;
  createdDate!: Date;
  snaps!: number;
  imageUrl!: String;

  ngOnInit() {
    this.title = 'Archibald';
    this.description = 'Mon meilleur ami depuis tout petit !';
    this.createdDate = new Date();
    this.snaps = 6;
    this.imageUrl = 'https://profile-images.xing.com/images/73c18beb6d87c6bcc208b85465857015-1/antoine-mura.256x256.jpg'
  }
}
