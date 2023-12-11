import { PostDetailsResolver } from "../resolvers/post-details.resolver";
import { PostsResolver } from "../resolvers/posts.resolver";

export const exportedResolvers = [
    PostsResolver,
    PostDetailsResolver
]