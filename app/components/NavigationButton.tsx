import { Button } from "./ui/button";
import { Link } from "@remix-run/react";

interface NavigationButtonProps {
    path: string;
    label: string;
}

//function NavImage({ src, alt, id }) {
//    const to = `/images/${idx}`;
//    const vt = unstable_useViewTransitionState(href);
//    return (
//      <Link to={to} unstable_viewtransition="true">
//        <img
//          src={src}
//          alt={alt}
//          style={{
//            viewTransitionName: vt ? "image-expand" : "",
//          }}
//        />
//      </Link>
//    );
//  }

export const NavigationButton = ({ path, label }: NavigationButtonProps) => {
    return (
        <div className="flex gap-4">
            <Link prefetch="intent" to={path} unstable_viewtransition="true">
                <Button variant="default">{label}</Button>
            </Link>
        </div>
    );
};
