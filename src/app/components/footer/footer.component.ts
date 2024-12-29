import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css',
})
export class FooterComponent implements OnInit {
  constructor(private router: Router) {}
  ngOnInit(): void {}

  navigateInstagram() {
    window.location.href = 'https://twitter.com';
  }

  navigateFacebook() {
    window.location.href = 'https://www.facebook.com';
  }

  navigateLinkedine() {
    window.location.href = 'https://www.linkedin.com';
  }

  navigateTwitter() {
    window.location.href = 'https://www.instagram.com';
  }
}
