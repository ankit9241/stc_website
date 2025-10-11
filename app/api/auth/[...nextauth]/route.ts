import NextAuth, { NextAuthOptions } from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials"

const authOptions: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        username: { label: "Username", type: "text" },
        password: { label: "Password", type: "password" }
      },
      async authorize(credentials) {
        const adminLogin = process.env.ADMIN_LOGIN
        const adminPassword = process.env.ADMIN_PASSWORD
        if (
          credentials?.username === adminLogin &&
          credentials?.password === adminPassword
        ) {
          return {
            id: "1",
            name: adminLogin,
          }
        }
        return null
      }
    })
  ],
  secret: process.env.NEXTAUTH_SECRET,
  pages: {
    signIn: '/login',
  },
  session: {
    strategy: "jwt",
    maxAge: 30 * 24 * 60 * 60, // 30 days
  },
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.name = user.name
      }
      return token
    },
    async session({ session, token }) {
      if (session.user) {
        session.user.name = token.name as string
      }
      return session
    }
  },
}

const handler = NextAuth(authOptions)

export { handler as GET, handler as POST }