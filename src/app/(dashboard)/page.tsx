import { auth } from "@/lib/auth";
import { HomeView } from "@/modules/home/ui/views/homeviews";
import { headers } from "next/headers";
import { redirect } from "next/navigation";

const Page = async () => {
  const session = await auth.api.getSession({
    headers:await headers()
  })
  if (!session) {
    redirect("/signin")
  }
  return <HomeView/>
}
 
export default Page;