import { Component, OnInit } from '@angular/core';
import {CdkDragDrop, moveItemInArray, transferArrayItem} from '@angular/cdk/drag-drop';
import { PhotoService } from 'src/app/services/photo.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-my-reading',
  templateUrl: './my-reading.component.html',
  styleUrls: ['./my-reading.component.css']
})
export class MyReadingComponent implements OnInit {
  pending:    object[] = [];
  reading:    object[] = [];
  readed:     object[] = [];
  something:  object[] = [];
  constructor(private photoService: PhotoService, private router: Router){
    
  }
  insertedBook;

  drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(event.previousContainer.data,
                        event.container.data,
                        event.previousIndex,
                        event.currentIndex);
    }
  }

  selectedCard(id: string) {
    this.router.navigate(['/photos', id])
  }

  insertBook(event){
    if(this.insertedBook === ''){
      return
    }
    this.insertedBook = '';

    if(event){
      this.photoService.getBookFromTitle(event.toString())
    .subscribe(
      res => {
        
        

        if(res === null) return
        //Evita que el libro se repita
        if(
          JSON.stringify(this.pending).includes(JSON.stringify(res)) ||
          JSON.stringify(this.reading).includes(JSON.stringify(res)) ||
          JSON.stringify(this.readed) .includes(JSON.stringify(res))
          ){
          
          return;
        }
        this.pending.push(res);
      },
      err => console.log(err)
  )
    }

  }

  ngOnInit(){

  }

}
