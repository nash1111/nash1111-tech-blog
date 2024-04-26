import { LoaderFunction } from "@remix-run/cloudflare";
import { useLoaderData } from "@remix-run/react";
import importedIssues from '../../public/currentIssues.json';
import * as React from "react"
import {
    ColumnDef,
    ColumnFiltersState,
    SortingState,
    VisibilityState,
    flexRender,
    getCoreRowModel,
    getFilteredRowModel,
    getPaginationRowModel,
    getSortedRowModel,
    useReactTable,
} from "@tanstack/react-table"
import { ArrowUpDown, ChevronDown, MoreHorizontal } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import {
    DropdownMenu,
    DropdownMenuCheckboxItem,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Input } from "@/components/ui/input"
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"

type Issue = {
    number: number;
    title: string;
    url: string;
    body: string;
    open: boolean;
};

type IssueFromJSON = {
    body: string;
    number: number;
    state: "OPEN" | "CLOSED";
    title: string;
    url: string;
};

type RawIssue = {
    body: string;
    number: number;
    state: string;
    title: string;
    url: string;
};

function isIssueFromJSON(issue: RawIssue): issue is IssueFromJSON {
    return issue.state === "OPEN" || issue.state === "CLOSED";
}

const issues: IssueFromJSON[] = importedIssues
    .map(issue => issue as RawIssue)
    .filter(isIssueFromJSON);

function transformIssueData(data: IssueFromJSON[]): Issue[] {
    return data.map(issue => ({
        number: issue.number,
        title: issue.title,
        url: issue.url,
        body: issue.body,
        open: issue.state === "OPEN"
    }));
}

export const loader: LoaderFunction = async () => {
    const issueLists = transformIssueData(issues);
    return issueLists;
};

export default function Task() {
    const data: Issue[] = useLoaderData<Issue[]>();

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