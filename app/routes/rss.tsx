import { LoaderFunction } from "@remix-run/cloudflare";
import { useLoaderData, useNavigate } from "@remix-run/react";
import { ChevronLeft } from "lucide-react";
import { xml2js } from "xml-js";
import { Button } from "~/components/ui/button";

export const loader: LoaderFunction = async () => {
    // TODO: use node:fs after cloudflare supports it
    // https://github.com/cloudflare/workers-sdk/issues/3430#issuecomment-1589351536
    // https://developers.cloudflare.com/workers/runtime-apis/nodejs/
    const response = await fetch("https://nash1111rgba.com/rss.xml");
    const rssContent = await response.text();
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