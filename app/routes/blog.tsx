import { Link, Outlet } from "@remix-run/react";
import { Button } from "~/components/ui/button";
import { ChevronLeft } from "lucide-react";

export default function Component() {
    return (
        <div className="p-10 prose md:container mx-auto">
            <Outlet />
            <Link to="/blog" prefetch="intent" unstable_viewTransition>
                <Button variant="link"><ChevronLeft className="w-4 h-4 mr-2" />Back to BLOG</Button>
            </Link>
        </div>
    );
}
