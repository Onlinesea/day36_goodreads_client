import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { firstValueFrom } from 'rxjs';
import { Book, BookSummary } from '../model';

@Injectable({
  providedIn: 'root'
})
export class BookService{

  bookId!: string

  constructor(private httpClient:HttpClient, 
              private activatedRoute:ActivatedRoute) { }


  getBooks():Promise<BookSummary[]>{
    return firstValueFrom(
        // This means that it will get the address bar based on localhost:8080//
        this.httpClient.get<BookSummary[]>('/api/books')
      )
  }

  getBookById(bookId:string):Promise<Book>{
      return firstValueFrom(
          this.httpClient.get<Book>(`api/book/${bookId}`)
      )
  }

  
  
}
