import * as productsSchema from "./schema/products";
import * as usersSchema from "./schema/users";
import { drizzle } from "drizzle-orm/libsql";
import { createClient } from "@libsql/client";

const client = createClient({
	url: process.env.DATABASE_URL!,
	authToken: process.env.DATABASE_AUTH_TOKEN,
});

export const db = drizzle(client, {
	schema: { ...productsSchema, ...usersSchema },
});
