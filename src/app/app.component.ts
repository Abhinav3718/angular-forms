import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-forms';

  constructor(private route: Router) {}

  navigateToPage(page: string) {
    if (page === 'angular') {
      this.route.navigateByUrl('angular-forms')
    } else {
      this.route.navigateByUrl('reactive-forms')
    }
  }
}
