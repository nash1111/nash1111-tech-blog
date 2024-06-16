import { Link, Outlet, useLoaderData } from "@remix-run/react";
import { Button } from "~/components/ui/button";
import { ChevronLeft, X } from "lucide-react";
import { json, LoaderFunction } from "@remix-run/node";

export const loader: LoaderFunction = async ({ request }) => {
    const url = new URL(request.url);
    const tweetUrl = `https://twitter.com/intent/tweet?url=${encodeURIComponent(url.href)}`;
    return json({ tweetUrl });
};

export default function Component() {
    const { tweetUrl } = useLoaderData<{ tweetUrl: string }>();

    return (
        <div className="p-10 prose md:container mx-auto">
            <Outlet />
            <div className="flex justify-between items-center">
                <Link to="/blog" prefetch="intent" unstable_viewTransition>
                    <Button variant="link"><ChevronLeft className="w-4 h-4 mr-2" />Back to BLOG</Button>
                </Link>
                <a href={tweetUrl} target="_blank" rel="noopener noreferrer">
                    <Button variant="link"><X className="w-4 h-4 mr-2" />Post on X</Button>
                </a>
            </div>
        </div>
    );
}