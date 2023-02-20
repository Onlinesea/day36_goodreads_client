import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { Book } from 'src/app/model';
import { BookService } from 'src/app/service/book.service';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit{

  bookId!: string
  book!: Book 

  constructor(private activatedRoute:ActivatedRoute, 
              private title:Title,
              private svc:BookService){}

  ngOnInit(): void {
    console.log("bookComponent tiggered")
    this.bookId = this.activatedRoute.snapshot.params['bookId']
    console.log("bookComponent tiggered")
    


    this.svc.getBookById(this.bookId).then(book =>{
      this.book = book 
      console.log("received >>>>" + this.book) 
this.title.setTitle(`Book found > ${this.book.title}`)
    console.log("bookComponent tiggered")
    }).catch(error =>{
      console.log(error)
    })
  }


}
