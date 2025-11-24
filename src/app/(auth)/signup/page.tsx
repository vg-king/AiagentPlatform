import { auth } from "@/lib/auth";
import { SignUpViews } from "@/modules/auth/ui/views/sign-up-view";
import { headers } from "next/headers";
import { redirect } from "next/navigation";

export default async function SignUp() {
   const session = await auth.api.getSession({
    headers: await headers()
  })
  if (!!session) {
    redirect("/")
  }
  return (
    <SignUpViews/>
  );
}