import { Route } from "@angular/router";
import { LayoutComponent } from "./layout/layout.component";

export const appRoutes: Route[] = [
    // Redirect empty path to 'sign-in'
    {path: '', pathMatch : 'full', redirectTo: 'app/posts'}, 
    

    {
        path: 'app',
        component: LayoutComponent,
        children: [
            {
                path: 'posts',
                loadChildren: () => import('./modules/posts/posts.module').then(m => m.PostsModule)
            }
        ]
    },

    {
        path: '**',
        redirectTo: 'app/posts'
    }
] 