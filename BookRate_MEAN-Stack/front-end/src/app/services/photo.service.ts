import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

import {Photo} from '../interfaces/Photo'

@Injectable({
  providedIn: 'root'
})
export class PhotoService {

  // serv address
  URI       = 'http://localhost:4000/api/photos';
  URI_admin = 'http://localhost:4000/api/book';

  URI_genre = 'http://localhost:4000/api/genre';
  URI_title = 'http://localhost:4000/api/title'

  constructor(private http: HttpClient) { }

//---------------------------------------------
// GLOBAL CONFIGURATION FOR ALL THE BOOK HANDLERS
//---------------------------------------------

  createPhoto(title: string, description: string, genre: string, photo: File){
    //form data
    const fd = new FormData();

    fd.append('title', title);
    fd.append('description', description);
    fd.append('genre', genre);
    fd.append('image', photo);
    return this.http.post(this.URI, fd)
  }

  addComment(id: String, comment: Object){
    return this.http.post(`${this.URI}/${id}`, {comment})
  }

  voteBook(id: String, vote: String){
    //vote must be upvote or downvote
    console.log(`${this.URI}/vote`)

    const body = {
      vote,
      id
    }
      return this.http.post(`${this.URI}/vote`, body);
  }

  getPhotos(){
    return this.http.get<Photo[]>(this.URI);
  }

  getPhoto(id: string) {
    return this.http.get<Photo>(`${this.URI}/${id}`)
  }

  getBookAdmin(id: string) {
    return this.http.get<Photo>(`${this.URI_admin}/${id}`)
  }

  getBookFromTitle(title: string){
    return this.http.get<Photo[]>(`${this.URI_title}/${title}`)

  }

  getPhotoFromGenre(genre: string){
    return this.http.get<Photo[]>(`${this.URI_genre}/${genre}`)
  }

  deletePhoto(id: string) {
    return this.http.delete(`${this.URI}/${id}`)
  }
  updatePhoto(id: string, title: string, description: string, genre: string) {
    return this.http.put(`${this.URI}/${id}`, {title, description, genre})
    
  }

}
