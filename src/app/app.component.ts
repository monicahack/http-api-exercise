import { Component, OnInit } from '@angular/core';
import { BlahService, Blog } from './blah.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'http-api-exercise';

posts: Blog[] = [];
  constructor(public blogs: BlahService){}

ngOnInit(): void {
  this.blogs.getBlog().subscribe((data:Blog)=>{
    console.log(data);
    console.log(data.title);
    console.log(data.language);
    console.log(data.posts.length);
    console.log(data.posts[0].title);
    data.posts.forEach(post=>console.log(post.title));
    for(let post of data.posts){
      console.log(post.title);
      for(let tag of post.tags){
        console.log('--' + tag);
      }
    }
  })
}
}