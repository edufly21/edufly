import {
  Alert,
  AlertDescription,
  AlertTitle,
  alertVariants,
} from "@/components/ui/alert";
import { cn } from "@/lib/utils/shadcn-ui";

export default function AlertBlock({
  type,
  title,
  message,
}: {
  type: "default" | "info" | "success" | "warning" | "danger";
  message: string;
  title?: string | null;
  id?: string | null;
  blockName?: string | null;
  blockType: "alert";
}) {
  return (
    <Alert className={cn(alertVariants({ variant: type || "default:" }))}>
      {title && <AlertTitle>{title}</AlertTitle>}
      <AlertDescription>{message}</AlertDescription>
    </Alert>
  );
}
