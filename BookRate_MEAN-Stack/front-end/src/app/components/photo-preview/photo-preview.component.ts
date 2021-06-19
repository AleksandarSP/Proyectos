import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router'
import { PhotoService } from '../../services/photo.service'
import { AuthService } from '../../services/auth.service'

import { Photo } from '../../interfaces/Photo'

@Component({
  selector: 'app-photo-preview',
  templateUrl: './photo-preview.component.html',
  styleUrls: ['./photo-preview.component.css']
})
export class PhotoPreviewComponent implements OnInit {

  object: Object;
  commentInput;
  id!: any;
  photo!: Photo; 
  voteCount: number;
  comments = [];

  constructor(
    private activateRoute: ActivatedRoute,
    private router: Router,
    private photoService: PhotoService,
    private AuthService :AuthService,
    ) { 
    
  }

  ngOnInit(): void {
    this.activateRoute.params.subscribe(params => {
      this.id = params['id'];
      this.photoService.getPhoto(this.id)
        .subscribe(
          res => {
            this.photo = res;

            this.comments = this.photo.comments;
            


            this.voteCount = res.voteCount;
          },
          err => console.log(err)
        )
      
    })
    
  }

  addComment(){  
    this.object = {
      user: this.AuthService.user.email,
      comment: this.commentInput
    }
    this.photoService.addComment(this.id, this.object)
    .subscribe(
      res => {
        console.log(res)
        
      },
      err => {console.log(err)}
    );

  }


  upvote(){
    
    this.photoService.voteBook(this.id, "upvote")
    .subscribe(
      res => {
        console.log(res)
        this.voteCount++;
      },
      err => {console.log(err)}
    )
  }
  downvote(){
    this.photoService.voteBook(this.id, "downvote")
    .subscribe(
      res => {
        console.log(res)
        this.voteCount--;

      },
      err => {console.log(err)}
    )
  }

}
