import NextAuth from "next-auth"
import {PrismaAdapter} from "@auth/prisma-adapter";
import prisma from "@/prisma/prisma";
import Resend from "@auth/core/providers/resend";


export const { handlers, signIn, signOut, auth } = NextAuth({
    providers: [
        Resend({
            from: "no-reply@nlshop.com.cn",
        })
    ],
    adapter: PrismaAdapter(prisma),
    session: {
        strategy: "jwt"
    }
})