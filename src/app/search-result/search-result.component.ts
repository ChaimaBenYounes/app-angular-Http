import { Component, OnInit, Input } from '@angular/core';
import { SearchResult } from '../models/search-result.model';
@Component({
  selector: 'app-search-result',
  templateUrl: './search-result.component.html',
  styleUrls: ['./search-result.component.css']
})
export class SearchResultComponent implements OnInit {

  //SearchResult assigned to this component SearchBox.
  //The SearchResultComponent simply stores the SearchResult in the instance variable result .
  @Input() result: SearchResult;
  videoUrl: string = 'result';

  constructor() { }

  ngOnInit() {
  }

}
