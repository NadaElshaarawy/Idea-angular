import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '@app/store/app-store.module';
import { SetInitialUser } from './store/actions/auth.action';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'twitterBlog';

  constructor(){}

  ngOnInit(){
    
  }
}
