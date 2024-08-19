import { LinksFunction } from "@remix-run/cloudflare";
import {
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";
import stylesheet from "~/tailwind.css?url";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { MDXProvider } from '@mdx-js/react';
import CodeBlock from './components/CodeBlock';

const components = {
    code: CodeBlock,
};


export const links: LinksFunction = () => [
  { rel: "stylesheet", href: stylesheet },
];

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="alternate" type="application/rss+xml" title="RSS" href="/rss.xml" />
        <link rel="alternate" type="application/json" title="JSON Feed" href="/feed.json" />
        <link rel="alternate" type="application/atom+xml" title="Atom" href="/atom.xml" />
        <Meta />
        <Links />
      </head>
      <body>
        {children}
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}

export default function App() {
  return (
    <MDXProvider components={{code: CodeBlock}}>
    <div className="flex flex-col min-h-screen">
      <Header />
      <div className="flex-grow bg-gradient-to-r from-blue-100 to-blue-200">
        <Outlet />
      </div>
      <Footer />
    </div>
    </MDXProvider>);
}
