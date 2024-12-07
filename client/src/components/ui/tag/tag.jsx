import React from 'react';
import { Button } from '../button';
import { cn } from '../../../lib/utils';

import { cva } from 'class-variance-authority';

export const tagVariants = cva('tw-transition-all tw-border tw-inline-flex tw-items-center tw-text-sm tw-pl-2 tw-rounded-md', {
    variants: {
        variant: {
            default: 'tw-bg-secondary tw-text-secondary-foreground hover:tw-bg-secondary/80',
            primary: 'tw-bg-primary tw-border-primary tw-text-primary-foreground hover:tw-bg-primary/90',
            destructive: 'tw-bg-destructive tw-border-destructive tw-text-destructive-foreground hover:tw-bg-destructive/90',
        },
        size: {
            sm: 'tw-text-xs',
            md: 'tw-text-sm',
            lg: 'tw-text-base',
            xl: 'tw-text-lg',
        },
        shape: {
            default: 'tw-rounded-sm',
            rounded: 'tw-rounded-lg',
            square: 'tw-rounded-none',
            pill: 'tw-rounded-full',
        },
        borderStyle: {
            default: 'tw-border-solid',
            none: 'tw-border-none',
        },
        textCase: {
            uppercase: 'tw-uppercase',
            lowercase: 'tw-lowercase',
            capitalize: 'tw-capitalize',
        },
        interaction: {
            clickable: 'tw-cursor-pointer hover:tw-shadow-md',
            nonClickable: 'tw-cursor-default',
        },
        animation: {
            none: '',
            fadeIn: 'tw-animate-fadeIn',
            slideIn: 'tw-animate-slideIn',
            bounce: 'tw-animate-bounce',
        },
        textStyle: {
            normal: 'tw-font-normal',
            bold: 'tw-font-bold',
            italic: 'tw-italic',
            underline: 'tw-underline',
            lineThrough: 'tw-line-through',
        },
    },
    defaultVariants: {
        variant: 'default',
        size: 'md',
        shape: 'default',
        borderStyle: 'default',
        interaction: 'nonClickable',
        animation: 'fadeIn',
        textStyle: 'normal',
    },
});

export const Tag = ({
    tagObj,
    direction,
    draggable,
    onTagClick,
    onRemoveTag,
    variant,
    size,
    shape,
    borderStyle,
    textCase,
    interaction,
    animation,
    textStyle,
    isActiveTag
}) => {
    return (
        <span
            key={tagObj.id}
            draggable={draggable}
            className={cn(
                tagVariants({
                    variant,
                    size,
                    shape,
                    borderStyle,
                    textCase,
                    interaction,
                    animation,
                    textStyle,
                }),
                {
                    'tw-justify-between': direction === 'column',
                    'tw-cursor-pointer': draggable,
                    'tw-ring-ring tw-ring-offset-2 tw-ring-2 tw-ring-offset-background': isActiveTag,
                },
            )}
            onClick={() => onTagClick?.(tagObj)}
        >
            {tagObj.text}
            <Button
                type="button"
                variant="ghost"
                onClick={(e) => {
                    e.stopPropagation(); // Prevent event from bubbling up to the tag span
                    onRemoveTag(tagObj.id);
                }}
                className={cn('tw-py-1 tw-px-2 tw-h-full hover:tw-bg-transparent hover:tw-text-destructive')}
            >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="tw-lucide tw-lucide-x"
                >
                    <path d="M18 6 6 18"></path>
                    <path d="m6 6 12 12"></path>
                </svg>
            </Button>
        </span>
    );
};
