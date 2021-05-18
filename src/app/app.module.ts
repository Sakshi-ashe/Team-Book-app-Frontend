import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http'
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BookListComponent } from './components/book-list/book-list.component';
import { BookService } from './services/book.service';

import {Routes, RouterModule} from '@angular/router';
import { BookCategoryMenuComponent } from './components/book-category-menu/book-category-menu.component';
import { SearchComponent } from './components/search/search.component';
import { BookDetailsComponent } from './components/book-details/book-details.component';

import { NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { FavoriteComponent } from './components/favorite/favorite.component';

const routes: Routes = [
  // when path matches create instance of component
  {path: 'books/:id' , component: BookDetailsComponent},
  {path: 'search/:keyword' , component: BookListComponent},
  {path: 'category/:id' , component: BookListComponent},
  {path: 'category/:id/:name' , component: BookListComponent},

  {path: 'category' , component: BookListComponent},
  {path: 'books' , component: BookListComponent},
  {path: '' ,redirectTo:'/books',pathMatch:'full'},
  {path: '**' ,redirectTo:'/books',pathMatch:'full'}

];

@NgModule({
  declarations: [
    AppComponent,
    BookListComponent,
    BookCategoryMenuComponent,
    SearchComponent,
    BookDetailsComponent,
    BookDetailsComponent,
    BookCategoryMenuComponent,
    FavoriteComponent
  ],
  imports: [
    RouterModule.forRoot(routes),
    BrowserModule,
    HttpClientModule,
    NgbModule
  ],
  providers: [BookService],
  bootstrap: [AppComponent]
})
export class AppModule { }
