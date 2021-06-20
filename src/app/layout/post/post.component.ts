import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { map } from 'rxjs/operators';
import { ApiService } from 'src/app/api.service';
import { AppState } from 'src/app/app.reducer';
import { getPosts, getPostsFailed, getPostsSuccess } from './post.actions';
import { Post } from './post.model';
import { selectPosts } from './post.selectors';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  constructor(private apiService:ApiService,private store:Store<AppState>) { }
  posts:Post[];
  ngOnInit(): void {
    this.getPosts();
  }

  getPosts(){
    this.store.dispatch(getPosts());
    this.store.select(selectPosts).subscribe(
      posts=>this.posts = posts
    );

    if(this.posts.length == 0){
      this.apiService.getData('/posts').pipe(
        map(data=>data as Post[]),
      ).subscribe(
        (posts)=>{
          this.posts = posts;
          this.store.dispatch(getPostsSuccess({posts}))
        },
        ((err)=>{
          this.store.dispatch(getPostsFailed());
        })
      )
    }
    
  }

}
