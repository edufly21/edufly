import type { Icon } from "@/components/icons/";
import { cn } from "@/lib/utils";
import Link from "next/link";

interface LogoWithNameProps {
  Logo?: Icon;
  name?: string;
  href?: string;
  showName?: boolean;
  showLogo?: boolean;
  classes?: {
    root: string;
    logo?: string;
    name?: string;
  };
}

export default function LogoWithName({
  Logo,
  name,
  href = "/",
  showName = true,
  showLogo = true,
  classes,
}: LogoWithNameProps) {
  return (
    <Link
      href={href ?? "/"}
      className={cn("w-fit flex items-center gap-2 ", classes?.root)}
    >
      {showLogo && (
        <div className={cn("flex items-center", classes?.logo)}>
          {Logo && <Logo />}
        </div>
      )}
      {showName && (
        <strong
          className={cn(
            "font-sansita text-primary text-2xl md:text-3xl lg:text-4xl",
            classes?.name
          )}
        >
          {name}
        </strong>
      )}
    </Link>
  );
}
