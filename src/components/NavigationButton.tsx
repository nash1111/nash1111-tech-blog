import { Button } from "./ui/button";

interface NavigationButtonProps {
    path: string;
    label: string;
}

export const NavigationButton = ({ path, label }: NavigationButtonProps) => {
    return (
        <div className="flex gap-4">
            <a href={path}>
                <Button variant="default">{label}</Button>
            </a>
        </div>
    );
};
