import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, ReplaySubject, of } from 'rxjs';
import { catchError, concatMap, map, share } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { Post } from '../types/post.type';
import { Comment } from '../types/comment.type';
import { User } from '../types/user.type';

@Injectable()
export class PostsService {
  posts$: Observable<Post[]> = this.http.get<Post[]>(`${environment.api}/posts`).pipe(
    share({
      connector: () => new ReplaySubject(),
      resetOnRefCountZero: true,
      resetOnComplete: false,
      resetOnError: true
    }),
    catchError(_ => of([]))
  )

  constructor(private http: HttpClient) { }

  getPost(postId: number): Observable<Post | null> {
    return this.http.get<Post>(`${environment.api}posts/${postId}`).pipe(
      catchError(_ => of(null))
    )
  }

  getComments(postId: number): Observable<Comment[]> {
    return this.http.get<Comment[]>(`${environment.api}comments?postId=${postId}`).pipe(
      catchError(_ => of([]))
    )
  }

  getUser(userId: number): Observable<User | null> {
    return this.http.get<User>(`${environment.api}users/${userId}`).pipe(
      catchError(_ => of(null))
    )
  }

  getPostDetails(postId: number): Observable<any> {
    const postDetails: {post: Post | null, user: User | null, comments: Comment[]} = {post: null, user: null, comments: []} ;

    return this.getPost(postId).pipe(
      map(post => {
        postDetails.post = post;
        return post
      }),
      concatMap(post => this.getUser((post as Post).userId).pipe(
        map(user => (postDetails.user = user))
      )),
      concatMap(_ => this.getComments(postId).pipe(
        map(comments => {
          postDetails.comments = comments
        })
      )),
      map(_ => postDetails),
    )
  }

}
