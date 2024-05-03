import { Link } from "@remix-run/react";
import * as postFirst from "./blog.first.mdx";
import * as postSecond from "./blog.second.mdx";

export default function BlogListComponent() {
    return (
        <div className="p-10 prose">
            {postFirst.frontmatter.title}
            {postSecond.frontmatter.title}
            <Link to={"/blog/first"} prefetch="intent" unstable_viewTransition>first post</Link>
        </div>
    );
}