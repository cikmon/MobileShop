import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductDetailCommentsComponent } from './product-detail-comments.component';

describe('ProductDetailCommentsComponent', () => {
  let component: ProductDetailCommentsComponent;
  let fixture: ComponentFixture<ProductDetailCommentsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductDetailCommentsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductDetailCommentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
