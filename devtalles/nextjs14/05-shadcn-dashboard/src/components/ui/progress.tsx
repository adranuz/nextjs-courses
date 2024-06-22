"use client"

import * as React from "react"
import * as ProgressPrimitive from "@radix-ui/react-progress"

import { cn } from "@/lib/utils"

interface CustomProps 
  extends React.ComponentPropsWithoutRef<typeof ProgressPrimitive.Root>{
    indicatodColor?: string
  }

const Progress = React.forwardRef<
  React.ElementRef<typeof ProgressPrimitive.Root>,
  // React.ComponentPropsWithoutRef<typeof ProgressPrimitive.Root>,
  CustomProps
>(({ className, value, indicatodColor = "bg-primary", ...props }, ref) => (
  <ProgressPrimitive.Root
    ref={ref}
    className={cn(
      "relative h-4 w-full overflow-hidden rounded-full bg-secondary",
      className
    )}
    {...props}
  >
    <ProgressPrimitive.Indicator
      className={cn("h-full w-full flex-1 transition-all", indicatodColor)}
      style={{ transform: `translateX(-${100 - (value || 0)}%)` }}
    />
  </ProgressPrimitive.Root>
))
Progress.displayName = ProgressPrimitive.Root.displayName

export { Progress }
