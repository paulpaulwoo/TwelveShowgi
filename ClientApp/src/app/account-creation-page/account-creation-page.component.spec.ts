import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { AccountCreationPageComponent } from './account-creation-page.component';
import { FormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';

describe('AccountCreationPageComponent', () => {
  let component: AccountCreationPageComponent;
  let fixture: ComponentFixture<AccountCreationPageComponent>;
  let httpMock: HttpTestingController;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientTestingModule,
        FormsModule,
        RouterTestingModule],
      declarations: [AccountCreationPageComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(AccountCreationPageComponent);
    component = fixture.componentInstance;
    httpMock = TestBed.inject(HttpTestingController);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });


  it('should accept correct username', () => {
    let exampleUsername: string = "Username";
    let result: boolean = component.checkUsernameSpecifications(exampleUsername);
    expect(result).toBe(true);
  });

  it('should reject username with backslashes', () => {
    let backslashUsername: string = 'Username\\';
    let result: boolean = component.checkUsernameSpecifications(backslashUsername);
    expect(result).toBe(false);
  });

  it('should accept correct password', () => {
    let examplePassword: string = "Password";
    let result: boolean = component.checkPasswordSpecifications(examplePassword);
    expect(result).toBe(true);
  });

  it('should reject password with backslashes', () => {
    let backslashPassword: string = 'Password\\';
    let result: boolean = component.checkPasswordSpecifications(backslashPassword);
    expect(result).toBe(false);
  });

  it('should accept if passwords are the same', () => {
    component.password = "password";
    component.passwordCheck = "password";
    let result: boolean = component.checkPasswordMatch();
    expect(result).toBe(true);
  });

  it('should reject if passwords are different', () => {
    component.password = "password";
    component.passwordCheck = "passwordaa";
    let result: boolean = component.checkPasswordMatch();
    expect(result).toBe(false);
  });

  it('should send request if every input is valid', () => {
    component.username = "username";
    component.password = "password";
    component.passwordCheck = "password";
    component.onSubmit();
    const req = httpMock.expectOne(window.location.origin + '/api/create-account/');
    expect(req.request.method).toEqual('POST');
    req.flush({});
  })

  it('should not send request if username isn\'t valid', () => {
    component.username = "use";
    component.password = "password";
    component.passwordCheck = "password";
    component.onSubmit();
    const req = httpMock.expectNone(window.location.origin + '/api/create-account/');
  })

  it('should not send request if password isn\'t valid', () => {
    component.username = "username";
    component.password = "pass";
    component.passwordCheck = "pass";
    component.onSubmit();
    const req = httpMock.expectNone(window.location.origin + '/api/create-account/');
  })

  it('should not send request if passwords don\'t match', () => {
    component.username = "username";
    component.password = "passaaaaaaa";
    component.passwordCheck = "password";
    component.onSubmit();
    const req = httpMock.expectNone(window.location.origin + '/api/create-account/');
  })
})
