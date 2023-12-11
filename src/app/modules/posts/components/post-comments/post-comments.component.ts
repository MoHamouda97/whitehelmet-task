import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Comment } from './../../types/comment.type';

@Component({
  selector: 'app-post-comments',
  templateUrl: './post-comments.component.html',
  styleUrls: ['./post-comments.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PostCommentsComponent {
  @Input() comment!: Comment;
}
