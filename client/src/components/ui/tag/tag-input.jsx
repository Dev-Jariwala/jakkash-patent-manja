import React from 'react';
import { Input } from '../input';
import { Button } from '../button';
import { CommandInput } from '../command';
import { TagPopover } from './tag-popover';
import { TagList } from './tag-list';
import { Autocomplete } from './autocomplete';
import { cn } from '../../../lib/utils';
import { v4 as uuid } from 'uuid';

const Delimiter = {
    Comma: ',',
    Enter: 'Enter',
};

const TagInput = React.forwardRef((props, ref) => {
    const {
        id,
        placeholder,
        tags,
        setTags,
        variant,
        size,
        shape,
        className,
        enableAutocomplete,
        autocompleteOptions,
        maxTags,
        delimiter = Delimiter.Comma,
        onTagAdd,
        onTagRemove,
        allowDuplicates,
        showCount,
        validateTag,
        placeholderWhenFull = 'Max tags reached',
        sortTags,
        delimiterList,
        truncate,
        autocompleteFilter,
        borderStyle,
        textCase,
        interaction,
        animation,
        textStyle,
        minLength,
        maxLength,
        direction = 'row',
        onInputChange,
        customTagRenderer,
        onFocus,
        onBlur,
        onTagClick,
        draggable = false,
        inputFieldPosition = 'bottom',
        clearAll = false,
        onClearAll,
        usePopoverForTags = false,
        inputProps = {},
        restrictTagsToAutocompleteOptions,
        includeTagsInInput = true,
        activeTagIndex,
        setActiveTagIndex,
    } = props;

    const [inputValue, setInputValue] = React.useState('');
    const [tagCount, setTagCount] = React.useState(Math.max(0, tags.length));
    const inputRef = React.useRef(null);
    // const [activeTagIndex, setActiveTagIndex] = React.useState<number | null>(null);

    if ((maxTags !== undefined && maxTags < 0) || (props.minTags !== undefined && props.minTags < 0)) {
        console.warn('maxTags and minTags cannot be less than 0');
        // error
        return null;
    }

    const handleInputChange = (e) => {
        const newValue = e.target.value;
        setInputValue(newValue);
        onInputChange?.(newValue);
    };

    const handleInputFocus = (event) => {
        setActiveTagIndex(null); // Reset active tag index when the input field gains focus
        onFocus?.(event);
    };

    const handleInputBlur = (event) => {
        onBlur?.(event);
    };

    const handleKeyDown = (e) => {
        if (delimiterList ? delimiterList.includes(e.key) : e.key === delimiter || e.key === Delimiter.Enter) {
            e.preventDefault();
            const newTagText = inputValue.trim();

            // Check if the tag is in the autocomplete options if restrictTagsToAutocomplete is true
            if (restrictTagsToAutocompleteOptions && !autocompleteOptions?.some((option) => option.text === newTagText)) {
                // error
                return;
            }

            if (validateTag && !validateTag(newTagText)) {
                return;
            }

            if (minLength && newTagText.length < minLength) {
                console.warn('Tag is too short');
                // error
                return;
            }

            // Validate maxLength
            if (maxLength && newTagText.length > maxLength) {
                // error
                console.warn('Tag is too long');
                return;
            }

            const newTagId = uuid();

            if (
                newTagText &&
                (allowDuplicates || !tags.some((tag) => tag.text === newTagText)) &&
                (maxTags === undefined || tags.length < maxTags)
            ) {
                setTags([...tags, { id: newTagId, text: newTagText }]);
                onTagAdd?.(newTagText);
                setTagCount((prevTagCount) => prevTagCount + 1);
            }
            setInputValue('');
        } else {
            switch (e.key) {
                case 'Delete':
                    if (activeTagIndex !== null) {
                        e.preventDefault();
                        const newTags = [...tags];
                        newTags.splice(activeTagIndex, 1);
                        setTags(newTags);
                        setActiveTagIndex((prev) =>
                            newTags.length === 0 ? null : (prev >= newTags.length ? newTags.length - 1 : prev)
                        );
                    }
                    break;
                case 'Backspace':
                    if (activeTagIndex !== null) {
                        e.preventDefault();
                        const newTags = [...tags];
                        newTags.splice(activeTagIndex, 1);
                        setTags(newTags);
                        setActiveTagIndex((prev) => (prev === 0 ? null : prev - 1));
                    }
                    break;
                case 'ArrowRight':
                    e.preventDefault();
                    if (activeTagIndex === null) {
                        setActiveTagIndex(0);
                    } else {
                        setActiveTagIndex((prev) => (prev + 1 >= tags.length ? 0 : prev + 1));
                    }
                    break;
                case 'ArrowLeft':
                    e.preventDefault();
                    if (activeTagIndex === null) {
                        setActiveTagIndex(tags.length - 1);
                    } else {
                        setActiveTagIndex((prev) => (prev === 0 ? tags.length - 1 : prev - 1));
                    }
                    break;
                case 'Home':
                    e.preventDefault();
                    setActiveTagIndex(0);
                    break;
                case 'End':
                    e.preventDefault();
                    setActiveTagIndex(tags.length - 1);
                    break;
                default:
                    break;
            }
        }
    };


    const removeTag = (idToRemove) => {
        setTags(tags.filter((tag) => tag.id !== idToRemove));
        onTagRemove?.(tags.find((tag) => tag.id === idToRemove)?.text || '');
        setTagCount((prevTagCount) => prevTagCount - 1);
    };

    const onSortEnd = (oldIndex, newIndex) => {
        setTags((currentTags) => {
            const newTags = [...currentTags];
            const [removedTag] = newTags.splice(oldIndex, 1);
            newTags.splice(newIndex, 0, removedTag);

            return newTags;
        });
    };

    const handleClearAll = () => {
        onClearAll?.();
    };

    const filteredAutocompleteOptions = autocompleteFilter
        ? autocompleteOptions?.filter((option) => autocompleteFilter(option.text))
        : autocompleteOptions;

    const displayedTags = sortTags ? [...tags].sort() : tags;

    const truncatedTags = truncate
        ? tags.map((tag) => ({
            id: tag.id,
            text: tag.text?.length > truncate ? `${tag.text.substring(0, truncate)}...` : tag.text,
        }))
        : displayedTags;

    return (
        <div
            className={`tw-w-full tw-flex ${!includeTagsInInput && tags.length > 0 ? 'tw-gap-3' : ''} ${inputFieldPosition === 'bottom' ? 'tw-flex-col' : inputFieldPosition === 'top' ? 'tw-flex-col-reverse' : 'tw-flex-row'
                }`}
        >
            {!usePopoverForTags &&
                (!includeTagsInInput ? (
                    <TagList
                        tags={truncatedTags}
                        customTagRenderer={customTagRenderer}
                        variant={variant}
                        size={size}
                        shape={shape}
                        borderStyle={borderStyle}
                        textCase={textCase}
                        interaction={interaction}
                        animation={animation}
                        textStyle={textStyle}
                        onTagClick={onTagClick}
                        draggable={draggable}
                        onSortEnd={onSortEnd}
                        onRemoveTag={removeTag}
                        direction={direction}
                        includeTagsInInput={includeTagsInInput}
                        activeTagIndex={activeTagIndex}
                        setActiveTagIndex={setActiveTagIndex}
                    />
                ) : (
                    !enableAutocomplete && (
                        <div className="tw-w-full">
                            <div
                                className={`tw-flex tw-flex-row tw-flex-wrap tw-items-center tw-gap-2 tw-p-2 tw-w-full tw-rounded-md tw-border tw-border-input tw-bg-background tw-text-sm tw-ring-offset-background file:tw-border-0 file:tw-bg-transparent file:tw-text-sm file:tw-font-medium placeholder:tw-text-muted-foreground focus-visible:tw-outline-none focus-visible:tw-ring-2 focus-visible:tw-ring-ring focus-visible:tw-ring-offset-2 disabled:cursor-not-allowed disabled:tw-opacity-50`}
                            >
                                <TagList
                                    tags={truncatedTags}
                                    customTagRenderer={customTagRenderer}
                                    variant={variant}
                                    size={size}
                                    shape={shape}
                                    borderStyle={borderStyle}
                                    textCase={textCase}
                                    interaction={interaction}
                                    animation={animation}
                                    textStyle={textStyle}
                                    onTagClick={onTagClick}
                                    draggable={draggable}
                                    onSortEnd={onSortEnd}
                                    onRemoveTag={removeTag}
                                    direction={direction}
                                    includeTagsInInput={includeTagsInInput}
                                    activeTagIndex={activeTagIndex}
                                    setActiveTagIndex={setActiveTagIndex}
                                />
                                <Input
                                    ref={inputRef}
                                    id={id}
                                    type="text"
                                    placeholder={maxTags !== undefined && tags.length >= maxTags ? placeholderWhenFull : placeholder}
                                    value={inputValue}
                                    onChange={handleInputChange}
                                    onKeyDown={handleKeyDown}
                                    onFocus={handleInputFocus}
                                    onBlur={handleInputBlur}
                                    {...inputProps}
                                    className={cn(
                                        className,
                                        'tw-border-0 tw-px-1 tw-py-0 tw-bg-transparent sm:min-w-focus-visible:tw-ring-0 focus-visible:tw-ring-transparent focus-visible:tw-ring-offset-0 tw-min-w-10 tw-w-fit',
                                    )}
                                    autoComplete={enableAutocomplete ? 'on' : 'off'}
                                    list={enableAutocomplete ? 'autocomplete-options' : undefined}
                                    disabled={maxTags !== undefined && tags.length >= maxTags}
                                />
                            </div>
                        </div>
                    )
                ))}
            {enableAutocomplete ? (
                <div className="tw-w-full">
                    <Autocomplete
                        tags={tags}
                        setTags={setTags}
                        autocompleteOptions={filteredAutocompleteOptions}
                        maxTags={maxTags}
                        onTagAdd={onTagAdd}
                        allowDuplicates={allowDuplicates ?? false}
                        includeTagsInInput={includeTagsInInput}
                    >
                        {!usePopoverForTags ? (
                            !includeTagsInInput ? (
                                <CommandInput
                                    placeholder={maxTags !== undefined && tags.length >= maxTags ? placeholderWhenFull : placeholder}
                                    ref={inputRef}
                                    value={inputValue}
                                    disabled={maxTags !== undefined && tags.length >= maxTags}
                                    onChangeCapture={handleInputChange}
                                    onKeyDown={handleKeyDown}
                                    onFocus={handleInputFocus}
                                    onBlur={handleInputBlur}
                                    className={cn('tw-w-full', className)}
                                />
                            ) : (
                                <div
                                    className={`tw-flex tw-flex-row tw-flex-wrap tw-items-center tw-p-2 tw-gap-2 tw-h-fit tw-w-full tw-bg-background tw-text-sm tw-ring-offset-background file:tw-border-0 file:tw-bg-transparent file:tw-text-sm file:tw-font-medium placeholder:tw-text-muted-foreground focus-visible:tw-outline-none focus-visible:tw-ring-2 focus-visible:tw-ring-ring focus-visible:tw-ring-offset-2 disabled:tw-cursor-not-allowed disabled:tw-opacity-50`}
                                >
                                    <TagList
                                        tags={truncatedTags}
                                        customTagRenderer={customTagRenderer}
                                        variant={variant}
                                        size={size}
                                        shape={shape}
                                        borderStyle={borderStyle}
                                        textCase={textCase}
                                        interaction={interaction}
                                        animation={animation}
                                        textStyle={textStyle}
                                        onTagClick={onTagClick}
                                        draggable={draggable}
                                        onSortEnd={onSortEnd}
                                        onRemoveTag={removeTag}
                                        direction={direction}
                                        includeTagsInInput={includeTagsInInput}
                                        activeTagIndex={activeTagIndex}
                                        setActiveTagIndex={setActiveTagIndex}
                                    />
                                    <CommandInput
                                        placeholder={maxTags !== undefined && tags.length >= maxTags ? placeholderWhenFull : placeholder}
                                        ref={inputRef}
                                        value={inputValue}
                                        disabled={maxTags !== undefined && tags.length >= maxTags}
                                        onChangeCapture={handleInputChange}
                                        onKeyDown={handleKeyDown}
                                        onFocus={handleInputFocus}
                                        onBlur={handleInputBlur}
                                        includeTagsInInput={includeTagsInInput}
                                        className={cn('tw-border-0 tw-min-w-[130px] tw-h-5', className)}
                                    />
                                </div>
                            )
                        ) : (
                            <TagPopover
                                tags={truncatedTags}
                                customTagRenderer={customTagRenderer}
                                variant={variant}
                                size={size}
                                shape={shape}
                                borderStyle={borderStyle}
                                textCase={textCase}
                                interaction={interaction}
                                animation={animation}
                                textStyle={textStyle}
                                onTagClick={onTagClick}
                                draggable={draggable}
                                onSortEnd={onSortEnd}
                                onRemoveTag={removeTag}
                                direction={direction}
                                activeTagIndex={activeTagIndex}
                                setActiveTagIndex={setActiveTagIndex}
                            >
                                <CommandInput
                                    placeholder={maxTags !== undefined && tags.length >= maxTags ? placeholderWhenFull : placeholder}
                                    ref={inputRef}
                                    value={inputValue}
                                    disabled={maxTags !== undefined && tags.length >= maxTags}
                                    onChangeCapture={handleInputChange}
                                    onKeyDown={handleKeyDown}
                                    onFocus={handleInputFocus}
                                    onBlur={handleInputBlur}
                                    className={cn('tw-w-full', className)}
                                />
                            </TagPopover>
                        )}
                    </Autocomplete>
                </div>
            ) : (
                <div className="tw-w-full">
                    {!usePopoverForTags ? (
                        !includeTagsInInput ? (
                            <Input
                                ref={inputRef}
                                id={id}
                                type="text"
                                placeholder={maxTags !== undefined && tags.length >= maxTags ? placeholderWhenFull : placeholder}
                                value={inputValue}
                                onChange={handleInputChange}
                                onKeyDown={handleKeyDown}
                                onFocus={handleInputFocus}
                                onBlur={handleInputBlur}
                                {...inputProps}
                                className={className}
                                autoComplete={enableAutocomplete ? 'on' : 'off'}
                                list={enableAutocomplete ? 'autocomplete-options' : undefined}
                                disabled={maxTags !== undefined && tags.length >= maxTags}
                            />
                        ) : null
                    ) : (
                        <TagPopover
                            tags={truncatedTags}
                            customTagRenderer={customTagRenderer}
                            variant={variant}
                            size={size}
                            shape={shape}
                            borderStyle={borderStyle}
                            textCase={textCase}
                            interaction={interaction}
                            animation={animation}
                            textStyle={textStyle}
                            onTagClick={onTagClick}
                            draggable={draggable}
                            onSortEnd={onSortEnd}
                            onRemoveTag={removeTag}
                            direction={direction}
                            activeTagIndex={activeTagIndex}
                            setActiveTagIndex={setActiveTagIndex}
                        >
                            <Input
                                ref={inputRef}
                                id={id}
                                type="text"
                                placeholder={maxTags !== undefined && tags.length >= maxTags ? placeholderWhenFull : placeholder}
                                value={inputValue}
                                onChange={handleInputChange}
                                onKeyDown={handleKeyDown}
                                onFocus={handleInputFocus}
                                onBlur={handleInputBlur}
                                {...inputProps}
                                className={className}
                                autoComplete={enableAutocomplete ? 'on' : 'off'}
                                list={enableAutocomplete ? 'autocomplete-options' : undefined}
                                disabled={maxTags !== undefined && tags.length >= maxTags}
                            />
                        </TagPopover>
                    )}
                </div>
            )}

            {showCount && maxTags && (
                <div className="tw-flex">
                    <span className="tw-text-muted-foreground tw-text-sm tw-mt-1 tw-ml-auto">
                        {`${tagCount}`}/{`${maxTags}`}
                    </span>
                </div>
            )}
            {clearAll && (
                <Button type="button" onClick={handleClearAll} className="tw-mt-2">
                    Clear All
                </Button>
            )}
        </div>
    );
});

TagInput.displayName = 'TagInput';

export { TagInput };