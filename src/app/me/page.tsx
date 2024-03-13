import { auth } from "@/auth";
import { users } from "@/db/schema/users";
import Link from "next/link";

export default async function Home() {
	const session = await auth();
	return (
		<main className="flex min-h-screen flex-col items-center justify-between p-24">
			{JSON.stringify(session)}
			<Link href={"/api/auth/signin"}>Logar</Link>
			<Link href={"/api/auth/signout"}>Deslogar</Link>
		</main>
	);
}
