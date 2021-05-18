import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BookCategoryMenuComponent } from './book-category-menu.component';

describe('BookCategoryMenuComponent', () => {
  let component: BookCategoryMenuComponent;
  let fixture: ComponentFixture<BookCategoryMenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BookCategoryMenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookCategoryMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
