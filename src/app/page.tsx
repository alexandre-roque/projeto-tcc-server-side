import { db } from "@/db";
import Product from "./components/product";

export default async function Home() {
	const products = await db.query.products.findMany();

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
