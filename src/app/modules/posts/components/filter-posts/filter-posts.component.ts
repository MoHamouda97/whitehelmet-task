import { ChangeDetectionStrategy, Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-filter-posts',
  templateUrl: './filter-posts.component.html',
  styleUrls: ['./filter-posts.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FilterPostsComponent {
  search = '';
  @Output() onSearch = new EventEmitter<string>();
}
