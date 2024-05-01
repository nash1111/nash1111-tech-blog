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

                <NavigationMenu>
                    <NavigationMenuList>
                        <NavigationMenuItem>
                            <NavigationMenuTrigger>Others</NavigationMenuTrigger>
                            <NavigationMenuContent

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
