import { Component, OnInit, Output, EventEmitter, ElementRef} from '@angular/core';
import { SearchResult } from './../models/search-result.model';
import { YouTubeSearchService } from './../services/youtube-search.service';
import { Observable, fromEvent } from 'rxjs';
import { map, filter, debounceTime, tap, switchAll } from 'rxjs/operators';

@Component({
  selector: 'app-search-box',
  templateUrl: './search-box.component.html',
  styleUrls: ['./search-box.component.css']
})
export class SearchBoxComponent implements OnInit {

  //Here we create the EventEmitter s for both loading and the results .
  //loading will emit a boolean when this search is loading and results will
  //emit an array of SearchResult s when the search is finished.
  @Output() loading: EventEmitter<boolean> = new EventEmitter<boolean>();
  @Output() results: EventEmitter<SearchResult[]> = new EventEmitter<SearchResult[]>(); 

  constructor(private youTubeSearchService: YouTubeSearchService,
              private elementRef: ElementRef) { }

  //ngOnInit is a good place to do initialization (vs. the constructor ) 
  //because inputs set on a component are not available in the constructor
  ngOnInit() {
    // convert the `keyup` event into an observable stream
    const obs = fromEvent(this.elementRef.nativeElement, 'keyup').pipe(

      map((e: any) => e.target.value), // extract the value of the input
      filter((text: string) => text.length > 1), // filter out if empty
      debounceTime(250),                         // only once every 250ms
      tap(() => this.loading.emit(true)),         // enable loading
      // search, discarding old events if new input comes in
      map((query: string) => this.youTubeSearchService.search(query)),
      switchAll(),
      // act on the return of the search
      ).subscribe(
        (results: SearchResult[]) => { // on sucesss
          this.loading.emit(false);
          this.results.emit(results);
        },
        (err: any) => { // on error
          console.log(err);
          this.loading.emit(false);
        },
        () => { // on completion
          this.loading.emit(false);
        }
      );
  }

}
