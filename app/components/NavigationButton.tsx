import { Button } from "./ui/button";
import { Link } from "@remix-run/react";

interface NavigationButtonProps {
    path: string;
    label: string;
}

export const NavigationButton = ({ path, label }: NavigationButtonProps) => {
    return (
        <div className="flex gap-4">
            <Link prefetch="intent" to={path} unstable_viewTransition>
                <Button variant="default">{label}</Button>
            </Link>
        </div>
    );
};
