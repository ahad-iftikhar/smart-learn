import { NextResponse } from "next/server";
import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";

const isHomeRoute = createRouteMatcher(["/"]);
const isChatRoute = createRouteMatcher(["/chat"]);

export default clerkMiddleware((auth, req) => {
  const { userId } = auth();

  if (userId && isHomeRoute(req)) {
    return NextResponse.rewrite(new URL("/", req.url));
  }

  if (!userId && isChatRoute(req)) {
    return NextResponse.redirect(new URL("/sign-in", req.url));
  }

  return NextResponse.next();
});

export const config = {
  matcher: ["/((?!.*\\..*|_next).*)", "/", "/(api|trpc)(.*)"],
};
