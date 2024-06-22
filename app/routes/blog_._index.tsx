import { Link } from "@remix-run/react";
import * as postFirst from "./blog.nexttoremix.mdx";
import * as postHowTaskPageCreated from "./blog.howtaskpagecreated.mdx";
import * as postWhatICareAbout from "./blog.whaticareabout.mdx";
import * as React from "react"

import { Button } from "~/components/ui/button"
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "~/components/ui/card"
import { Input } from "~/components/ui/input"
import { Label } from "~/components/ui/label"
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "~/components/ui/select"

export default function BlogListComponent() {
    // TODO: refactor this
    const posts = [
        { path: "/blog/nexttoremix", data: postFirst },
        { path: "/blog/howtaskpagecreated", data: postHowTaskPageCreated },
        { path: "/blog/whaticareabout", data: postWhatICareAbout }
    ];
    for (const post of posts) {
        console.log(post.data.frontmatter.thumbnail)
    }
    return (
        <div className="p-10 prose">
            {posts.map(post => (
                <div key={post.path}>
                    <Card className={`w-[350px] ${post.data.frontmatter.thumbnail ? `bg-[url('${post.data.frontmatter.thumbnail}')] bg-cover` : ''}`}>
                        <CardHeader>
                            <CardTitle>
                                <Link to={post.path} prefetch="intent" unstable_viewTransition>
                                    {post.data.frontmatter.title}
                                </Link>
                            </CardTitle>
                        </CardHeader>
                        <CardContent >
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
            ))
            }
        </div >
    );
}