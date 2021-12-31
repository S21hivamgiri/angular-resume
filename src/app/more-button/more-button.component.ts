import { Component } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-more-button',
  templateUrl: './more-button.component.html',
  styleUrls: ['./more-button.component.scss']
})
export class MoreButtonComponent {
  buttonClass: string;
  
  constructor(private router: Router) {
    router.events.pipe(filter(e => e instanceof NavigationEnd))
      .subscribe(e => {
        if (this.router.url.startsWith('/main')) {
          this.buttonClass = "back-button"
        } else {
          this.buttonClass = "more-button"
        }
      });
  }

  openPage() {
    if (this.buttonClass === "more-button") {
      this.router.navigate(['/main']);
    } else {
      this.router.navigate(['/']);
    }
  }
}
