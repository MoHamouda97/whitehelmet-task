import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, RouterStateSnapshot } from "@angular/router";
import { Observable } from "rxjs";
import { PostsService } from "../services/posts.service";
import { Post } from "../types/post.type";

@Injectable()

export class PostDetailsResolver  {

    constructor(private service: PostsService) {}

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) : Observable<Post[]> {
        const id: any = route.paramMap.get('id');

        return this.service.getPostDetails(id);
    }
}