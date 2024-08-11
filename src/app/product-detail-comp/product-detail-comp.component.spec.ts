import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductDetailCompComponent } from './product-detail-comp.component';

describe('ProductDetailCompComponent', () => {
  let component: ProductDetailCompComponent;
  let fixture: ComponentFixture<ProductDetailCompComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProductDetailCompComponent]
    });
    fixture = TestBed.createComponent(ProductDetailCompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
