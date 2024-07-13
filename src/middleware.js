import { NextResponse } from "next/server";

export function middleware(request) {
  const url = request.nextUrl.clone();

  // Exclude URLs with /_next parameters from the check
  if (url.pathname.startsWith("/_")) {
    return NextResponse.next();
  }

  // Check if the URL contains uppercase letters
  if (url.pathname !== url.pathname.toLowerCase()) {
    // If the URL contains uppercase letters, redirect to the lowercase URL
    url.pathname = url.pathname.toLowerCase();
    return NextResponse.redirect(new URL(url.toString()), 301);
  }

  // Redirection for sitemap.xml
  if (url.pathname === "/sitemap.xml") {
    url.pathname = "/api/sitemap";
    return NextResponse.rewrite(new URL(url.toString()));
  }

  // Check if there are query parameters
  if (url.searchParams.toString() !== "") {
    // Remove query parameters
    url.search = "";
    return NextResponse.redirect(new URL(url.toString()), 301);
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/:path*", "/sitemap.xml"],
};
