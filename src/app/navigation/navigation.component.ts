import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {
  pages = ['1', '2', '3', '4', '5'];
  currentPage: string = '';

  constructor(
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    // Set initial page from route params
    const page = this.route.snapshot.firstChild?.paramMap.get('page');
    if (page) {
      this.currentPage = page;
    }

    // Update current page on navigation
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe(() => {
      const page = this.route.snapshot.firstChild?.paramMap.get('page');
      if (page) {
        this.currentPage = page;
      }
    });
  }

  changePage(page: string) {
    this.currentPage = page;
    this.router.navigate(['/notebook', page]);
  }
}
