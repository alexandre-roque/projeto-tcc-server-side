import { NextResponse } from "next/server";
import { db } from "@/db";

export async function POST(request: Request) {
	const requestData = await request.json();

	const products = await db.query.products.findMany({
		limit: requestData.limit,
	});
	return NextResponse.json({
		products,
	});
}
