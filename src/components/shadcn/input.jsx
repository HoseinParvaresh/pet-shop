import * as React from "react"

import { cn } from "@/Utility/UtilityFunction"

function Input({
  className,
  type,
  ...props
}) {
  return (
    <input
      type={type}
      data-slot="input"
      className={cn(
        "file:text-zinc-950 placeholder:text-zinc-500 selection:bg-zinc-900 selection:text-zinc-50 border-zinc-200 flex h-9 w-full min-w-0 rounded-md border bg-transparent px-3 py-1 text-base shadow-xs transition-[color,box-shadow] outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
        "focus-visible:border-zinc-950 focus-visible:ring-zinc-950/50 focus-visible:ring-[1px]",
        "aria-invalid:ring-red-500/2 aria-invalid:border-red-500 ",
        className
      )}
      {...props} />
  );
}

export { Input }
