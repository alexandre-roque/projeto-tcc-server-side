import { createId } from "@paralleldrive/cuid2";
import { sql } from "drizzle-orm";
import { integer, sqliteTable, text } from "drizzle-orm/sqlite-core";

export const products = sqliteTable("product", {
	id: text("id")
		.primaryKey()
		.$defaultFn(() => createId()),
	name: text("name").notNull(),
	description: text("description"),
	imageUrl: text("imageUrl"),
	price: integer("price", { mode: "number" }),
	createdAt: integer("createdAt", {
		mode: "timestamp",
	}).default(sql`(STRFTIME('%s', 'now') * 1000)`),
	updatedAt: integer("updatedAt", {
		mode: "timestamp",
	}).default(sql`(STRFTIME('%s', 'now') * 1000)`),
});

export type product = typeof products.$inferSelect;
