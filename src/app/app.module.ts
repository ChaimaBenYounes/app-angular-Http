import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { SimpleHttpComponent } from './simple-http/simple-http.component';
import { YoutubeSearchComponent } from './youtube-search/youtube-search.component'
import { youtubeSearchInjectables } from './youtube-search/you-tube-search.injectables';
import { SearchBoxComponent } from './search-box/search-box.component';
import { SearchResultComponent } from './search-result/search-result.component';

@NgModule({
  declarations: [
    AppComponent,
    SimpleHttpComponent,
    YoutubeSearchComponent,
    SearchBoxComponent,
    SearchResultComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [youtubeSearchInjectables],
  bootstrap: [AppComponent]
})
export class AppModule { }
