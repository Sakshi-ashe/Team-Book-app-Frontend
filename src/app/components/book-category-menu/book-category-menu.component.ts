import { Component, OnInit } from '@angular/core';
import { JsonpClientBackend } from '@angular/common/http';
import { BookCategory } from 'src/app/common/book-category';
import { BookService } from 'src/app/services/book.service';

@Component({
  selector: 'app-book-category-menu',
  templateUrl: './book-category-menu.component.html',
  styleUrls: ['./book-category-menu.component.css']
})
export class BookCategoryMenuComponent implements OnInit {

  bookCategories: BookCategory[];

  constructor(private bookService: BookService) { }

  ngOnInit(): void {
    this.listbookCategories();
  }

  listbookCategories(){
    this.bookService.getBookCategories().subscribe(
      data => {
        console.log('book Categories='+ JSON.stringify(data));
        this.bookCategories = data;
      }
    )
  }


}




