import { AfterViewInit, Component, ElementRef, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subject, debounceTime, fromEvent, map, takeUntil } from 'rxjs';
import { Post } from '../../types/post.type';

@Component({
  selector: 'app-all-posts',
  templateUrl: './all-posts.component.html',
  styleUrls: ['./all-posts.component.css']
})
export class AllPostsComponent implements OnInit, OnDestroy {  
  posts: Post[] = [];
  cachedPosts: Post[] = [];
  displayedColumns: string[] = ['id', 'title', 'body', 'actions'];

  destroy$ = new Subject();

  constructor(private router: ActivatedRoute) {}

  //#region // HOOKS
  ngOnInit(): void {
    this.routerSubscription();
  }

  ngOnDestroy(): void {
    this.destroy$.next(null);
    this.destroy$.complete();
  }
  //#endregion

  //#region // SUBSCRIPTIONS
  routerSubscription(): void {
    this.router.data.pipe(
      map(data => data['posts']),
      takeUntil(this.destroy$)
    ).subscribe(posts => {
      this.posts = posts;
      this.cachedPosts = posts;
    })
  }
  //#endregion

  //#region // METHODS
  onSearch(search: string) {
    search.trim() ? this.posts = this.cachedPosts.filter((post) => post.title.toLowerCase().includes(search) || post.body.toLocaleLowerCase().includes(search)) : this.posts = this.cachedPosts;
  }
  //#endregion

}
