export const revalidate = 0;
import { db } from '@/db';

export async function POST(request: Request) {
	const requestData = await request.json();

	const products = await db.query.products.findMany({
		limit: requestData.limit,
	});

	return Response.json({
		products,
	});
}

export async function GET(request: Request) {
	const { searchParams } = new URL(request.url);
	const limit = searchParams.get('limit');

	const products = await db.query.products.findMany({
		limit: parseInt(limit || '10'),
	});

	return Response.json({
		products,
	});
}
