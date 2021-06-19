import { Injectable } from '@angular/core';

@Injectable()
export class Book{

    private book:any[] = [
        {
            name: "1",
            imageUrl: 'assets/img/book_covers/1.jpg',
            description: "something"
        },
        {
            name: "2",
            imageUrl: 'assets/img/book_covers/2.jpg',
            description: "something"
        },
        {
            name: "3",
            imageUrl: 'assets/img/book_covers/3.jpg',
            description: "something"
        }
    ];

    getBook(){
        return this.book;
    }

}