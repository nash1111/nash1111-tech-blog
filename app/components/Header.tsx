import { Button } from "./ui/button";
import { Link } from "@remix-run/react";
import { cn } from "~/lib/utils";
import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuList, NavigationMenuTrigger, navigationMenuTriggerStyle } from "~/components/ui/navigation-menu"


export const Header = () => {
    return (
        <header className="flex justify-between items-center p-4 bg-gradient-to-r from-cyan-500 to-blue-700">
            <div className="flex gap-4">
                <Link prefetch="intent" to="/" unstable_viewTransition>
                    <Button variant="default">nash1111</Button>
                </Link>
            </div>
            <div className="flex gap-4">


                <NavigationMenu>
                    <NavigationMenuList>
                        <NavigationMenuItem>
                            <NavigationMenuTrigger>Others</NavigationMenuTrigger>
                            <NavigationMenuContent
                                className={cn(
                                    "min-w-[16rem] left-0 top-0 right-0 md:right-auto w-full data-[motion^=from-]:animate-in data-[motion^=to-]:animate-out data-[motion^=from-]:fade-in data-[motion^=to-]:fade-out data-[motion=from-end]:slide-in-from-right-52 data-[motion=from-start]:slide-in-from-left-52 data-[motion=to-end]:slide-out-to-right-52 data-[motion=to-start]:slide-out-to-left-52 md:absolute md:w-auto",
                                )}
                            >
                                <ul className="grid gap-3 p-4 grid-cols-1 overflow-auto">
                                    {components.map((component) => (
                                        <div className="break-words"
                                            key={component.id}
                                        >
                                            {component.title}
                                        </div>
                                    ))}
                                </ul>
                            </NavigationMenuContent>
                        </NavigationMenuItem>

                    </NavigationMenuList>
                </NavigationMenu>
                <Link to="https://nash1111-old-blog.pages.dev/">
                    <Button variant="default">old blog</Button>
                </Link>
                <Link to="/blog" prefetch="intent" unstable_viewTransition>
                    <Button variant="default">Blog</Button>
                </Link>
                <Link to="/about" prefetch="intent" unstable_viewTransition>
                    <Button variant="default">about</Button>
                </Link>
                <Link to="/task" prefetch="intent" unstable_viewTransition>
                    <Button variant="default">task</Button>
                </Link>

            </div>
        </header>
    );
};

const components: { id: number, title: string; href: string; description: string, closed: boolean }[] = [
    {
        id: 1,
        title: "Tasks",
        href: "/docs/primitives/alert-dialog",
        description:
            "A modal dialog that interrupts the user with important content and expects a response.",
        closed: true
    },
    {
        id: 2,
        title: "Snippets",
        href: "/docs/primitives/hover-card",
        description:
            "For sighted users to preview content available behind a link.",
        closed: true
    },
]
