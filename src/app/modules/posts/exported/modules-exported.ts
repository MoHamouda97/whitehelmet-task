import { RouterModule } from "@angular/router";
import { postsRouting } from "../posts.routing";
import { InfiniteScrollModule } from "ngx-infinite-scroll";
import { SharedModule } from "src/app/shared/shared.module";

export const exportedModules = [
    RouterModule.forChild(postsRouting),
    InfiniteScrollModule,
    SharedModule
]