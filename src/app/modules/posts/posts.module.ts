import { NgModule } from "@angular/core";
import { exportedResolvers } from "./exported/resolvers-exported";
import { exportedServices } from "./exported/services-exported";
import { exportedMat } from "./exported/mat-exported";
import { exportedModules } from "./exported/modules-exported";
import { exportedComponents } from "./exported/components-exported";

@NgModule({
    declarations: [
        ...exportedComponents
    ],
    imports: [
        ...exportedModules,
        ...exportedMat
    ],
    providers: [
        ...exportedServices,
        ...exportedResolvers
    ]
})
export class PostsModule {}