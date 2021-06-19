import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'
import { PhotoService } from '../../services/photo.service';

@Component({
  selector: 'app-genre',
  templateUrl: './genre.component.html',
  styleUrls: ['./genre.component.css']
})
export class GenreComponent implements OnInit {

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
    this.router.navigate(['/photos', id])
  }

  printValue(event: HTMLInputElement){
    
    if(event){
      console.log(event.toString())
      this.photoService.getPhotoFromGenre(event.toString())
    .subscribe(
      res => {
        this.photos = res;
      },
      err => console.log(err)
  )
    }
  }


}
