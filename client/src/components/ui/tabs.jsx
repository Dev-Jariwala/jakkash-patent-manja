import * as React from "react";
import * as TabsPrimitive from "@radix-ui/react-tabs";

import { cn } from "../../lib/utils";
import { cva } from "class-variance-authority";

const TabsTriggerVariants = cva(
  "tw-inline-flex tw-items-center tw-justify-center tw-whitespace-nowrap tw-px-3 tw-py-1.5 tw-text-sm tw-font-semibold tw-transition-all data-[state=active]:tw-rounded-sm tw-ring-offset-background focus-visible:tw-outline-none focus-visible:tw-ring-1 focus-visible:tw-ring-ring focus-visible:tw-ring-offset-1 disabled:tw-pointer-events-none disabled:tw-opacity-50 ",
  {
    variants: {
      variant: {
        default:
          "data-[state=active]:tw-bg-background data-[state=active]:tw-text-foreground data-[state=active]:tw-shadow-sm",
        team: "tw-border-b hover:tw-bg-accent hover:tw-rounded tw-py-2",
        sliding:
          "tw-text-base tw-px-4 tw-py-2 tw-text-gray-700 tw-mx-1 tw-rounded-sm tw-relative data-[state=active]:tw-text-indigo-500 data-[state=active]:tw-shadow-indigo-500 data-[state=active]:focus:tw-relative hover:tw-bg-accent",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

const Tabs = TabsPrimitive.Root;

const TabsList = React.forwardRef(({ className, ...props }, ref) => (
  <TabsPrimitive.List
    ref={ref}
    className={cn(
      "tw-inline-flex tw-gap-1 tw-items-center tw-bg-card tw-py-1 tw-px-2 tw-text-muted-foreground",
      className
    )}
    {...props}
  />
));
TabsList.displayName = TabsPrimitive.List.displayName;

const TabsTrigger = React.forwardRef(
  ({ className, variant, ...props }, ref) => (
    <TabsPrimitive.Trigger
      ref={ref}
      className={cn(TabsTriggerVariants({ variant }), className)}
      {...props}
    />
  )
);
TabsTrigger.displayName = TabsPrimitive.Trigger.displayName;

const TabsContent = React.forwardRef(({ className, ...props }, ref) => (
  <TabsPrimitive.Content
    ref={ref}
    className={cn(
      "tw-mt-2 tw-ring-offset-background focus-visible:tw-outline-none focus-visible:tw-ring-2 focus-visible:tw-ring-ring focus-visible:tw-ring-offset-2",
      className
    )}
    {...props}
  />
));
TabsContent.displayName = TabsPrimitive.Content.displayName;

export { Tabs, TabsList, TabsTrigger, TabsContent };
