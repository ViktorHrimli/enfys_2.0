import NextAuth from "next-auth";

var handler = NextAuth({});

export { handler as GET, handler as POST };
