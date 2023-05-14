import { ComponentFixture, TestBed } from '@angular/core/testing';
import {FormsModule } from  '@angular/forms'
import { LoginPageComponent } from './login-page.component';
import { RouterTestingModule } from '@angular/router/testing';
describe('LoginPageComponent', () => {
  let component: LoginPageComponent;
  let fixture: ComponentFixture<LoginPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterTestingModule,
        FormsModule],
      declarations: [ LoginPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoginPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
