import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { BookComponent } from './components/book/book.component';
import { BookService } from './service/book.service';
import { RouterModule, Routes } from '@angular/router';
import { MaterialModule } from './material.modules';

const appRoutes: Routes = [
  // Mapping to see the main page with all the books
  { path: '', component: HomeComponent },

  // Display the book detail
  { path: 'book/:bookId', component: BookComponent },

  //If the route doesnt match, redirect back to the main page
  { path: '**', redirectTo: '/', pathMatch: 'full' }
]


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    BookComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    MaterialModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [BookService],
  bootstrap: [AppComponent]
})
export class AppModule { }
