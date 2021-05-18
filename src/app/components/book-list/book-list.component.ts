


import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Book } from 'src/app/common/book';
import { BookCategory } from 'src/app/common/book-category';
import { BookService } from 'src/app/services/book.service';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit {

  books: Book[];

  currentCategoryId: number = 1;

  currentCategoryName: string;

  searchMode: boolean = false;

  thePageNumber: number = 1;
  thePageSize: number = 5;
  theTotalElements: number = 0;
  previousCategoryId: number = 1;

  previousKeyword: string = null;

  constructor(private bookService : BookService, 
              private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(() => {
      this.listBooks();
    });
  }


  listBooks(){

    this.searchMode = this.route.snapshot.paramMap.has('keyword');
    console.log("########");
    console.log(this.searchMode);
    

    if(this.searchMode){
      this.handleSearchBooks();
    }
    else{
      this.handleListBooks();
    }
  }

 handleListBooks(){
   //chack if "id " parameter is available.
   const hasCategoryId : boolean = this.route.snapshot.paramMap.has('id');
   console.log(hasCategoryId);

   if(hasCategoryId){
     // get the 'id' param string, convert string to a number using the  "+" symbol
     this.currentCategoryId = +this.route.snapshot.paramMap.get('id');
     console.log(this.currentCategoryId);

     this.currentCategoryName = this.route.snapshot.paramMap.get('name');

   }
   else{
     // not category id available.... default to category id 1
     this.currentCategoryId = 1;
     console.log(this.currentCategoryId);

     this.currentCategoryName = 'Books';

   }

   //
   // check if we have a different category then previous
   // note: Angular will reuse a component if it is currently being viewed
   //


   // if we have a difeerent category id then previous
   // then set thePageNumber back to 1
  if(this.previousCategoryId != this.currentCategoryId){
    this.thePageNumber = 1;
  }

  this.previousCategoryId = this.currentCategoryId;

  console.log(`currentCategoryId =${this.currentCategoryId}, thePageNumber=${this.thePageNumber} `)

   //now get the books for this given category id
   this.bookService.getBooksListPaginate(this.thePageNumber -1,this.thePageSize, this.currentCategoryId).subscribe(
     
      this.processResult()
    );

 }
  processResult() {
    return data => {
      this.books = data._embedded.books;
      this.thePageNumber = data.page.number + 1;
      this.thePageSize = data.page.size;
      this.theTotalElements = data.page.totalElements;
    }
  }

 handleSearchBooks(){
   const theKeyword: string = this.route.snapshot.paramMap.get('keyword');

   //if we have a different keyword than previous
   //then set thePageNumber to 1

   if(this.previousKeyword != theKeyword){
    this.thePageNumber = 1;
   }
   this.previousKeyword = theKeyword;

   console.log(`keyword=${theKeyword},thePageNumber=${this.thePageNumber}`);

   //now search for the books using keyword
   this.bookService.searchBooksPaginate(this.thePageNumber - 1,
                                               this.thePageSize,
                                               theKeyword).subscribe(
                                                this.processResult()
                                                );
 }


 updatePageSize(pageSize: number){
   this.thePageSize = pageSize;
   this.thePageNumber = 1;
   this.listBooks();
 }


 addToFav(theBook: Book){
   console.log(`Adding to cart: ${theBook.name}, ${theBook.unitPrice}`)
 }
}
