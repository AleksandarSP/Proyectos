import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'
import { PhotoService } from '../../services/photo.service';

@Component({
  selector: 'app-photo-list',
  templateUrl: './photo-list.component.html',
  styleUrls: ['./photo-list.component.css']
})
export class PhotoListComponent implements OnInit {

  photos: any;

  constructor(private photoService: PhotoService, private router: Router) {
    this.photos = [];
  }

  ngOnInit(): void {
    this.photoService.getPhotos()
      .subscribe(
        res => {
          this.photos = res;
        },
        err => console.log(err)
      )
  }

  selectedCard(id: string) {
    this.router.navigate(['/book', id])
  }
}
