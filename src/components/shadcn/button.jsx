import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva } from "class-variance-authority";

import { cn } from "@/Utility/UtilityFunction"

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 border-zinc-200 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-zinc-950 focus-visible:ring-zinc-950/50 focus-visible:ring-[3px] aria-invalid:ring-red-500/20 aria-invalid:border-red-500",
  {
    variants: {
      variant: {
        default:
          "bg-zinc-900 text-zinc-50 shadow-xs hover:bg-zinc-900/90",
        destructive:
          "bg-red-500 text-white shadow-xs hover:bg-red-500/90 focus-visible:ring-red-500/20 ",
        outline:
          "border bg-white shadow-xs hover:bg-zinc-100 hover:text-zinc-900 ",
        secondary:
          "bg-zinc-100 text-zinc-900 shadow-xs hover:bg-zinc-100/80 ",
        ghost:
          "hover:bg-zinc-100 hover:text-zinc-900",
        link: "text-zinc-900 underline-offset-4 hover:underline ",
      },
      size: {
        default: "h-9 px-4 py-2 has-[>svg]:px-3",
        sm: "h-8 rounded-md gap-1.5 px-3 has-[>svg]:px-2.5",
        lg: "h-10 rounded-md px-6 has-[>svg]:px-4",
        icon: "size-9",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

function Button({
  className,
  variant,
  size,
  asChild = false,
  ...props
}) {
  const Comp = asChild ? Slot : "button"

  return (
    <Comp
      data-slot="button"
      className={cn(buttonVariants({ variant, size, className }))}
      {...props} />
  );
}

export { Button, buttonVariants }
