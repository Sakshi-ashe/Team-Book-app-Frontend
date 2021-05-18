

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Book } from 'src/app/common/book';
import { BookService } from 'src/app/services/book.service';

@Component({
  selector: 'app-book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.css']
})
export class BookDetailsComponent implements OnInit {

  book: Book = new Book();//race condition
  constructor(private bookService: BookService,
              private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(() => {
      this.handleBookDetails();
    })
  }
  handleBookDetails() {
    // get the "id" param string, convert to a number using the '+' symbol

    const theBookId: number = +this.route.snapshot.paramMap.get('id');

    this.bookService.getBook(theBookId).subscribe(
      data => {
        this.book = data;
      }
    )
  }

}

