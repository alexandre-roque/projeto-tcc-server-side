import type { Config } from "drizzle-kit";

import * as dotenv from "dotenv";

dotenv.config({
	path: ".env",
});

export default {
	schema: "./src/db/schema/*",
	driver: "turso",
	dbCredentials: {
		url: process.env.DATABASE_URL!,
		authToken: process.env.DATABASE_AUTH_TOKEN,
	},
	out: "./drizzle",
} satisfies Config;
