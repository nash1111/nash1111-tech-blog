import { MDXComponents, MergeComponents } from 'node_modules/@mdx-js/react/lib';
import React, { useState } from 'react';

const CodeBlock = ({ children }: { children: React.ReactNode }): Readonly<MDXComponents> | MergeComponents | null | undefined => {
    const [copied, setCopied] = useState(false);

    const handleCopy = () => {
        if (children) {
            navigator.clipboard.writeText(children.toString());
            setCopied(true);
            setTimeout(() => setCopied(false), 2000);
        }
    };

    return (
        <div className="relative">
            <pre>
                <code>{children}</code>
            </pre>
            <button
                onClick={handleCopy}
                className="absolute top-2 right-2 bg-gray-200 p-1 rounded"
            >
                {copied ? 'Copied!' : 'Copy'}
            </button>
        </div>
    );
};

export default CodeBlock;