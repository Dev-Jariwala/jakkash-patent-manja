import React from 'react';
import { Tag } from './tag';
import { cn } from '../../../lib/utils';

export const TagList = ({
    tags,
    customTagRenderer,
    direction,
    className,
    includeTagsInInput,
    activeTagIndex,
    setActiveTagIndex,
    ...tagListProps
}) => {

    return (
        <>
            {!includeTagsInInput ? (
                <div
                    className={cn('tw-rounded-md tw-w-full', className, {
                        'tw-flex tw-flex-wrap tw-gap-2': direction === 'row',
                        'tw-flex tw-flex-col tw-gap-2': direction === 'column',
                    })}
                >

                    {tags.map((tagObj, index) =>
                        customTagRenderer ? customTagRenderer(tagObj, index === activeTagIndex) : <Tag key={tagObj.id} isActiveTag={index === activeTagIndex} tagObj={tagObj} {...tagListProps} />,
                    )}
                </div>
            ) : (
                <>
                    {
                        tags.map((tagObj, index) =>
                            customTagRenderer ? customTagRenderer(tagObj, index === activeTagIndex) : <Tag key={tagObj.id} tagObj={tagObj} isActiveTag={index === activeTagIndex} {...tagListProps} />,
                        )
                    }
                </>
            )}
        </>
    );
};