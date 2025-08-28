import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-notebook',
  templateUrl: './notebook.component.html',
  styleUrls: ['./notebook.component.css']
})
export class NotebookComponent implements OnInit {
  currentPageText = '';
  currentPage: string = '';

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      const page = params.get('page');
      if (page) {
        this.currentPage = page;
        const savedText = sessionStorage.getItem(page);
        if (savedText) {
          this.currentPageText = savedText;
        } else {
          this.currentPageText = '';
        }
      }
    });
  }

  savePageText() {
    if (this.currentPage) {
      sessionStorage.setItem(this.currentPage, this.currentPageText);
      // You could add a save confirmation toast here
    }
  }

  clearPage() {
    if (confirm('Are you sure you want to clear this page? This action cannot be undone.')) {
      this.currentPageText = '';
      this.savePageText();
    }
  }
}


