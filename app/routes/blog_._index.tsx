import { Link } from "@remix-run/react";
import * as postFirst from "./blog.nexttoremix.mdx";
import * as postHowTaskPageCreated from "./blog.howtaskpagecreated.mdx";
import * as postWhatICareAbout from "./blog.whaticareabout.mdx";

export default function BlogListComponent() {
    return (
        <div className="p-10 prose">
            <div><Link to={"/blog/nexttoremix"} prefetch="intent" unstable_viewTransition>{postFirst.frontmatter.title}</Link></div>
            <div><Link to={"/blog/howtaskpagecreated"} prefetch="intent" unstable_viewTransition>{postHowTaskPageCreated.frontmatter.title}</Link></div>
            <div><Link to={"/blog/whaticareabout"} prefetch="intent" unstable_viewTransition>{postWhatICareAbout.frontmatter.title}</Link></div>
        </div>
    );
}