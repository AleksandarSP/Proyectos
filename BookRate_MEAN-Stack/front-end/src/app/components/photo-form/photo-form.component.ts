import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'
import { PhotoService } from '../../services/photo.service'

@Component({
  selector: 'app-photo-form',
  templateUrl: './photo-form.component.html',
  styleUrls: ['./photo-form.component.css']
})
export class PhotoFormComponent implements OnInit {

  photoSelected: any;
  file: any;

  constructor(private photoService: PhotoService, private router: Router) { }

  ngOnInit() {
  }

  onPhotoSelected(event: any): void {
    if (event.target.files && event.target.files[0]) {
      this.file = <File>event.target.files[0];
      const reader = new FileReader();
      reader.onload = e => this.photoSelected = reader.result;
      reader.readAsDataURL(this.file);
    }
  }

  uploadPhoto(title: HTMLInputElement, description: HTMLTextAreaElement, genre: HTMLTextAreaElement) {
    this.photoService
      .createPhoto(title.value, description.value, genre.value, this.file)
      .subscribe(
        res => {
          this.router.navigate(['/photos'])
        },
        err => console.log(err)
      );
    return false;
  }

}