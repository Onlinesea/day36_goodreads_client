import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Book, BookSummary } from 'src/app/model';
import { BookService } from 'src/app/service/book.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{

  bookList!: BookSummary[]

  constructor(private svc:BookService, private router:Router){}

  // The homepage will display the list of books 
  ngOnInit(): void {

    // Getting the data from the service api, since it is a promise it will return a data
    // then store the data in booklist
      this.svc.getBooks().then(books => {
        this.bookList = books
        console.log( " Booklist received > " + this.bookList)
      }).catch(error => {
        console.error('>> error: ', error)
      });
  }

  getBookDetail(bookId:string){
    console.log("bookId selected >>> " + bookId)
    this.router.navigate(['/book', bookId]);
    console.log("why never navigate")
  }

}
