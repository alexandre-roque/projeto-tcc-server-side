import { db } from "@/db";
import Product from "./components/product";

export default async function Home({
	searchParams,
}: {
	searchParams?: { [key: string]: string | undefined };
}) {
	const { limit } = searchParams ?? { limit: 20 };
	const params = limit
		? typeof limit === "string"
			? parseInt(limit)
			: limit
		: 20;
	const products = await db.query.products.findMany({
		limit: params,
	});

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
