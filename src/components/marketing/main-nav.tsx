import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { getCurrentUser } from "@/lib/utils/payload/get-current-user";
import { BookImage, GanttChartSquare, User } from "lucide-react";
import { cookies } from "next/headers";
import Link from "next/link";
import Logout from "../auth/logout";
import { Button } from "../ui/button";
import Cart from "./cart";
export default async function mainNav() {
  const { user } = await getCurrentUser(cookies());

  return (
    <div className="hidden md:flex gap-7">
      {user && (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" size="icon">
              <User className="h-5 w-5" />
              <span> Account </span>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuItem asChild>
              <Link href="/dashboard">Dashboard</Link>
            </DropdownMenuItem>
            <DropdownMenuItem asChild>
              <Logout />
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      )}
      {!user && (
        <Link href="/sign-in" className="flex gap-2">
          <User className="h-6 w-6 " />
          <p>Sign in</p>
        </Link>
      )}
      <Link href="/projects" className="flex gap-2">
        <GanttChartSquare className="h-6 w-6" />
        <p>Projects</p>
      </Link>
      {/* <Link href="/pictures" className="flex gap-2">
        <BookImage className="h-6 w-6" />
        <p>Pictures</p>
      </Link> */}
      <Cart />
    </div>
  );
}
