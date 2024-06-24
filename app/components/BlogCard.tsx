import { Link } from "@remix-run/react";
import { Card, CardContent, CardTitle } from "~/components/ui/card";
import { Frontmatter } from "~/mdx";

interface BlogCardProps {
    path: string;
    frontmatter: Frontmatter;
}

export function BlogCard({ path, frontmatter }: BlogCardProps) {
    return (
        <div>
            <Card className="w-[320px] overflow-hidden border border-gray-200">
                <Link to={path} prefetch="intent" unstable_viewTransition>
                    <div
                        className="h-[160px] bg-cover bg-center"
                        style={{ backgroundImage: `url(${frontmatter.thumbnail})` }}
                    ></div>
                </Link>
                <CardContent className="p-4">
                    <CardTitle>
                        <Link to={path} prefetch="intent" unstable_viewTransition>
                            {frontmatter.title}
                        </Link>
                    </CardTitle>
                    <div>{frontmatter.published}</div>
                    <div>
                        {frontmatter.tags ? (
                            <ul>
                                {frontmatter.tags.map((tag, index) => (
                                    <li key={index}>{tag}</li>
                                ))}
                            </ul>
                        ) : null}
                    </div>
                </CardContent>
            </Card>
        </div>
    );
}