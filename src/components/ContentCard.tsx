import { Card, CardContent, CardTitle } from "~/components/ui/card";
import type { Frontmatter } from "../mdx.d.ts";

interface CardContentProps {
    path: string;
    frontmatter: Frontmatter;
}

export function ContentCard({ path, frontmatter }: CardContentProps) {
    return (
        <div>
            <Card className="w-[320px] min-h-[360px] overflow-hidden border border-gray-200 flex flex-col justify-between">
                <a href={path}>
                    <div
                        className="h-[160px] bg-cover bg-center"
                        style={{ backgroundImage: `url(${frontmatter.thumbnail})` }}
                    ></div>
                </a>
                <CardContent className="p-4 flex flex-col justify-between flex-grow">
                    <CardTitle>
                        <a href={path}>
                            {frontmatter.title}
                        </a>
                    </CardTitle>
                    <div className="grid gap-4">
                        <div>{frontmatter.published}</div>
                        <div>
                            <div className="flex h-5 items-center space-x-4 text-sm">

                                {frontmatter.tags ? (
                                    <ul className="flex space-x-2">
                                        {frontmatter.tags.map((tag, index) => (
                                            <li key={index} className="border rounded-md px-2 py-1">
                                                {tag}
                                            </li>
                                        ))}
                                    </ul>
                                ) : null}
                            </div>
                        </div>
                    </div>
                </CardContent>
            </Card>
        </div>
    );
}