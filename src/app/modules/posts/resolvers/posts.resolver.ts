import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, RouterStateSnapshot } from "@angular/router";
import { Observable } from "rxjs";
import { PostsService } from "../services/posts.service";
import { Post } from "../types/post.type";

@Injectable()

export class PostsResolver  {

    constructor(private service: PostsService) {}

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) : Observable<Post[]> {
        return this.service.posts$;
    }
}