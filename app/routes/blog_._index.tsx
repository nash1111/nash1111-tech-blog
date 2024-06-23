
import { BlogCard } from "~/components/BlogCard";
import { posts } from "~/lib/posts";

export default function BlogListComponent() {

    return (
        <div className="p-10 prose">
            {posts.map(post => (
                <BlogCard key={post.path} path={post.path} frontmatter={post.data.frontmatter} />
            ))}
        </div>
    );
}