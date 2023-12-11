import { Route } from "@angular/router";
import { AllPostsComponent } from "./pages/all-posts/all-posts.component";
import { PostDetailsComponent } from "./pages/post-details/post-details.component";
import { PostsResolver } from "./resolvers/posts.resolver";
import { PostDetailsResolver } from "./resolvers/post-details.resolver";

export const postsRouting: Route[] = [
    {
        path: '',
        component: AllPostsComponent,
        resolve: {
            posts: PostsResolver
        }
    },
    {
        path: ':id',
        component: PostDetailsComponent,
        resolve: {
            postDetails: PostDetailsResolver
        }
    }
]