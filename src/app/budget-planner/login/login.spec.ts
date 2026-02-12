import { ComponentFixture, TestBed } from '@angular/core/testing';

import { login } from './login';

describe('Login', () => {
  let component: login;
  let fixture: ComponentFixture<login>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [login]
    })
    .compileComponents();

    fixture = TestBed.createComponent(login);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
