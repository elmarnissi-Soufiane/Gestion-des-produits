import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavigationEnd, Router, RouterOutlet } from '@angular/router';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { FooterComponent } from './components/footer/footer.component';
import { filter } from 'rxjs';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, NavBarComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent implements OnInit {
  title = 'ngrx-product';

  showLayout: boolean = true; // Contrôle l'affichage du layout

  constructor(private router: Router) {}

  ngOnInit(): void {
    // Subscribe to the router events
    this.router.events
      .pipe(filter((event) => event instanceof NavigationEnd))
      .subscribe((event) => {
        // Hide the layout (NavBar & Footer) if the current route is '**' (NotFoundComponent)
        this.showLayout = !this.router.url.includes('not-found');
      });
  }
}
