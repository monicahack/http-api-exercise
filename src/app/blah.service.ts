import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BlahService {apiURL = "https://grandcircusco.github.io/demo-apis/blog-posts.json";
constructor(public client: HttpClient) {}

getBlog(){
  return this.client.get(this.apiURL);
}
}
