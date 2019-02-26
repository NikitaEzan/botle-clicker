import { Component, OnInit, EventEmitter, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'app-header-search',
  templateUrl: './header-search.component.html',
  styleUrls: ['./header-search.component.scss']
})
export class HeaderSearchComponent implements OnInit {
  isActive: boolean;
  onFocus: boolean;

  @ViewChild('searchField')
  searchField: any;

  @Output() openSearch = new EventEmitter<boolean>();

  clickSearchButton():void {
    this.isActive = true;
    this.openSearch.emit(true);
  }

  onClickedOutside(ev: Event):void {
    this.isActive = false;
    this.onFocus = false;
    this.openSearch.emit(this.isActive);
  }

  searchFocus() {
    this.onFocus = true;
  }

  searchFocusOut(event) {
    let parentWrap = document.querySelector(".search__input-tools");
    let targetElement = event.relatedTarget;
    
    if (event.relatedTarget !== null) {
      if (!targetElement.closest(".search__input-tools")) {
        this.onFocus = false;
      }else {
        // save focus, when click event in tools search container
        // this.searchField.nativeElement.focus();
      }

    }else {
      this.onFocus = false;
    }
    
  }

  inputToolsOutClick() {

  }

  constructor() {
    this.isActive = false;
  }


  ngOnInit() {
  }

}
