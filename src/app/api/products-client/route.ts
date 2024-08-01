import { db } from '@/db';
import { products } from '@/db/schema/products';

export const revalidate = 0;

export async function POST(request: Request) {
	const { limit } = await request.json();

	let index = 20;
	const productsResult = await db
		.select({
			price: products.price,
			name: products.name,
			description: products.description,
			imageUrl: products.imageUrl,
			id: products.id,
		})
		.from(products)
		.limit(index);

	while (index < limit && index < 300) {
		const productsResult2 = await db
			.select({
				price: products.price,
				name: products.name,
				description: products.description,
				imageUrl: products.imageUrl,
				id: products.id,
			})
			.from(products)
			.offset(index)
			.limit(20);

		productsResult.push(...productsResult2);
		index += 20;
	}

	return Response.json({
		products: productsResult.slice(0, limit),
	});
}

export async function GET(request: Request) {
	const { searchParams } = new URL(request.url);
	const limit = parseInt(searchParams.get('limit') || '10');

	let index = 20;
	const productsResult = await db
		.select({
			price: products.price,
			name: products.name,
			description: products.description,
			imageUrl: products.imageUrl,
			id: products.id,
		})
		.from(products)
		.limit(index);

	while (index < limit && index < 300) {
		const productsResult2 = await db
			.select({
				price: products.price,
				name: products.name,
				description: products.description,
				imageUrl: products.imageUrl,
				id: products.id,
			})
			.from(products)
			.offset(index)
			.limit(20);

		productsResult.push(...productsResult2);
		index += 20;
	}

	return Response.json({
		products: productsResult.slice(0, limit),
	});
}
