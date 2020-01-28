import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductsMeComponent } from './products-me.component';

describe('ProductsMeComponent', () => {
  let component: ProductsMeComponent;
  let fixture: ComponentFixture<ProductsMeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductsMeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductsMeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
