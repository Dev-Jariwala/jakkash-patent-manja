
import React from "react"
import * as TooltipPrimitives from "@radix-ui/react-tooltip"

import { cn } from "../../lib/utils"

const Tooltip = React.forwardRef(({
    children,
    className,
    content,
    delayDuration,
    defaultOpen = false,
    open,
    onClick,
    onOpenChange,
    showArrow = true,
    side,
    sideOffset = 4,
    triggerAsChild = false,
    ...props
}, forwardedRef) => {
    return (
        <TooltipPrimitives.Provider delayDuration={300}>
            <TooltipPrimitives.Root
                open={open}
                defaultOpen={defaultOpen}
                onOpenChange={onOpenChange}
                delayDuration={delayDuration}
            >
                <TooltipPrimitives.Trigger onClick={onClick} asChild={triggerAsChild}>
                    {children}
                </TooltipPrimitives.Trigger>
                <TooltipPrimitives.Portal>
                    <TooltipPrimitives.Content
                        ref={forwardedRef}
                        side={side}
                        sideOffset={sideOffset}
                        align="center"
                        className={cn(
                            // base
                            "tw-max-w-60 tw-z-[111] tw-select-none tw-rounded-md tw-px-2.5 tw-py-1.5 tw-text-sm tw-leading-5 tw-shadow-md",
                            // text color
                            "tw-text-gray-50 dark:tw-text-gray-900",
                            // background color
                            "tw-bg-gray-900 dark:tw-bg-gray-50",
                            // transition
                            "tw-will-change-[transform,opacity]",
                            "data-[side=bottom]:tw-animate-slideDownAndFade data-[side=left]:tw-animate-slideLeftAndFade data-[side=right]:tw-animate-slideRightAndFade data-[side=top]:tw-animate-slideUpAndFade data-[state=closed]:tw-animate-hide",
                            className,
                        )}
                        {...props}
                    >
                        {content}
                        {showArrow ? (
                            <TooltipPrimitives.Arrow
                                className="tw-border-none tw-fill-gray-900 dark:tw-fill-gray-50"
                                width={12}
                                height={7}
                                aria-hidden="true"
                            />
                        ) : null}
                    </TooltipPrimitives.Content>
                </TooltipPrimitives.Portal>
            </TooltipPrimitives.Root>
        </TooltipPrimitives.Provider>
    )
},
)

Tooltip.displayName = "Tooltip"

export { Tooltip }