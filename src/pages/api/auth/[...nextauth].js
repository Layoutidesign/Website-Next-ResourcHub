import axios from "axios";
import NextAuth from "next-auth"
import GoogleProvider from "next-auth/providers/google"
export const authOptions = {
  // Configure one or more authentication providers
  providers: [
    GoogleProvider({
      clientId: "210096065172-ahbtucs1qj4cg8prqph09h8marjo9sdt.apps.googleusercontent.com",
      clientSecret: "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",
    }),
    // ...add more providers here
  ],
  callbacks: {
    async jwt({ token, user }) {
      return { ...token, ...user};
    },
    async session({ session, token, user }) {
      session.user = token ;
      let data = await axios.post('https://www.resourchub-laravel.layouti.com/api/frontend/login', session.user)
      return {user:data?.data.data};
    },
  },
  secret: "d9c37d564c4b9d51dbeb0b272405a0e5",
}
export default NextAuth(authOptions)