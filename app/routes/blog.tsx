import { Link, Outlet, useLocation } from "@remix-run/react";
import { Button } from "~/components/ui/button";
import { ChevronLeft, Twitter } from "lucide-react";

export default function Component() {
    const location = useLocation();
    const tweetUrl = `https://twitter.com/intent/tweet?url=${encodeURIComponent(`https://yourdomain.com${location.pathname}`)}`;

    return (
        <div className="p-10 prose md:container mx-auto">
            <Outlet />
            <div className="flex justify-between items-center">
                <Link to="/blog" prefetch="intent" unstable_viewTransition>
                    <Button variant="link"><ChevronLeft className="w-4 h-4 mr-2" />Back to BLOG</Button>
                </Link>
                <a href={tweetUrl} target="_blank" rel="noopener noreferrer">
                    <Button variant="primary"><Twitter className="w-4 h-4 mr-2" />Tweet</Button>
                </a>
            </div>
        </div>
    );
}