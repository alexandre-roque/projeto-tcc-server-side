export const revalidate = 0;
import { db } from '@/db';
import { products } from '@/db/schema/products';

export async function POST(request: Request) {
	const requestData = await request.json();

	const productsResult = await db
		.select()
		.from(products)
		.limit(requestData.limit || 10);

	return Response.json({
		products: productsResult,
	});
}

export async function GET(request: Request) {
	const { searchParams } = new URL(request.url);
	const limit = searchParams.get('limit');

	const productsResult = await db
		.select()
		.from(products)
		.limit(parseInt(limit || '10'));

	return Response.json({
		products: productsResult,
	});
}
