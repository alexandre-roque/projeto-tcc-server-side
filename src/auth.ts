import NextAuth, { NextAuthConfig } from "next-auth";
import GitHub from "next-auth/providers/GitHub";
import DiscordProvider from "next-auth/providers/discord";
import { DrizzleAdapter } from "@auth/drizzle-adapter";
import { db } from "@/db";

export const authConfig = {
	providers: [
		GitHub,
		DiscordProvider({
			clientId: process.env.DISCORD_CLIENT_ID!,
			clientSecret: process.env.DISCORD_CLIENT_SECRET!,
		}),
	],
	adapter: DrizzleAdapter(db),
	callbacks: {
		async session({ session, user }) {
			session.user.id = user.id;
			return session;
		},
	},
} satisfies NextAuthConfig;

export const { handlers, auth, signOut } = NextAuth(authConfig);
