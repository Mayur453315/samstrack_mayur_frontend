import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginUserDetailTsComponent } from './login-user-detail.ts.component';

describe('LoginUserDetailTsComponent', () => {
  let component: LoginUserDetailTsComponent;
  let fixture: ComponentFixture<LoginUserDetailTsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LoginUserDetailTsComponent]
    });
    fixture = TestBed.createComponent(LoginUserDetailTsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
