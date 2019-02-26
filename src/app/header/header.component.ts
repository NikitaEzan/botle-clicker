import { Component, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @Output() openSearch;
  searchOpen: boolean;

  constructor() {
    this.searchOpen = false;
  }

  ngOnInit() {
  }

  searchEvent(openSearch: boolean) {
    openSearch ? this.searchOpen = true : this.searchOpen = false;
  }

}
