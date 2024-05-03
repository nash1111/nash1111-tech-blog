import { Outlet } from "@remix-run/react";

import * as postFirst from "./blog.first.mdx";

export default function Component() {
    console.log(postFirst);
    return (
        <div className="p-10 prose">
            <Outlet />
            {JSON.stringify(postFirst)}
            {postFirst.frontmatter}
            <postFirst.default />
        </div>
    );
}
