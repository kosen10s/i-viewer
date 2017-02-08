import { Component, OnInit } from '@angular/core';
import { Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import { GetImagesService } from '../get-images.service';
import { Image } from '../image';;

@Component({
  selector: 'app-images',
  templateUrl: './images.component.html',
  styleUrls: ['./images.component.sass'],
  providers: [ GetImagesService ]
})
export class ImagesComponent implements OnInit {

  images: Image[] = [];

  constructor(private service: GetImagesService) { }

  ngOnInit() { this.getImages(); }

  getImages() {
    this.service.getImages().subscribe(res => {
      this.images = res;
    })
  }

}
