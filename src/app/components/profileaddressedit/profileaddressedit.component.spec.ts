import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileaddresseditComponent } from './profileaddressedit.component';

describe('ProfileaddresseditComponent', () => {
  let component: ProfileaddresseditComponent;
  let fixture: ComponentFixture<ProfileaddresseditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfileaddresseditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfileaddresseditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
