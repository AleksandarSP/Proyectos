import { Component, OnInit } from '@angular/core';
import { Book } from '../../services/book.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  book:any[] = [];

  constructor(private _book:Book) { }

  ngOnInit(): void {
    this.book = this._book.getBook();
  }

}
