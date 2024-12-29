import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavBarProdComponent } from './nav-bar-prod.component';

describe('NavBarProdComponent', () => {
  let component: NavBarProdComponent;
  let fixture: ComponentFixture<NavBarProdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NavBarProdComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NavBarProdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
