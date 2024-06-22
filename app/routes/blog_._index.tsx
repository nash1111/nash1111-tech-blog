import { Link } from "@remix-run/react";
import * as postFirst from "./blog.nexttoremix.mdx";
import * as postHowTaskPageCreated from "./blog.howtaskpagecreated.mdx";
import * as postWhatICareAbout from "./blog.whaticareabout.mdx";

export default function BlogListComponent() {
    const posts = [
        { path: "/blog/nexttoremix", data: postFirst },
        { path: "/blog/howtaskpagecreated", data: postHowTaskPageCreated },
        { path: "/blog/whaticareabout", data: postWhatICareAbout }
    ];
    return (
        <div className="p-10 prose">
            {posts.map(post => (
                <div key={post.path}>
                    <Link to={post.path} prefetch="intent" unstable_viewTransition>
                        {post.data.frontmatter.title}
                    </Link>
                </div>
            ))}
        </div>
    );
}