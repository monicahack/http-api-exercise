import { Component, OnInit } from '@angular/core';
import { BlahService } from './blah.service';

export interface Blog {
  title:string; 
  language:string;
  posts:string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'http-api-exercise';

posts: Blog[] = [];
  constructor(public postsApi: BlahService){}
ngOnInit(){
  this.postsApi.getBlog().subscribe((posts:any )=>{
    this.posts = posts;
    console.log(this.title);

  })
}

}
