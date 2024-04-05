"use server";

import { db } from "@/db";
import { products, product } from "@/db/schema/products";
import { eq } from "drizzle-orm";

export async function insertProducts() {
	await db
		.update(products)
		.set({
			name: "Pulseira Masculina de Couro",
			description:
				"Couro trançado e fecho encaixe. Possue detalhes artisticos essenciais do dia a dia, sendo de fácil combinação para qualquer ocasião.",
		})
		.where(eq(products.id, "123"));
}
