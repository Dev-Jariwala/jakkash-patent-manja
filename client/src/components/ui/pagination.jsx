import * as React from "react"
import { ChevronLeft, ChevronRight, MoreHorizontal } from "lucide-react"

import { cn } from "../../lib/utils"
import { buttonVariants } from "./button"

const Pagination = ({
  className,
  ...props
}) => (
  <nav
    role="navigation"
    aria-label="pagination"
    className={cn("tw-mx-auto tw-flex tw-w-full tw-justify-center", className)}
    {...props} />
)

const PaginationContent = React.forwardRef(({ className, ...props }, ref) => (
  <ul
    ref={ref}
    className={cn("tw-flex tw-flex-row tw-items-center tw-gap-1", className)}
    {...props} />
))
PaginationContent.displayName = "PaginationContent"

const PaginationItem = React.forwardRef(({ className, ...props }, ref) => (
  <li ref={ref} className={cn("tw-", className)} {...props} />
))
PaginationItem.displayName = "PaginationItem"

const PaginationLink = ({
  children, // Add a children prop to receive the link content
  className,
  isActive,
  size = "icon",
  ...props
}) => (
  <PaginationItem>
    <a
      aria-current={isActive ? "page" : undefined}
      className={cn(buttonVariants({
        variant: isActive ? "outline" : "ghost",
        size,
      }), className)}
      {...props}>
      {children || 'Link'} {/* Use children for the content, or a default text like 'Link' */}
    </a>
  </PaginationItem>
)
PaginationLink.displayName = "PaginationLink"


const PaginationPrevious = ({
  className,
  ...props
}) => (
  <PaginationLink
    aria-label="Go to previous page"
    size="default"
    className={cn("tw-gap-1 tw-pl-2.5", className)}
    {...props}>
    <ChevronLeft className="tw-h-4 tw-w-4" />
    <span>Previous</span>
  </PaginationLink>
)
PaginationPrevious.displayName = "PaginationPrevious"

const PaginationNext = ({
  className,
  ...props
}) => (
  <PaginationLink
    aria-label="Go to next page"
    size="default"
    className={cn("tw-gap-1 tw-pr-2.5", className)}
    {...props}>
    <span>Next</span>
    <ChevronRight className="tw-h-4 tw-w-4" />
  </PaginationLink>
)

const PaginationEllipsis = ({
  className,
  ...props
}) => (
  <span
    aria-hidden
    className={cn("tw-flex tw-h-9 tw-w-9 tw-items-center tw-justify-center", className)}
    {...props}>
    <MoreHorizontal className="tw-h-4 tw-w-4" />
    <span className="tw-sr-only">More pages</span>
  </span>
)

export {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
}
