import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva } from "class-variance-authority";

import { cn } from "../../lib/utils";
import { Loader } from "lucide-react";

const buttonVariants = cva(
  "tw-inline-flex tw-items-center tw-justify-center tw-rounded-md md:tw-text-sm tw-text-xs tw-font-medium tw-ring-offset-background tw-transition-colors focus-visible:tw-outline-none focus-visible:tw-ring-2 focus-visible:tw-ring-ring focus-visible:tw-ring-offset-2 disabled:tw-pointer-events-none disabled:tw-opacity-50",
  {
    variants: {
      variant: {
        default:
          "tw-bg-primary tw-text-primary-foreground hover:tw-bg-primary/90",
        destructive:
          "tw-bg-destructive tw-text-destructive-foreground hover:tw-bg-destructive/90",
        outline:
          "tw-border tw-border-input tw-bg-background hover:tw-bg-accent hover:tw-text-accent-foreground",
        secondary:
          "tw-bg-secondary tw-text-secondary-foreground hover:tw-bg-secondary/90",
        ghost: "hover:tw-bg-accent hover:tw-text-accent-foreground",
        link: "tw-text-blue-500 tw-underline-offset-4 hover:tw-underline",
        cancel: "tw-bg-gray-200 tw-text-gray-600 hover:tw-bg-gray-300",
        none: "tw-text-primary",
        gradient:
          "tw-bg-gradient-to-r tw-from-indigo-500 tw-to-purple-600 tw-text-white hover:tw-from-indigo-600 hover:tw-to-purple-700 hover:tw-shadow-xl",
        grey: "tw-bg-accent tw-text-accent-foreground tw-shadow-sm hover:tw-bg-accent",
        indigo:
          "tw-border tw-border-input tw-bg-background enabled:hover:tw-bg-accent enabled:hover:tw-text-accent-foreground tw-w-fit tw-text-nowrap tw-text-indigo-500 tw-gap-2 tw-border tw-bg-white tw-self-end md:tw-self-center hover:!tw-text-white tw-border-indigo-500 enabled:hover:tw-bg-indigo-500",
      },
      size: {
        default: "tw-px-4 tw-py-2",
        sm: " tw-rounded-md tw-px-3 tw-py-1.5",
        lg: "tw-rounded-md tw-px-5 tw-py-3",
        icon: "tw-h-8 tw-w-8",
        xs: "tw-text-xs tw-px-2 tw-py-2",
      },
      intent: {
        indigo: "tw-bg-indigo-500 hover:tw-bg-indigo-600 tw-text-white",
        green: "tw-bg-green-500 hover:tw-bg-green-600 tw-text-white",
        red: "tw-bg-red-500 hover:tw-bg-red-600 tw-text-white",
        yellow: "tw-bg-yellow-500 hover:tw-bg-yellow-600 tw-text-white",
        teal: "tw-bg-teal-500 hover:tw-bg-teal-600 tw-text-white",
        emerald: "tw-bg-emerald-500 hover:tw-bg-emerald-600 tw-text-white",
      },
      border: {
        default: " tw-border-input",
        none: "",
        indigo:
          "tw-border tw-border-indigo-500 hover:tw-border-indigo-600 tw-text-indigo-600 hover:tw-text-indigo-800 hover:tw-bg-indigo-100",
        green:
          "tw-border tw-border-green-500 hover:tw-border-green-600 tw-text-green-600 hover:tw-text-green-800 hover:tw-bg-green-100",
        red: "tw-border tw-border-red-500 hover:tw-border-red-600 tw-text-red-600 hover:tw-text-red-800 hover:tw-bg-red-100",
        yellow:
          "tw-border tw-border-yellow-500 hover:tw-border-yellow-600 tw-text-yellow-600 hover:tw-text-yellow-800 hover:tw-bg-yellow-100",
        teal: "tw-border tw-border-teal-500 hover:tw-border-teal-600 tw-text-teal-600 hover:tw-text-teal-800 hover:tw-bg-teal-100",
        emerald:
          "tw-border tw-border-emerald-500 hover:tw-border-emerald-600 tw-text-emerald-600 hover:tw-text-emerald-800 hover:tw-bg-emerald-100",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

const Button = React.forwardRef(
  (
    {
      className,
      intent,
      variant,
      border,
      size,
      disabled,
      asChild = false,
      isLoading = false,
      loadingText,
      loaderClassname,
      children,
      ...props
    },
    ref
  ) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(
          buttonVariants({ variant, size, intent, border, className })
        )}
        disabled={disabled || isLoading}
        ref={ref}
        {...props}
      >
        {isLoading ? (
          <span className="tw-pointer-events-none tw-flex tw-shrink-0 tw-items-center tw-justify-center tw-gap-1.5">
            <Loader
              className={cn(
                "tw-size-4 tw-shrink-0 tw-animate-spin",
                loaderClassname
              )}
              aria-hidden="true"
            />
            <span className="tw-sr-only">
              {loadingText ? loadingText : "Loading..."}
            </span>
            {loadingText ? loadingText : children}
          </span>
        ) : (
          children
        )}
      </Comp>
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
