import * as postFirst from "./blog.nexttoremix.mdx";
import * as postHowTaskPageCreated from "./blog.howtaskpagecreated.mdx";
import * as postWhatICareAbout from "./blog.whaticareabout.mdx";
import * as postPrAgent from "./blog.pragent.mdx";
import { BlogCard } from "~/components/BlogCard";

export default function BlogListComponent() {
    const posts = [
        { path: "/blog/nexttoremix", data: postFirst },
        { path: "/blog/howtaskpagecreated", data: postHowTaskPageCreated },
        { path: "/blog/whaticareabout", data: postWhatICareAbout },
        { path: "/blog/pragent", data: postPrAgent }
    ];

    return (
        <div className="p-10 prose">
            {posts.map(post => (
                <BlogCard key={post.path} path={post.path} frontmatter={post.data.frontmatter} />
            ))}
        </div>
    );
}