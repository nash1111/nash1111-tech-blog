import { LoaderFunction, json } from "@remix-run/cloudflare";

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
    console.log('issues')
    console.log(issues)
    const issueLists = json(transformIssueData(issues));
    console.log('issueLists')
    console.log(issueLists);
    return json(issueLists);
};

export default function Task({ data }: { data: Issue[] }) {
    console.log('data')
    console.log(data)
    // dataが空または未定義の場合の処理
    if (!data || data.length === 0) {
        return <div>No issues found.{data} a</div>;
    }

    return (
        <>
            <div>Task page</div>
            <ul>
                {data[0].title}
            </ul>
        </>
    );
}