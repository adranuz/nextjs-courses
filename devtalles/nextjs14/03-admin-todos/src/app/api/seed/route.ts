import prisma from "@/lib/prisma";
import { NextResponse, NextRequest } from "next/server";
import bcrypt from "bcryptjs";

export async function GET(request: Request) {
	await prisma.todo.deleteMany();
	await prisma.user.deleteMany();

	const user = await prisma.user.create({
		data: {
			email: "test1@gmail.com",
			name: "test1",
			password: bcrypt.hashSync("test1"),
			roles: ["admin", "user", "super-user"],
			todos: {
				create: [
					{
						description: "Learn Prisma for database",
						completed: true,
					},
					{ description: "Learn Next.js for frontend", completed: true },
					{ description: "Learn Vercel for deployment", completed: true },
					{ description: "Learn TypeScript for type safety", completed: true },
				],
			},
		},
	});

	return NextResponse.json({
		message: "Hello from seed route",
	});
}
