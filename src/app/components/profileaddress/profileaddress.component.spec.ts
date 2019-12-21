import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileaddressComponent } from './profileaddress.component';

describe('ProfileaddressComponent', () => {
  let component: ProfileaddressComponent;
  let fixture: ComponentFixture<ProfileaddressComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfileaddressComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfileaddressComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
