"use client"

import * as ScrollArea from "@radix-ui/react-scroll-area"
import * as SelectPrimitive from "@radix-ui/react-select"
import { ChevronDown, ChevronUp } from "lucide-react"
import React, { useState } from "react"

const Select = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.Root> & {
    className?: string
  }
>(({ children, className, ...props }, ref) => {
  const [toggleChevron, setToggleChevron] = useState(false)

  const handleChevronView = () => {
    setToggleChevron((prev) => !prev)
  }

  return (
    <SelectPrimitive.Root {...props} onOpenChange={handleChevronView}>
      <SelectPrimitive.Trigger
        ref={ref}
        className="file:font-mediu flex h-12 w-full items-center justify-between rounded-md border border-input bg-background px-3 py-2 text-sm file:border-0 file:bg-transparent file:text-sm disabled:opacity-50"
      >
        <SelectPrimitive.Value />
        <SelectPrimitive.Icon>
          {toggleChevron ? <ChevronUp /> : <ChevronDown />}
        </SelectPrimitive.Icon>
      </SelectPrimitive.Trigger>

      <SelectPrimitive.Portal>
        <SelectPrimitive.Content position="popper">
          <ScrollArea.Root className="h-[225px] w-[200px] translate-x-[50%] overflow-hidden rounded-md bg-white p-2 shadow-[0px_10px_38px_-10px_rgba(22,_23,_24,_0.35),0px_10px_20px_-15px_rgba(22,_23,_24,_0.2)]">
            <SelectPrimitive.Viewport
              asChild
              className="h-full w-full rounded px-2 py-1"
            >
              <ScrollArea.Viewport className="h-[200px] w-full">
                {children}
              </ScrollArea.Viewport>
            </SelectPrimitive.Viewport>

            <ScrollArea.Scrollbar
              className="duration-&lsqb;160ms&rsqb; my-2 flex touch-none select-none bg-white p-0.5 transition-colors ease-out hover:bg-white data-[orientation=horizontal]:h-2.5 data-[orientation=vertical]:w-2.5 data-[orientation=horizontal]:flex-col"
              orientation="vertical"
            >
              <ScrollArea.Thumb className="relative flex-1 rounded-[10px] bg-slate-800 before:absolute before:left-1/2 before:top-1/2 before:h-full before:min-h-[44px] before:w-full before:min-w-[44px] before:-translate-x-1/2 before:-translate-y-1/2 before:content-['']" />
            </ScrollArea.Scrollbar>
          </ScrollArea.Root>
        </SelectPrimitive.Content>
      </SelectPrimitive.Portal>
    </SelectPrimitive.Root>
  )
})

Select.displayName = SelectPrimitive.Root.displayName

const SelectItem = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.Item>
>(({ children, ...props }, ref) => {
  return (
    <SelectPrimitive.Item
      {...props}
      ref={ref}
      className="data-[disabled]:text-mauve8 relative flex cursor-pointer select-none items-center rounded-[3px] px-4 py-2 leading-none text-black data-[disabled]:pointer-events-none data-[highlighted]:bg-slate-500 data-[highlighted]:text-white data-[highlighted]:outline-none"
    >
      <SelectPrimitive.ItemText>{children}</SelectPrimitive.ItemText>
    </SelectPrimitive.Item>
  )
})

SelectItem.displayName = SelectPrimitive.Item.displayName

export { Select, SelectItem }

