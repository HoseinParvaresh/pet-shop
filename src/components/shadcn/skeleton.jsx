import { cn } from "@/Utility/UtilityFunction"

function Skeleton({
  className,
  ...props
}) {
  return (
    <div
      data-slot="skeleton"
      className={cn("bg-zinc-100 animate-pulse rounded-md", className)}
      {...props} />
  );
}

export { Skeleton }
