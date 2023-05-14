import { Component, HostBinding, ViewEncapsulation } from '@angular/core';
import {Router} from "@angular/router"

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss'],
  encapsulation: ViewEncapsulation.None
})

/**
 * Component for main page. Contains the rule demonstration, introduction, dev info, and the play button.
 */
export class MainPageComponent {

  constructor(private router: Router) {}

  /**
   * Handles play button click. Navigates to login page
   */
  playButtonClick(): void {
    this.router.navigate(['/login'])
  }
}
