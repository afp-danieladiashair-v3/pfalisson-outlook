
import * as React from "react"
import { DialogPortal } from "@radix-ui/react-dialog"

export interface DrawerProps {
  children?: React.ReactNode
  open?: boolean
  onOpenChange?: (open: boolean) => void
  direction?: "left" | "right" | "top" | "bottom"
}

export interface DrawerContentProps {
  children?: React.ReactNode
  className?: string
  overlay?: boolean
}
