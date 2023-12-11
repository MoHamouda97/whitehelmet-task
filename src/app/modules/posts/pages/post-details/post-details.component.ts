import { ChangeDetectionStrategy, Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subject, map, takeUntil } from 'rxjs';
import { PostsService } from '../../services/posts.service';
import { Post } from '../../types/post.type';
import { User } from '../../types/user.type';
import { Comment } from '../../types/comment.type';

@Component({
  selector: 'app-post-details',
  templateUrl: './post-details.component.html',
  styleUrls: ['./post-details.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PostDetailsComponent implements OnInit, OnDestroy {
  post!: Post;
  user!: User;
  comments: Comment[] = [];
  destroy$ = new Subject();

  constructor(private router: ActivatedRoute, private service: PostsService) {}

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
        map(data => data['postDetails']),
        takeUntil(this.destroy$)
      ).subscribe((details) => {
        this.post = details.post;
        this.user = details.user;
        this.comments = details.comments;
      })
    }
    //#endregion
}
