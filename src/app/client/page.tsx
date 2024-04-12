"use client";

import Product from "../components/product";
import { useEffect, useState } from "react";
import { product } from "@/db/schema/products";
import { useSearchParams } from "next/navigation";

export default function ClientPage() {
	const searchParams = useSearchParams();

	const search = searchParams.get("limit") ?? 20;
	const [products, setProducts] = useState<product[]>([]);

	useEffect(() => {
		fetch("/api/products", {
			method: "POST",
			headers: {
				Accept: "application/json",
			},
			body: JSON.stringify({
				limit: search,
			}),
		})
			.then((res) => res.json())
			.then((data) => {
				setProducts(data.products);
			});
	}, [search]);

	return (
		<main className="flex min-h-screen flex-col items-center justify-between p-12 lg:p-24">
			<div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
				{products.map((product) => (
					<Product product={product} key={product.id} />
				))}
			</div>
		</main>
	);
}
