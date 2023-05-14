import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { HomeComponent } from './home/home.component';
import { FetchDataComponent } from './fetch-data/fetch-data.component';
import { GameBoardComponent } from './game-board/game-board.component';
import { MainPageComponent } from './main-page/main-page.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { AccountCreationPageComponent } from './account-creation-page/account-creation-page.component';


@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    HomeComponent,
    FetchDataComponent,
    GameBoardComponent,
    MainPageComponent,
    LoginPageComponent,
    AccountCreationPageComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot([
      { path: 'fetch-data', component: FetchDataComponent },
      { path: 'main', component: MainPageComponent },
      { path: 'login', component: LoginPageComponent },
      { path: 'accountCreation', component: AccountCreationPageComponent },
      { path: '', redirectTo: '/main', pathMatch: 'full' }
    ])
  ],
  providers: [
    HttpClientModule,
    RouterModule,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
