import { Link } from "@remix-run/react";
import * as postFirst from "./blog.first.mdx";

export default function BlogListComponent() {
    return (
        <div className="p-10 prose">
            <Link to={"/blog/first"} prefetch="intent" unstable_viewTransition>{postFirst.frontmatter.title}</Link>
        </div>
    );
}