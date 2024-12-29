import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {}

// export class HomeComponent implements OnInit {
//   constructor(private router: Router) {}
//   ngOnInit(): void {}
//   onSelectHomePage() {
//     this.router.navigateByUrl('/home');
//   }

//   onSelectPropsPage() {
//     this.router.navigateByUrl('/products');
//   }

//   onSelectServicePage() {
//     this.router.navigateByUrl('/prodcuts');
//   }

//   onSelectContactPage() {
//     this.router.navigateByUrl('/contact');
//   }

//   toggleMenu(menu: HTMLElement, toggle: HTMLElement): void {
//     if (menu.classList.contains('active')) {
//       menu.classList.remove('active');
//       toggle.innerHTML = "<i class='fas fa-bars'></i>";
//     } else {
//       menu.classList.add('active');
//       toggle.innerHTML = "<i class='fas fa-times'></i>";
//     }
//   }
// }
