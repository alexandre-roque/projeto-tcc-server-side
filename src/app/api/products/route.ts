import { NextResponse } from "next/server";
import { db } from "@/db";

export async function GET() {
	const products = await db.query.products.findMany();
	return NextResponse.json({
		products,
	});
}
