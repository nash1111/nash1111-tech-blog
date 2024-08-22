
import { posts } from "~/lib/posts";
import { BlogCard } from "deps-less-ui";

export default function BlogListComponent() {

    return (
        <div>

            {posts.map(post => (
                <BlogCard key={post.path} title={post.data.frontmatter.title} url={post.path} />
            ))}
        </div>
    );
}