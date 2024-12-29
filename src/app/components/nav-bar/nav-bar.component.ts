import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav-bar',
  standalone: true,
  imports: [],
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.css',
})
export class NavBarComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit(): void {}

  navigateHome() {
    this.router.navigateByUrl('/home');
  }

  navigateProduct() {
    this.router.navigateByUrl('/prodcuts');
  }

  navigateContact() {
    this.router.navigateByUrl('/contact');
  }
}
