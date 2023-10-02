import NextAuth, { NextAuthOptions } from "next-auth";
import GoogleProvider from "next-auth/providers/google";

const authOptions: NextAuthOptions = {
  // Configure one or more authentication providers
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_ID as string,
      clientSecret: process.env.GOOGLE_SECRET as string,
      authorization: {
        params: {
          prompt: "consent",
          access_type: "offline",
          response_type: "code",
        },
      },
    }),
  ],
  pages: {
    error: "/",
  },
  secret: process.env.NEXTAUTH_SECRET,
  callbacks: {
    async signIn({ user }) {
      const allowedEmails = ["iv.murat09@gmail.com"];
      if (allowedEmails.includes(user.email!)) {
        return Promise.resolve(true);
      }
      window.location.href = "/?loginFailed=true";
      return Promise.resolve(false);
    },
  },
};
const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
