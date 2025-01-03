import { Component, OnInit, Inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavigationEnd, Router, RouterOutlet } from '@angular/router';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { FooterComponent } from './components/footer/footer.component';
import { filter } from 'rxjs';
import { isPlatformBrowser } from '@angular/common';  // Importing the method to check the platform
import { PLATFORM_ID } from '@angular/core';  // Importing PLATFORM_ID to inject the platform id

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, NavBarComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'ngrx-product';
  showLayout = true; // Controls the display of the layout (NavBar & Footer)

  constructor(private router: Router, @Inject(PLATFORM_ID) private platformId: Object) {}

  ngOnInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      // Only check localStorage in the browser
      const token = localStorage.getItem('token'); // Checks for the token in localStorage

      // If no token, redirect to /login
      if (!token) {
        this.router.navigate(['/login']);
        return; // Stops the execution of ngOnInit
      }
    }

    // Handle conditional layout display for certain routes
    this.router.events
      .pipe(filter((event) => event instanceof NavigationEnd))
      .subscribe(() => {
        // List of routes where the layout should be hidden
        const hideLayoutRoutes = ['/login', '/not-found'];

        // Hides the layout if the current URL is in the list
        this.showLayout = !hideLayoutRoutes.includes(this.router.url);
      });
  }
}
