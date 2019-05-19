import { Component } from '@angular/core';
import { Movie } from './movies/movie.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'movies-list';
  navigateTo = 'movies';
  watchList: Movie[] = [];
  onNavigate(page: string){
    this.navigateTo = page;
  }

  addToList(toAdd: Movie){
    this.watchList.push(toAdd);
  }
}
