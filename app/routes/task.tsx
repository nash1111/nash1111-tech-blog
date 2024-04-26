import { LoaderFunction, json } from "@remix-run/cloudflare";
import { useLoaderData } from "@remix-run/react";

type Issue = {
    number: number;
    title: string;
    url: string;
    body: string;
    open: boolean;
};

function transformIssueData(data: any[]): Issue[] {
    return data.map(issue => ({
        number: issue.number,
        title: issue.title,
        url: issue.url,
        body: issue.body,
        open: issue.state === "OPEN"
    }));
}

import issues from '../../public/currentIssues.json';

// read data from publid/currentIssues.json
export const loader: LoaderFunction = async () => {
    //console.log('issues')
    //console.log(issues)
    const issueLists = transformIssueData(issues);
    console.log('issueLists')
    console.log(issueLists);
    return issueLists;
};

export default function Task() {
    console.log('data on page')
    const data: Issue[] = useLoaderData<Issue[]>();
    console.log(data)
    // dataが空または未定義の場合の処理
    if (!data || data.length === 0) {
        return <div>No issues found. a</div>;
    }

    return (
        <>
            <div>Task page</div>
            <ul>
                {JSON.stringify(data)}
            </ul>
        </>
    );
}