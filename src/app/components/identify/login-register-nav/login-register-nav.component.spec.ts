import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginRegisterNavComponent } from './login-register-nav.component';

describe('LoginRegisterNavComponent', () => {
  let component: LoginRegisterNavComponent;
  let fixture: ComponentFixture<LoginRegisterNavComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoginRegisterNavComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginRegisterNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
