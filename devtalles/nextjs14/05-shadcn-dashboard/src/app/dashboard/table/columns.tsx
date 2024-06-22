"use client";

import { Checkbox } from "@/components/ui/checkbox";
import { Badge } from "@/components/ui/badge";
import { Payment } from "@/data/paynments.data";
import { ColumnDef, FilterFn, Row, SortDirection } from "@tanstack/react-table";

// actions
import {
	ArrowUpDown,
	ChevronDown,
	ChevronUp,
	MoreHorizontal,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuLabel,
	DropdownMenuSeparator,
	DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.

// https://tanstack.com/table/latest/docs/guide/column-filtering#filterfns
// fultro personalizado para la tabla
const myCustomFilterFn: FilterFn<Payment> = (
	row: Row<Payment>,
	columnId: string,
	filterValue: string,
	addMeta: (meta: any) => void
) => {
	const filterParts = filterValue.toLowerCase().split(" ");
	const rowValues = `${row.original.email} ${row.original.clientName} ${row.original.status}`.toLowerCase();

	return filterParts.every((part) => rowValues.includes(part));

	// forma anterior de hacer el filtro
	// if(row.original.email.includes(filterValue)) {
	// 	return true
	// }
	// if(row.original.clientName.includes(filterValue)) {
	// 	return true
	// }
	// if(row.original.status.includes(filterValue)) {
	// 	return true
	// }
	// return false
};

const SortedIcon = ({ isSorted }: { isSorted: SortDirection | false }) => {
	if (isSorted === "asc") return <ChevronUp className="ml-2 h-4 w-4" />;
	if (isSorted === "desc") return <ChevronDown className="ml-2 h-4 w-4" />;
};

export const columns: ColumnDef<Payment>[] = [
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
		accessorKey: "clientName",
		header: ({ column }) => {
			return (
				<Button
					variant="ghost"
					onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
				>
					Client Name
					<SortedIcon isSorted={column.getIsSorted()} />
				</Button>
			);
		},
	},
	{
		accessorKey: "status",
		header: ({ column }) => {
			return (
				<Button
					variant="ghost"
					onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
				>
					Status
					<SortedIcon isSorted={column.getIsSorted()} />
				</Button>
			);
		},
		cell: ({ row }) => {
			const data = row.getValue<string>("status");
			const variant =
				{
					success: "success",
					pending: "default",
					failed: "destructive",
					processing: "info",
				}[data] ?? ("default" as any);
			return (
				<Badge capitalize variant={variant}>
					{data}
				</Badge>
			);
		},
	},
	{
		accessorKey: "amount",
		// header: () => (),
		header: ({ column }) => {
			return (
				<div className="text-right">
					<Button
						className="text-right"
						variant="ghost"
						onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
					>
						Amount
						<SortedIcon isSorted={column.getIsSorted()} />
					</Button>
				</div>
			);
		},
		cell: ({ row }) => {
			const amount = parseFloat(row.getValue("amount"));
			const formatted = new Intl.NumberFormat("en-US", {
				style: "currency",
				currency: "USD",
			}).format(amount);

			return <div className="text-right font-medium">{formatted}</div>;
		},
	},
	{
		accessorKey: "email",
		filterFn: myCustomFilterFn,
		header: ({ column }) => {
			return (
				<Button
					variant="ghost"
					onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
				>
					Email
					<SortedIcon isSorted={column.getIsSorted()} />
				</Button>
			);
		},
	},
	{
		id: "actions",
		cell: ({ row }) => {
			const payment = row.original;

			return (
				<DropdownMenu>
					<DropdownMenuTrigger asChild>
						<Button variant="ghost" className="h-8 w-8 p-0">
							<span className="sr-only">Open menu</span>
							<MoreHorizontal className="h-4 w-4" />
						</Button>
					</DropdownMenuTrigger>
					<DropdownMenuContent align="end">
						<DropdownMenuLabel>Actions</DropdownMenuLabel>
						<DropdownMenuItem
							onClick={() => navigator.clipboard.writeText(payment.id)}
						>
							Copy payment ID
						</DropdownMenuItem>
						<DropdownMenuSeparator />
						<DropdownMenuItem>View customer</DropdownMenuItem>
						<DropdownMenuItem>View payment details</DropdownMenuItem>
					</DropdownMenuContent>
				</DropdownMenu>
			);
		},
	},
];
