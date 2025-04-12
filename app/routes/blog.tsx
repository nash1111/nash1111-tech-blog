import { Link, Outlet, useLoaderData } from "@remix-run/react";
import { Button } from "~/components/ui/button";
import { ChevronLeft, X } from "lucide-react";
import { json, LoaderFunction } from "@remix-run/cloudflare";
import { getPostDataByPath } from "~/lib/posts";
import { BlogThumbnail } from "~/components/BlogThumbnail"

export const loader: LoaderFunction = async ({ request }) => {
    const url = new URL(request.url);
    const path = url.pathname;
    const post = getPostDataByPath(path);
    const thumbnail = post?.frontmatter?.thumbnail || "/default_ogp.png";
    const title = post?.frontmatter?.title || "Untitled";
    const description = post?.frontmatter?.description || "No description";
    const thumbnailUrl = url.origin + (post?.frontmatter?.thumbnail || "default_ogp.png");
    const tweetUrl = `https://twitter.com/intent/tweet?url=${encodeURIComponent(url.href)}&text=${encodeURIComponent(title)}&via=nash1111_rgba`;
    return json({ tweetUrl, thumbnail, title, description, thumbnailUrl });
};

export default function Component() {
    const { tweetUrl, thumbnail, title, description, thumbnailUrl } = useLoaderData<{ tweetUrl: string, thumbnail: string, title: string, description: string, thumbnailUrl: string }>();
    return (
        <div className="p-10 prose md:container mx-auto">
            <head>
                <meta property="og:title" content={title} />
                <meta property="og:description" content={description} />
                <meta property="og:image" content={thumbnail} />
                <meta property="og:type" content="article" />
                <meta property="og:url" content={thumbnailUrl} />
                <meta property="og:site_name" content="nash1111 techblog" />

                <meta name="twitter:image" content={thumbnailUrl} />
                <meta name="twitter:title" content={title} />
                <meta name="twitter:description" content={description} />
                <meta name="twitter:image" content={thumbnailUrl} />
            </head>
            <h2>{title}</h2>
            <BlogThumbnail imagePath={thumbnail} height="320px" />
            <Outlet />
            <div className="flex justify-between items-center">
                <Link to="/blog" prefetch="intent" unstable_viewtransition>
                    <Button variant="link"><ChevronLeft className="w-4 h-4 mr-2" />Back to BLOG</Button>
                </Link>
                <a href={tweetUrl} target="_blank" rel="noopener noreferrer">
                    <Button variant="link"><X className="w-4 h-4 mr-2" />Post on X</Button>
                </a>
            </div>
        </div>
    );
}