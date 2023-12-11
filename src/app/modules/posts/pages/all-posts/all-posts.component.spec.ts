import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AllPostsComponent } from './all-posts.component';
import { RouterTestingModule } from "@angular/router/testing";
import { FilterPostsComponent } from '../../components/filter-posts/filter-posts.component';
import { exportedMat } from '../../exported/mat-exported';

describe('AllPostsComponent', () => {
  let component: AllPostsComponent;
  let fixture: ComponentFixture<AllPostsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        AllPostsComponent,
        FilterPostsComponent
      ],
      imports: [
        RouterTestingModule,
        ...exportedMat
      ]
    });
    fixture = TestBed.createComponent(AllPostsComponent);
    component = fixture.componentInstance;
  });

  beforeEach(() => {
    const sample = [ {id: 1, userId: 1, title: 'test title', body: 'test body'} ];
    component.posts = sample;
    component.cachedPosts = sample;
  })

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should filter successfully and return array with 1 length', () => {
    component.onSearch('t');
    expect(component.posts.length).toEqual(1);
  })

  it('should not filter and return array with 0 length', () => {
    component.onSearch('123');
    expect(component.posts.length).toEqual(0);
  })
});
