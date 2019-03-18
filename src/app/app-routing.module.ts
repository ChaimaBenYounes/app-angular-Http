import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SimpleHttpComponent } from './simple-http/simple-http.component';
import { YoutubeSearchComponent } from './youtube-search/youtube-search.component'

const routes: Routes = [
  {path:'', component:SimpleHttpComponent},
  {path:'youtube', component:YoutubeSearchComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
