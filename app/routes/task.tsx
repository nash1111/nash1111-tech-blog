import { LoaderFunction } from "@remix-run/cloudflare";
import { useLoaderData } from "@remix-run/react";
import importedIssues from '../../public/currentIssues.json';
import { lastUpdated } from '../../public/lastUpdated.ts';

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
import { Link } from "@remix-run/react";
import { ArrowUpDown, ChevronDown, MoreHorizontal } from "lucide-react"

import { Button } from "~/components/ui/button"
import { Checkbox } from "~/components/ui/checkbox"
import {
    DropdownMenu,
    DropdownMenuCheckboxItem,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "~/components/ui/dropdown-menu"
import { Input } from "~/components/ui/input"
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "~/components/ui/table"

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


export const columns: ColumnDef<Issue>[] = [
    {
        id: "select",
        header: ({ table }) => (
            <Checkbox
                checked={
                    table.getIsAllPageRowsSelected() ||
                    (table.getIsSomePageRowsSelected() && "indeterminate")
                }
                onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
                aria-label="Select all"
            />
        ),
        cell: ({ row }) => (
            <Checkbox
                checked={row.getIsSelected()}
                onCheckedChange={(value) => row.toggleSelected(!!value)}
                aria-label="Select row"
            />
        ),
        enableSorting: false,
        enableHiding: false,
    },
    {
        accessorKey: "title",
        header: "title",
        cell: ({ row }) => {
            const url = row.getValue("url");
            const match = url.match(/\/issues\/(\d+)/);
            const issueNumber = match ? match[1] : 'N/A';
            return (
                <div className="capitalize">
                    <Link to={url} className="text-blue-500 hover:text-blue-700">
                        #{issueNumber}
                    </Link> {row.getValue("title")}
                </div>
            );
        },
    },
    {
        accessorKey: "body",
        header: "body",
        cell: ({ row }) => {
            const body = row.getValue("body");
            return (
                <div>
                    {body}
                </div>
            );
        },
    },
    {
        accessorKey: "open",
        header: ({ column }) => {
            return (
                <Button
                    variant="ghost"
                    onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
                >
                    status
                    <ArrowUpDown className="ml-2 h-4 w-4" />
                </Button>
            )
        },
        cell: ({ row }) => (
            <div className="capitalize">{row.getValue("open") ? 'OPEN' : 'CLOSED'}</div>
        ),
    },
    {
        accessorKey: "url",
        header: ({ column }) => {
            return (
                <Button
                    variant="ghost"
                    onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
                >
                    issue number
                    <ArrowUpDown className="ml-2 h-4 w-4" />
                </Button>
            )
        },
        cell: ({ row }) => {
            const url = row.getValue("url");
            const match = url.match(/\/issues\/(\d+)/);
            const issueNumber = match ? match[1] : 'N/A'; // 'N/A'は見つからない場合のデフォルト値

            return (
                <Link to={url} className="lowercase">
                    {issueNumber}
                </Link>
            );
        },
    },
]


export const loader: LoaderFunction = async () => {
    const issueLists = transformIssueData(issues);
    return issueLists;
};

const options = {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
};


export default function Task() {
    const issueJsonCreatedAt = new Date(lastUpdated).toLocaleDateString("en-US", options);
    const issueData: Issue[] = useLoaderData<Issue[]>();

    const [sorting, setSorting] = React.useState<SortingState>([])
    const [columnFilters, setColumnFilters] = React.useState<ColumnFiltersState>(
        []
    )
    const [columnVisibility, setColumnVisibility] =
        React.useState<VisibilityState>({})
    const [rowSelection, setRowSelection] = React.useState({})

    const table = useReactTable({
        data: issueData ?? [],
        columns,
        onSortingChange: setSorting,
        onColumnFiltersChange: setColumnFilters,
        getCoreRowModel: getCoreRowModel(),
        getPaginationRowModel: getPaginationRowModel(),
        getSortedRowModel: getSortedRowModel(),
        getFilteredRowModel: getFilteredRowModel(),
        onColumnVisibilityChange: setColumnVisibility,
        onRowSelectionChange: setRowSelection,
        state: {
            sorting,
            columnFilters,
            columnVisibility,
            rowSelection,
        },
    })



    return (
        <>
            lastUpdated: {issueJsonCreatedAt}
            <div className="w-full">
                <div className="flex items-center py-4">
                    <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                            <Button variant="outline" className="ml-auto">
                                Columns <ChevronDown className="ml-2 h-4 w-4" />
                            </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end">
                            {table
                                .getAllColumns()
                                .filter((column) => column.getCanHide())
                                .map((column) => {
                                    return (
                                        <DropdownMenuCheckboxItem
                                            key={column.id}
                                            className="capitalize"
                                            checked={column.getIsVisible()}
                                            onCheckedChange={(value) =>
                                                column.toggleVisibility(!!value)
                                            }
                                        >
                                            {column.id}
                                        </DropdownMenuCheckboxItem>
                                    )
                                })}
                        </DropdownMenuContent>
                    </DropdownMenu>
                </div>
                <div className="rounded-md border">
                    <Table className="table-fixed">
                        <TableHeader>
                            {table.getHeaderGroups().map((headerGroup) => (
                                <TableRow key={headerGroup.id}>
                                    {headerGroup.headers.map((header) => {
                                        return (
                                            <TableHead key={header.id} className={header.id === "select" ? "w-8" : header.id !== "body" ? "w-40" : "w-full"}>
                                                {header.isPlaceholder
                                                    ? null
                                                    : flexRender(
                                                        header.column.columnDef.header,
                                                        header.getContext()
                                                    )
                                                }
                                            </TableHead>
                                        )
                                    })}
                                </TableRow>
                            ))}
                        </TableHeader>
                        <TableBody>
                            {table.getRowModel().rows?.length ? (
                                table.getRowModel().rows.map((row) => (
                                    <TableRow
                                        key={row.id}
                                        data-state={row.getIsSelected() && "selected"}
                                    >
                                        {row.getVisibleCells().map((cell) => (
                                            <TableCell key={cell.id}>
                                                {flexRender(
                                                    cell.column.columnDef.cell,
                                                    cell.getContext()
                                                )}
                                            </TableCell>
                                        ))}
                                    </TableRow>
                                ))
                            ) : (
                                <TableRow>
                                    <TableCell
                                        colSpan={columns.length}
                                        className="h-24 text-center"
                                    >
                                        No results.
                                    </TableCell>
                                </TableRow>
                            )}
                        </TableBody>
                    </Table>
                </div>
                <div className="flex items-center justify-end space-x-2 py-4">
                    <div className="flex-1 text-sm text-muted-foreground">
                        {table.getFilteredSelectedRowModel().rows.length} of{" "}
                        {table.getFilteredRowModel().rows.length} row(s) selected.
                    </div>
                    <div className="space-x-2">
                        <Button
                            variant="outline"
                            size="sm"
                            onClick={() => table.previousPage()}
                            disabled={!table.getCanPreviousPage()}
                        >
                            Previous
                        </Button>
                        <Button
                            variant="outline"
                            size="sm"
                            onClick={() => table.nextPage()}
                            disabled={!table.getCanNextPage()}
                        >
                            Next
                        </Button>
                    </div>
                </div>
            </div>
        </>
    );
}