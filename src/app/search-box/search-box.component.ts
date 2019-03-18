import { Component, OnInit, Output, EventEmitter, ElementRef} from '@angular/core';
import { SearchResult } from './../models/search-result.model';
import { YouTubeSearchService } from './../services/youtube-search.service';

@Component({
  selector: 'app-search-box',
  templateUrl: './search-box.component.html',
  styleUrls: ['./search-box.component.css']
})
export class SearchBoxComponent implements OnInit {

  //events will be emitted from this component youtube-search
  @Output() loading: EventEmitter<boolean> = new EventEmitter<boolean>();
  @Output() results: EventEmitter<SearchResult[]> = new EventEmitter<SearchResult[]>(); 

  constructor(private youTubeSearchService: YouTubeSearchService,
              private elementRef: ElementRef) { }

  ngOnInit() {
  }

}
