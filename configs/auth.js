import GoogleProvider from "next-auth/providers/google";

var config = {
  providers: [
    GoogleProvider({
      clientId: "",
      clientSecret: "",
    }),
  ],
};

export { config };
