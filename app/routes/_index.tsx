import type { MetaFunction } from "@remix-run/cloudflare";
import { Link } from "@remix-run/react";
import { Button } from "~/components/ui/button";

export const meta: MetaFunction = () => {
  return [
    { title: "nash1111 techblog" },
    {
      name: "description",
      content: "nash1111 techblog with Remix and Vite on Cloudflare Pages.",
    },
    {
      name: "keywords",
      content: "techblog, Web, Backend, Frontend, Remix, Rust, axum, wasm, wgpu, WebGL, WebGL2, THREE, TypeScript, Deno, WebGPU"
    },
    {
      name: "author",
      content: "nash1111"
    },
    {
      name: "robots",
      content: "index, follow"
    }
  ];
};

export default function Index() {
  return (
    <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.8" }}>
      <Link to="/blog" prefetch="intent" unstable_viewTransition>
        <Button variant="default">Blog</Button>
      </Link>
    </div>
  );
}
