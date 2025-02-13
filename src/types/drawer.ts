
import * as React from "react"
import { Drawer as DrawerPrimitive } from "vaul"

interface BaseDrawerProps {
  children?: React.ReactNode
  className?: string
}

export interface DrawerProps extends BaseDrawerProps, React.ComponentProps<typeof DrawerPrimitive.Root> {
  shouldScaleBackground?: boolean
}

export interface DrawerTriggerProps extends BaseDrawerProps, 
  React.ComponentPropsWithoutRef<typeof DrawerPrimitive.Trigger> {}

export interface DrawerPortalProps extends BaseDrawerProps,
  React.ComponentPropsWithoutRef<typeof DrawerPrimitive.Portal> {}

export interface DrawerOverlayProps extends BaseDrawerProps,
  React.ComponentPropsWithoutRef<typeof DrawerPrimitive.Overlay> {}

export interface DrawerContentProps extends BaseDrawerProps,
  React.ComponentPropsWithoutRef<typeof DrawerPrimitive.Content> {}

export interface DrawerHeaderProps extends BaseDrawerProps,
  React.HTMLAttributes<HTMLDivElement> {}

export interface DrawerFooterProps extends BaseDrawerProps,
  React.HTMLAttributes<HTMLDivElement> {}

export interface DrawerTitleProps extends BaseDrawerProps,
  React.ComponentPropsWithoutRef<typeof DrawerPrimitive.Title> {}

export interface DrawerDescriptionProps extends BaseDrawerProps,
  React.ComponentPropsWithoutRef<typeof DrawerPrimitive.Description> {}
