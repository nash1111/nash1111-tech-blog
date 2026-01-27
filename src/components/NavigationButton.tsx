import { Button } from "./ui/button";

interface NavigationButtonProps {
    path: string;
    label: string;
}

export const NavigationButton = ({ path, label }: NavigationButtonProps) => {
    return (
        <div className="flex gap-4">
            <a href={path}>
                <Button variant="default" client:load>{label}</Button>
            </a>
        </div>
    );
};
