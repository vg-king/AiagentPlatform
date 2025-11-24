import { Card } from "@/components/ui/card";
import { auth } from "@/lib/auth";
import { SignInViews } from "@/modules/auth/ui/views/sign-in-view";
import { headers } from "next/headers";
import { redirect } from "next/navigation";

export default async function Signin() {
  const session = await auth.api.getSession({
    headers: await headers()
  })
  if (!!session) {
    redirect("/")
  }
  return (

    <SignInViews />



  );
}