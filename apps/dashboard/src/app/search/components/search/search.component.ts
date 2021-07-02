import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'dash-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent {

  public searchText: string | undefined;

  search() {
    let url = 'https://google.com/search?q=';
    const searchValue = this.searchText?.split(" ").join("+");
    url += searchValue;
    window.open(url, '_blank');
  }
}
