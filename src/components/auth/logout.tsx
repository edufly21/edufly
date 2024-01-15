"use client";
import { logOut } from "@/lib/utils/payload/logout";
import { cn } from "@/lib/utils/shadcn-ui";
import { toast } from "sonner";
import { Button } from "../ui/button";

import { useRouter } from "next/navigation";

interface Props {
  fallback?: string;
  label?: string;
  className?: string;
}

export default function Logout({
  fallback = "/",
  label = "Logout",
  className,
}: Props) {
  const router = useRouter();
  const handleLogout = async () => {
    try {
      await logOut();
      router.push(fallback);
    } catch (error: unknown) {
      toast.error("Failed to logout");
    }
  };
  return (
    <Button variant="ghost" className={cn(className)} onClick={handleLogout}>
      {label}
    </Button>
  );
}
