"use client"
 
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label";
import { Badge } from '@/components/ui/badge';
import React from "react";

export default function Page() {
	const [checked, setChecked] = React.useState(false);
  return (
		<div className="flex flex-cols items-center space-x-2">
			<Checkbox
				id="terms"
				checked={checked}
				onClick={() => {
					setChecked(!checked);
				}}
			/>
			<Label
				htmlFor="terms"
				className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
			>
				Accept terms and conditions
			</Label>
			<br />
			<p className="text-sm text-muted-foreground">
				You agree to our Terms of Service and Privacy Policy.
			</p>
			{checked ? (
				<Badge variant={"success"}>Success!</Badge>
			) : (
				<Badge variant={"destructive"}>Warning!</Badge>
			)}
		</div>
	);
}