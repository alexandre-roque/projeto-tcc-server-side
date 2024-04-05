"use client";

import Product from "../components/product";
import { useEffect, useState } from "react";
import { product } from "@/db/schema/products";

export default function ClientPage() {
	const [products, setProducts] = useState<product[]>([]);

	useEffect(() => {
		fetch("/api/products", {
			headers: {
				Accept: "application/json",
				method: "GET",
			},
		})
			.then((res) => res.json())
			.then((data) => {
				setProducts(data.products);
			});
	}, []);

	return (
		<main className="flex min-h-screen flex-col items-center justify-between p-24">
			<div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
				{products.map((product) => (
					<Product product={product} key={product.id} />
				))}
			</div>
		</main>
	);
}
