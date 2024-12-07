import * as React from "react"
import { cva } from "class-variance-authority";
import { cn } from "../../lib/utils"

const chipVariants = cva(
    "tw-inline-flex tw-items-center tw-whitespace-nowrap tw-border tw-font-semibold tw-transition-colors focus:tw-outline-none focus:tw-ring-1 focus:tw-ring-ring focus:tw-ring-offset-1",
    {
        variants: {
            variant: {
                default:
                    "tw-border-transparent tw-text-primary-foreground",
                light:
                    "tw-border-transparent",
                glossy: "tw-border-none tw-bg-gradient-to-r tw-text-primary-foreground",
                outline: "tw-bg-transparent",
                none: ''
            },
            color: {
                white: [],
                black: [],
                slate: [],
                gray: [],
                zinc: [],
                neutral: [],
                stone: [],
                red: [],
                orange: [],
                amber: [],
                yellow: [],
                lime: [],
                green: [],
                emerald: [],
                teal: [],
                cyan: [],
                sky: [],
                blue: [],
                indigo: [],
                violet: [],
                purple: [],
                fuchsia: [],
                pink: [],
                rose: []
            },
            size: {
                xs: ['tw-text-xs tw-px-1 tw-py-0.5'],
                sm: ['tw-text-sm tw-px-1.5 tw-py-0.5'],
                md: ['tw-text-sm tw-px-2 tw-py-1.5'],
                lg: ['tw-text-base tw-px-2.5 tw-py-2'],
                xl: ['tw-text-base tw-px-3 tw-py-2'],
            },
            radius: {
                rounded: "tw-rounded",
                pill: "tw-rounded-full",
                square: "tw-rounded-none",
                md: "tw-rounded-md",
                sm: "tw-rounded-sm",
                lg: "tw-rounded-lg",
                xl: "tw-rounded-xl",
            },
            border: {
                default: "tw-border",
                none: "tw-border-none",
            },
        },
        compoundVariants: [
            {
                variant: "default",
                color: "white",
                className: "tw-text-black tw-bg-white",
            },
            {
                variant: "default",
                color: "black",
                className: "tw-text-white tw-bg-black",
            },
            {
                variant: "default",
                color: "slate",
                className: "tw-text-white tw-bg-slate-500",
            },
            {
                variant: "default",
                color: "gray",
                className: "tw-text-white tw-bg-gray-500",
            },
            {
                variant: "default",
                color: "zinc",
                className: "tw-text-white tw-bg-zinc-500",
            },
            {
                variant: "default",
                color: "neutral",
                className: "tw-text-white tw-bg-neutral-500",
            },
            {
                variant: "default",
                color: "stone",
                className: "tw-text-white tw-bg-stone-500",
            },
            {
                variant: "default",
                color: "red",
                className: "tw-text-white tw-bg-red-500",
            },
            {
                variant: "default",
                color: "orange",
                className: "tw-text-white tw-bg-orange-500",
            },
            {
                variant: "default",
                color: "amber",
                className: "tw-text-white tw-bg-amber-500",
            },
            {
                variant: "default",
                color: "yellow",
                className: "tw-text-white tw-bg-yellow-500",
            },
            {
                variant: "default",
                color: "lime",
                className: "tw-text-white tw-bg-lime-500",
            },
            {
                variant: "default",
                color: "green",
                className: "tw-text-white tw-bg-green-500",
            },
            {
                variant: "default",
                color: "emerald",
                className: "tw-text-white tw-bg-emerald-500",
            },
            {
                variant: "default",
                color: "teal",
                className: "tw-text-white tw-bg-teal-500",
            },
            {
                variant: "default",
                color: "cyan",
                className: "tw-text-white tw-bg-cyan-500",
            },
            {
                variant: "default",
                color: "sky",
                className: "tw-text-white tw-bg-sky-500",
            },
            {
                variant: "default",
                color: "blue",
                className: "tw-text-white tw-bg-blue-500",
            },
            {
                variant: "default",
                color: "indigo",
                className: "tw-text-white tw-bg-indigo-500",
            },
            {
                variant: "default",
                color: "violet",
                className: "tw-text-white tw-bg-violet-500",
            },
            {
                variant: "default",
                color: "purple",
                className: "tw-text-white tw-bg-purple-500",
            },
            {
                variant: "default",
                color: "fuchsia",
                className: "tw-text-white tw-bg-fuchsia-500",
            },
            {
                variant: "default",
                color: "pink",
                className: "tw-text-white tw-bg-pink-500",
            },
            {
                variant: "default",
                color: "rose",
                className: "tw-text-white tw-bg-rose-500",
            },
            {
                variant: "light",
                color: "white",
                className: "tw-text-black/80 tw-border-black/20 tw-bg-white/80",
            },
            {
                variant: "light",
                color: "black",
                className: "tw-text-white/80 tw-border-white/20 tw-bg-black/80",
            },
            {
                variant: "light",
                color: "slate",
                className: "tw-text-slate-700 tw-border-slate-500 tw-bg-slate-400/25 hover:tw-bg-slate-400/35",
            },
            {
                variant: "light",
                color: "gray",
                className: "tw-text-gray-700 tw-border-gray-500 tw-bg-gray-400/25 hover:tw-bg-gray-400/35",
            },
            {
                variant: "light",
                color: "zinc",
                className: "tw-text-zinc-700 tw-border-zinc-500 tw-bg-zinc-400/25 hover:tw-bg-zinc-400/35",
            },
            {
                variant: "light",
                color: "neutral",
                className: "tw-text-neutral-700 tw-border-neutral-500 tw-bg-neutral-400/25 hover:tw-bg-neutral-400/35",
            },
            {
                variant: "light",
                color: "stone",
                className: "tw-text-stone-700 tw-border-stone-500 tw-bg-stone-400/25 hover:tw-bg-stone-400/35",
            },
            {
                variant: "light",
                color: "red",
                className: "tw-text-red-700 tw-border-red-500 tw-bg-red-400/25 hover:tw-bg-red-400/35",
            },
            {
                variant: "light",
                color: "orange",
                className: "tw-text-orange-700 tw-border-orange-500 tw-bg-orange-400/25 hover:tw-bg-orange-400/35",
            },
            {
                variant: "light",
                color: "amber",
                className: "tw-text-amber-700 tw-border-amber-500 tw-bg-amber-400/25 hover:tw-bg-amber-400/35",
            },
            {
                variant: "light",
                color: "yellow",
                className: "tw-text-yellow-700 tw-border-yellow-500 tw-bg-yellow-400/25 hover:tw-bg-yellow-400/35",
            },
            {
                variant: "light",
                color: "lime",
                className: "tw-text-lime-700 tw-border-lime-500 tw-bg-lime-400/25 hover:tw-bg-lime-400/35",
            },
            {
                variant: "light",
                color: "green",
                className: "tw-text-green-700 tw-border-green-500 tw-bg-green-400/25 hover:tw-bg-green-400/35",
            },
            {
                variant: "light",
                color: "emerald",
                className: "tw-text-emerald-700 tw-border-emerald-500 tw-bg-emerald-400/25 hover:tw-bg-emerald-400/35",
            },
            {
                variant: "light",
                color: "teal",
                className: "tw-text-teal-700 tw-border-teal-500 tw-bg-teal-400/25 hover:tw-bg-teal-400/35",
            },
            {
                variant: "light",
                color: "cyan",
                className: "tw-text-cyan-700 tw-border-cyan-500 tw-bg-cyan-400/25 hover:tw-bg-cyan-400/35",
            },
            {
                variant: "light",
                color: "sky",
                className: "tw-text-sky-700 tw-border-sky-500 tw-bg-sky-400/25 hover:tw-bg-sky-400/35",
            },
            {
                variant: "light",
                color: "blue",
                className: "tw-text-blue-700 tw-border-blue-500 tw-bg-blue-400/25 hover:tw-bg-blue-400/35",
            },
            {
                variant: "light",
                color: "indigo",
                className: "tw-text-indigo-700 tw-border-indigo-500 tw-bg-indigo-400/25 hover:tw-bg-indigo-400/35",
            },
            {
                variant: "light",
                color: "violet",
                className: "tw-text-violet-700 tw-border-violet-500 tw-bg-violet-400/25 hover:tw-bg-violet-400/35",
            },
            {
                variant: "light",
                color: "purple",
                className: "tw-text-purple-700 tw-border-purple-500 tw-bg-purple-400/25 hover:tw-bg-purple-400/35",
            },
            {
                variant: "light",
                color: "fuchsia",
                className: "tw-text-fuchsia-700 tw-border-fuchsia-500 tw-bg-fuchsia-400/25 hover:tw-bg-fuchsia-400/35",
            },
            {
                variant: "light",
                color: "pink",
                className: "tw-text-pink-700 tw-border-pink-500 tw-bg-pink-400/25 hover:tw-bg-pink-400/35",
            },
            {
                variant: "light",
                color: "rose",
                className: "tw-text-rose-700 tw-border-rose-500 tw-bg-rose-400/25 hover:tw-bg-rose-400/35",
            },
            {
                variant: "glossy",
                color: "white",
                className: "tw-text-black tw-from-white/80 tw-to-white/60",
            },
            {
                variant: "glossy",
                color: "black",
                className: "tw-text-white tw-from-black/70 tw-to-black/50",
            },
            {
                variant: "glossy",
                color: "slate",
                className: "tw-text-slate-700 tw-from-slate-200 tw-to-slate-400",
            },
            {
                variant: "glossy",
                color: "gray",
                className: "tw-text-gray-700 tw-from-gray-200 tw-to-gray-400",
            },
            {
                variant: "glossy",
                color: "zinc",
                className: "tw-text-zinc-700 tw-from-zinc-200 tw-to-zinc-400",
            },
            {
                variant: "glossy",
                color: "neutral",
                className: "tw-text-neutral-700 tw-from-neutral-200 tw-to-neutral-400",
            },
            {
                variant: "glossy",
                color: "stone",
                className: "tw-text-stone-700 tw-from-stone-200 tw-to-stone-400",
            },
            {
                variant: "glossy",
                color: "red",
                className: "tw-text-red-700 tw-from-red-200 tw-to-red-400",
            },
            {
                variant: "glossy",
                color: "orange",
                className: "tw-text-orange-700 tw-from-orange-200 tw-to-orange-400",
            },
            {
                variant: "glossy",
                color: "amber",
                className: "tw-text-amber-700 tw-from-amber-200 tw-to-amber-400",
            },
            {
                variant: "glossy",
                color: "yellow",
                className: "tw-text-yellow-700 tw-from-yellow-200 tw-to-yellow-400",
            },
            {
                variant: "glossy",
                color: "lime",
                className: "tw-text-lime-700 tw-from-lime-200 tw-to-lime-400",
            },
            {
                variant: "glossy",
                color: "green",
                className: "tw-text-green-700 tw-from-green-200 tw-to-green-400",
            },
            {
                variant: "glossy",
                color: "emerald",
                className: "tw-text-emerald-700 tw-from-emerald-200 tw-to-emerald-400",
            },
            {
                variant: "glossy",
                color: "teal",
                className: "tw-text-teal-700 tw-from-teal-200 tw-to-teal-400",
            },
            {
                variant: "glossy",
                color: "cyan",
                className: "tw-text-cyan-700 tw-from-cyan-200 tw-to-cyan-400",
            },
            {
                variant: "glossy",
                color: "sky",
                className: "tw-text-sky-700 tw-from-sky-200 tw-to-sky-400",
            },
            {
                variant: "glossy",
                color: "blue",
                className: "tw-text-blue-700 tw-from-blue-200 tw-to-blue-400",
            },
            {
                variant: "glossy",
                color: "indigo",
                className: "tw-text-indigo-700 tw-from-indigo-200 tw-to-indigo-400",
            },
            {
                variant: "glossy",
                color: "violet",
                className: "tw-text-violet-700 tw-from-violet-200 tw-to-violet-400",
            },
            {
                variant: "glossy",
                color: "purple",
                className: "tw-text-purple-700 tw-from-purple-200 tw-to-purple-400",
            },
            {
                variant: "glossy",
                color: "fuchsia",
                className: "tw-text-fuchsia-700 tw-from-fuchsia-200 tw-to-fuchsia-400",
            },
            {
                variant: "glossy",
                color: "pink",
                className: "tw-text-pink-700 tw-from-pink-200 tw-to-pink-400",
            },
            {
                variant: "glossy",
                color: "rose",
                className: "tw-text-rose-700 tw-from-rose-200 tw-to-rose-400",
            },
            {
                variant: "outline",
                color: "slate",
                className: "tw-text-slate-700 tw-border-slate-500 tw-bg-transparent",
            },
            {
                variant: "outline",
                color: "gray",
                className: "tw-text-gray-700 tw-border-gray-500 tw-bg-transparent",
            },
            {
                variant: "outline",
                color: "zinc",
                className: "tw-text-zinc-700 tw-border-zinc-500 tw-bg-transparent",
            },
            {
                variant: "outline",
                color: "neutral",
                className: "tw-text-neutral-700 tw-border-neutral-500 tw-bg-transparent",
            },
            {
                variant: "outline",
                color: "stone",
                className: "tw-text-stone-700 tw-border-stone-500 tw-bg-transparent",
            },
            {
                variant: "outline",
                color: "red",
                className: "tw-text-red-700 tw-border-red-500 tw-bg-transparent",
            },
            {
                variant: "outline",
                color: "orange",
                className: "tw-text-orange-700 tw-border-orange-500 tw-bg-transparent",
            },
            {
                variant: "outline",
                color: "amber",
                className: "tw-text-amber-700 tw-border-amber-500 tw-bg-transparent",
            },
            {
                variant: "outline",
                color: "yellow",
                className: "tw-text-yellow-700 tw-border-yellow-500 tw-bg-transparent",
            },
            {
                variant: "outline",
                color: "lime",
                className: "tw-text-lime-700 tw-border-lime-500 tw-bg-transparent",
            },
            {
                variant: "outline",
                color: "green",
                className: "tw-text-green-700 tw-border-green-500 tw-bg-transparent",
            },
            {
                variant: "outline",
                color: "emerald",
                className: "tw-text-emerald-700 tw-border-emerald-500 tw-bg-transparent",
            },
            {
                variant: "outline",
                color: "teal",
                className: "tw-text-teal-700 tw-border-teal-500 tw-bg-transparent",
            },
            {
                variant: "outline",
                color: "cyan",
                className: "tw-text-cyan-700 tw-border-cyan-500 tw-bg-transparent",
            },
            {
                variant: "outline",
                color: "sky",
                className: "tw-text-sky-700 tw-border-sky-500 tw-bg-transparent",
            },
            {
                variant: "outline",
                color: "blue",
                className: "tw-text-blue-700 tw-border-blue-500 tw-bg-transparent",
            },
            {
                variant: "outline",
                color: "indigo",
                className: "tw-text-indigo-700 tw-border-indigo-500 tw-bg-transparent",
            },
            {
                variant: "outline",
                color: "violet",
                className: "tw-text-violet-700 tw-border-violet-500 tw-bg-transparent",
            },
            {
                variant: "outline",
                color: "purple",
                className: "tw-text-purple-700 tw-border-purple-500 tw-bg-transparent",
            },
            {
                variant: "outline",
                color: "fuchsia",
                className: "tw-text-fuchsia-700 tw-border-fuchsia-500 tw-bg-transparent",
            },
            {
                variant: "outline",
                color: "pink",
                className: "tw-text-pink-700 tw-border-pink-500 tw-bg-transparent",
            },
            {
                variant: "outline",
                color: "rose",
                className: "tw-text-rose-700 tw-border-rose-500 tw-bg-transparent",
            },
        ],
        defaultVariants: {
            variant: "default",
            color: "slate",
            size: "md",
            radius: "rounded",
        }
    }
)

function Chip({ children, className, variant, color, size, radius, border, ...props }) {
    return (
        <span className={cn(chipVariants({ variant, color, size, radius, border, className }))} {...props}>
            {children}
        </span>
    )
}

export { Chip, chipVariants }