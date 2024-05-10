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


                {
                    //                <Link to="https://nash1111-old-blog.pages.dev/">
                    //                    <Button variant="default">old blog</Button>
                    //                </Link>
                    //<Link to="/task" prefetch="intent" unstable_viewTransition>
                    //    <Button variant="default">task</Button>
                    //</Link>
                }
                <Link to="/blog" prefetch="intent" unstable_viewTransition>
                    <Button variant="default">Blog</Button>
                </Link>
                <Link to="/about" prefetch="intent" unstable_viewTransition>
                    <Button variant="default">about</Button>
                </Link>

                <NavigationMenu>
                    <NavigationMenuList>
                        <NavigationMenuItem>
                            <NavigationMenuTrigger>Others</NavigationMenuTrigger>
                            <NavigationMenuContent>
                                <ul className="flex flex-col gap-3 p-2 overflow-x-auto">
                                    {components.map((component) => (
                                        <div className="break-words" key={component.id}>
                                            <Link to={component.href} prefetch="intent" unstable_viewTransition className="max-w-xs" >
                                                <Button variant="default" size="sm">{component.title}</Button>
                                            </Link>
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

const components: { id: number, title: string; href: string }[] = [
    {
        id: 1,
        title: "Tasks",
        href: "/task",
    },
    {
        id: 2,
        title: "Snippets",
        href: "/docs/primitives/hover-card",
    },
]
