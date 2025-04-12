
import { posts } from "~/lib/posts";
import { BlogCard } from "deps-less-ui";
import { Link } from "@remix-run/react";

export default function BlogListComponent() {

    return (
        <div className="p-10 flex flex-wrap gap-4 w-full justify-center">
            {posts.map(post => (
                <Link key={post.path} to={post.path} prefetch="intent" unstable_viewtransition="true">
                    <BlogCard title={post.data.frontmatter.title} imageUrl={post.data.frontmatter.thumbnail} tags={post.data.frontmatter.tags} />
                </Link>
            ))}
        </div>
    );
}