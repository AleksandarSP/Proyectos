import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router'
import { PhotoService } from '../../services/photo.service'

import { Photo } from '../../interfaces/Photo'
@Component({
  selector: 'app-admin-book-preview',
  templateUrl: './admin-book-preview.component.html',
  styleUrls: ['./admin-book-preview.component.css']
})
export class AdminBookPreviewComponent implements OnInit {

  id!: any;
  photo!: Photo; 
  voteCount: number;


  constructor(private activateRoute: ActivatedRoute, private router: Router, private photoService: PhotoService) { 
    
  }

  ngOnInit(): void {
    this.activateRoute.params.subscribe(params => {
      this.id = params['id'];
      this.photoService.getBookAdmin(this.id)
        .subscribe(
          res => {
            this.photo = res;

            this.voteCount = res.voteCount;
          },
          err => console.log(err)
        )
      
    })
  }

  deletePhoto(id: any) {
    this.photoService.deletePhoto(id)
      .subscribe(
        res => {
          console.log(res)
          this.router.navigate(['/photos'])
        },
        err => console.log(err)
      );
  }

  updatePhoto(title: any, description: any, genre: any) {
    
    this.photoService.updatePhoto(this.id, title.value, description.value, genre.value)
      .subscribe(
        res => {
          this.router.navigate(['/photos'])
        },
        err => console.log(err)
      );
    return false;
  }

}


