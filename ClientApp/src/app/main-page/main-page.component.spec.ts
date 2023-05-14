import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainPageComponent } from './main-page.component';
import { RouterTestingModule } from '@angular/router/testing';
import { GameBoardComponent } from '../game-board/game-board.component';

describe('MainPageComponent', () => {
  let component: MainPageComponent;
  let fixture: ComponentFixture<MainPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [MainPageComponent, GameBoardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MainPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });


});
