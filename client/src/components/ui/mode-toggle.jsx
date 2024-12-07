import { useTheme } from "next-themes";

import { Button } from "./button";
import {
    Tooltip,
    TooltipContent,
    TooltipTrigger,
    TooltipProvider
} from "./tooltip";
import { Moon, Sun } from "lucide-react";

export function ModeToggle() {
    const { setTheme, theme } = useTheme();

    return (
        <TooltipProvider disableHoverableContent>
            <Tooltip delayDuration={100}>
                <TooltipTrigger asChild>
                    <Button
                        className="rounded-full w-8 h-8 bg-background"
                        variant="outline"
                        size="icon"
                        onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                    >
                        <Sun className="tw-w-[1.2rem] tw-h-[1.2rem] tw-rotate-90 tw-scale-0 tw-transition-transform tw-ease-in-out tw-duration-500 dark:tw-rotate-0 dark:tw-scale-100" />
                        <Moon className="tw-absolute tw-w-[1.2rem] tw-h-[1.2rem] tw-rotate-0 tw-scale-1000 tw-transition-transform tw-ease-in-out tw-duration-500 dark:-tw-rotate-90 dark:tw-scale-0" />
                        <span className="tw-sr-only">Switch Theme</span>
                    </Button>
                </TooltipTrigger>
                <TooltipContent side="bottom">Switch Theme</TooltipContent>
            </Tooltip>
        </TooltipProvider>
    );
}