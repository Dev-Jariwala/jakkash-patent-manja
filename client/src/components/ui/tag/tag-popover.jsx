import React, { useRef, useState } from 'react';
import { Popover, PopoverContent, PopoverTrigger } from '../popover';
import { TagList } from './tag-list';


export const TagPopover = ({ children, tags, customTagRenderer, activeTagIndex, setActiveTagIndex, ...tagProps }) => {
    const triggerRef = useRef(null);
    const [popoverWidth, setPopoverWidth] = useState(undefined);
    const [isPopoverOpen, setIsPopoverOpen] = useState(false);

    const handleOpenChange = (open) => {
        if (open && triggerRef.current) {
            setPopoverWidth(triggerRef.current.offsetWidth);
        }
        setIsPopoverOpen(open);
    };

    const handleInputFocus = () => {
        setIsPopoverOpen(true);
    };

    const handleInputBlur = (event) => {
        const relatedTarget = event.relatedTarget;
        if (relatedTarget && triggerRef.current && triggerRef.current.contains(relatedTarget)) {
            return;
        }
        setIsPopoverOpen(false);
    };

    return (
        <Popover open={isPopoverOpen} onOpenChange={handleOpenChange}>
            <PopoverTrigger asChild ref={triggerRef}>
                {React.cloneElement(children, {
                    onFocus: handleInputFocus,
                    onBlur: handleInputBlur,
                })}
            </PopoverTrigger>
            <PopoverContent
                className="tw-w-full tw-space-y-3 tw-max-w-[450px]"
                style={{
                    width: `${popoverWidth}px`,
                }}
            >
                <div className="tw-space-y-1">
                    <h4 className="tw-text-sm tw-font-medium tw-leading-none">Entered Tags</h4>
                    <p className="tw-text-sm tw-text-muted-foreground tw-text-left">These are the tags you&apos;ve entered.</p>
                </div>
                <TagList tags={tags} customTagRenderer={customTagRenderer} activeTagIndex={activeTagIndex} setActiveTagIndex={setActiveTagIndex} {...tagProps} />
            </PopoverContent>
        </Popover>
    );
};