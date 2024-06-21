import { json, LoaderFunction } from '@remix-run/cloudflare';
import { promises as fs } from 'fs';
import path from 'path';

export const loader: LoaderFunction = async () => {
    // TODO: gather paths automatically
    const filePaths = [
        'app/routes/blog.nexttoremix.mdx',
        'app/routes/blog.howtaskpagecreated.mdx'
    ];

    const fileContents = await Promise.all(
        filePaths.map(filePath =>
            fs.readFile(path.resolve(filePath), 'utf8')
        )
    );

    const escapeXML = (str: string) => str.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;').replace(/'/g, '&apos;');

    // Convert fileContents to XML format
    const xmlContent = `<rss version="2.0">
        <channel>
            <title>Your Blog Title</title>
            <description>Blog feed description</description>
            <link>http://yourwebsite.com</link>
            ${fileContents.map(content => `<item><description>${escapeXML(content)}</description></item>`).join('')}
        </channel>
    </rss>`;

    // Return XML response
    return new Response(xmlContent, {
        headers: { 'Content-Type': 'application/xml' }
    });

};
