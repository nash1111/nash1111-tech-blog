import { LoaderFunction } from "@remix-run/cloudflare";
import { useLoaderData, useNavigate } from "@remix-run/react";
import fs from "node:fs";
import { ChevronLeft } from "lucide-react";
import path from "path";
import { xml2js } from "xml-js";
import { Button } from "~/components/ui/button";

export const loader: LoaderFunction = () => {
    const rssPath = path.join(process.cwd(), "public", "rss.xml");
    const rssContent = fs.readFileSync(rssPath, "utf-8");
    const rssJson = xml2js(rssContent, { compact: true });
    return rssJson;
}

export default function Rss() {
    const rssData = useLoaderData();
    const navigate = useNavigate();

    return (
        <>
            <Button variant="link" onClick={() => navigate(-1)}>
                <ChevronLeft className="w-4 h-4 mr-2" />
                Back
            </Button>
            <pre>{JSON.stringify(rssData, null, 2)}</pre>
            <Button variant="link" onClick={() => navigate(-1)}>
                <ChevronLeft className="w-4 h-4 mr-2" />
                Back
            </Button>

        </>
    );
}
