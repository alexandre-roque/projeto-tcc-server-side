"use client";

import { Button } from "@/components/ui/button";
import { insertProducts } from "../actions";

export default function ClientButton() {
	return (
		<form action={insertProducts}>
			<Button />
		</form>
	);
}
