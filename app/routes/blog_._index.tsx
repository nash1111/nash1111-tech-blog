import { Link } from "@remix-run/react";
import * as postFirst from "./blog.nexttoremix.mdx";
import * as postHowTaskPageCreated from "./blog.howtaskpagecreated.mdx";
import * as postWhatICareAbout from "./blog.whaticareabout.mdx";
import {
    Card,
    CardContent,
    CardTitle,
} from "~/components/ui/card"

export default function BlogListComponent() {
    const posts = [
        { path: "/blog/nexttoremix", data: postFirst },
        { path: "/blog/howtaskpagecreated", data: postHowTaskPageCreated },
        { path: "/blog/whaticareabout", data: postWhatICareAbout }
    ];

    return (
        <div className="p-10 prose">
            {posts.map(post => (
                <div key={post.path} className="mb-6">
                    <Card className="w-[350px] overflow-hidden border border-gray-200">
                        <Link to={post.path} prefetch="intent" unstable_viewTransition><div className="h-[175px] bg-cover bg-center" style={{ backgroundImage: `url(${post.data.frontmatter.thumbnail})` }}></div></Link>
                        <CardContent className="p-4">
                            <CardTitle>
                                <Link to={post.path} prefetch="intent" unstable_viewTransition>
                                    {post.data.frontmatter.title}
                                </Link>
                            </CardTitle>
                            <div>
                                {post.data.frontmatter.published}
                            </div>
                            <div>
                                {post.data.frontmatter.tags ? (
                                    <ul>
                                        {post.data.frontmatter.tags.map((tag, index) => (
                                            <li key={index}>{tag}</li>
                                        ))}
                                    </ul>
                                ) : null}
                            </div>
                        </CardContent>
                    </Card>
                </div>
            ))}
        </div>
    );
}