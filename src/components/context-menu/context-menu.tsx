"use client";

import * as React from "react";
import * as ContextMenuPrimitive from "@radix-ui/react-context-menu";
import { cn } from "../../lib/utils.js";

const ContextMenu = React.forwardRef<
  React.ElementRef<typeof ContextMenuPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof ContextMenuPrimitive.Root>
>(({ children, ...props }) => (
  <ContextMenuPrimitive.Root {...props}>{children}</ContextMenuPrimitive.Root>
));
ContextMenu.displayName = ContextMenuPrimitive.Root.displayName;

const ContextMenuTrigger = ContextMenuPrimitive.Trigger;

const ContextMenuPortal = ContextMenuPrimitive.Portal;

const ContextMenuContent = React.forwardRef<
  React.ElementRef<typeof ContextMenuPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof ContextMenuPrimitive.Content>
>(({ children, className, ...props }, ref) => (
  <ContextMenuPrimitive.Content
    className={cn(
      "min-w-[220px] bg-foreground rounded-md overflow-hidden p-[5px] shadow-md",
      className
    )}
    ref={ref}
    {...props}
  >
    {children}
  </ContextMenuPrimitive.Content>
));
ContextMenuContent.displayName = ContextMenuPrimitive.Content.displayName;

const ContextMenuLabel = React.forwardRef<
  React.ElementRef<typeof ContextMenuPrimitive.Label>,
  React.ComponentPropsWithoutRef<typeof ContextMenuPrimitive.Label>
>(({ className, ...props }, ref) => (
  <ContextMenuPrimitive.Label
    className={cn(
      "pl-[25px] text-xs leading-[25px] text-muted-foreground",
      className
    )}
    ref={ref}
    {...props}
  />
));
ContextMenuLabel.displayName = ContextMenuPrimitive.Label.displayName;

const ContextMenuItem = React.forwardRef<
  React.ElementRef<typeof ContextMenuPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof ContextMenuPrimitive.Item>
>(({ className, ...props }, ref) => (
  <ContextMenuPrimitive.Item
    className={cn(
      "group text-[13px] leading-none text-foreground rounded-[3px] flex items-center h-[25px] px-[5px] relative pl-[25px] select-none outline-none data-[disabled]:text-muted-foreground data-[disabled]:pointer-events-none data-[highlighted]:bg-accent-foregound data-[highlighted]:text-accent-foreground",
      className
    )}
    ref={ref}
    {...props}
  />
));
ContextMenuItem.displayName = ContextMenuPrimitive.Item.displayName;

const ContextMenuGroup = ContextMenuPrimitive.Group;

const ContextMenuCheckboxItem = React.forwardRef<
  React.ElementRef<typeof ContextMenuPrimitive.CheckboxItem>,
  React.ComponentPropsWithoutRef<typeof ContextMenuPrimitive.CheckboxItem>
>(({ className, ...props }, ref) => (
  <ContextMenuPrimitive.CheckboxItem
    className={cn(
      "group text-[13px] leading-none text-foreground rounded-[3px] flex items-center h-[25px] px-[5px] relative pl-[25px] select-none outline-none data-[disabled]:text-muted-foreground data-[disabled]:pointer-events-none data-[highlighted]:bg-accent-foregound data-[highlighted]:text-accent-foreground",
      className
    )}
    ref={ref}
    {...props}
  />
));
ContextMenuCheckboxItem.displayName =
  ContextMenuPrimitive.CheckboxItem.displayName;

const ContextMenuItemIndicator = React.forwardRef<
  React.ElementRef<typeof ContextMenuPrimitive.ItemIndicator>,
  React.ComponentPropsWithoutRef<typeof ContextMenuPrimitive.ItemIndicator>
>(({ className, ...props }, ref) => (
  <ContextMenuPrimitive.ItemIndicator
    className={cn(
      "absolute left-0 w-[25px] inline-flex items-center justify-center",
      className
    )}
    ref={ref}
    {...props}
  />
));
ContextMenuItemIndicator.displayName =
  ContextMenuPrimitive.ItemIndicator.displayName;

const ContextMenuRadioGroup = ContextMenuPrimitive.RadioGroup;

const ContextMenuRadioItem = React.forwardRef<
  React.ElementRef<typeof ContextMenuPrimitive.RadioItem>,
  React.ComponentPropsWithoutRef<typeof ContextMenuPrimitive.RadioItem>
>(({ className, ...props }, ref) => (
  <ContextMenuPrimitive.RadioItem
    className={cn(
      "group text-[13px] leading-none text-foreground rounded-[3px] flex items-center h-[25px] px-[5px] relative pl-[25px] select-none outline-none data-[disabled]:text-muted-foreground data-[disabled]:pointer-events-none data-[highlighted]:bg-accent-foregound data-[highlighted]:text-accent-foreground",
      className
    )}
    ref={ref}
    {...props}
  />
));
ContextMenuRadioItem.displayName = ContextMenuPrimitive.RadioItem.displayName;

const ContextMenuSub = ContextMenuPrimitive.Sub;
const ContextMenuSubTrigger = React.forwardRef<
  React.ElementRef<typeof ContextMenuPrimitive.SubTrigger>,
  React.ComponentPropsWithoutRef<typeof ContextMenuPrimitive.SubTrigger>
>(({ className, ...props }, ref) => (
  <ContextMenuPrimitive.SubTrigger
    className={cn(
      "group text-[13px] leading-none text-foreground rounded-[3px] flex items-center h-[25px] px-[5px] relative pl-[25px] select-none outline-none data-[disabled]:text-muted-foreground data-[disabled]:pointer-events-none data-[highlighted]:bg-accent-foregound data-[highlighted]:text-accent-foreground",
      className
    )}
    ref={ref}
    {...props}
  />
));
ContextMenuSubTrigger.displayName = ContextMenuPrimitive.SubTrigger.displayName;

const ContextMenuSubContent = React.forwardRef<
  React.ElementRef<typeof ContextMenuPrimitive.SubContent>,
  React.ComponentPropsWithoutRef<typeof ContextMenuPrimitive.SubContent>
>(({ className, ...props }, ref) => (
  <ContextMenuPrimitive.SubContent
    className={cn(
      "min-w-[220px] bg-foreground rounded-md overflow-hidden p-[5px] shadow-md",
      className
    )}
    ref={ref}
    {...props}
  />
));
ContextMenuSubContent.displayName = ContextMenuPrimitive.SubContent.displayName;

const ContextMenuSeparator = React.forwardRef<
  React.ElementRef<typeof ContextMenuPrimitive.Separator>,
  React.ComponentPropsWithoutRef<typeof ContextMenuPrimitive.Separator>
>(({ className, ...props }, ref) => (
  <ContextMenuPrimitive.Separator
    className={cn("h-[1px] bg-foreground-muted m-[5px]", className)}
    ref={ref}
    {...props}
  />
));
ContextMenuSeparator.displayName = ContextMenuPrimitive.Separator.displayName;

export {
  ContextMenu,
  ContextMenuCheckboxItem,
  ContextMenuContent,
  ContextMenuGroup,
  ContextMenuItem,
  ContextMenuItemIndicator,
  ContextMenuLabel,
  ContextMenuPortal,
  ContextMenuPrimitive,
  ContextMenuRadioGroup,
  ContextMenuRadioItem,
  ContextMenuSeparator,
  ContextMenuSub,
  ContextMenuSubContent,
  ContextMenuSubTrigger,
  ContextMenuTrigger,
};
