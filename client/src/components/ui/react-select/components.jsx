import * as React from 'react';
import { components } from 'react-select';
import { Check, X, ChevronDown } from 'lucide-react'
import { cn } from '../../../lib/utils';

export const DropdownIndicator = (props) => {
    return (
        <components.DropdownIndicator {...props}>
            <ChevronDown className={'tw-h-4 tw-w-4 tw-opacity-50'} />
        </components.DropdownIndicator>
    );
};

export const ClearIndicator = (props) => {
    return (
        <components.ClearIndicator {...props}>
            <X className={'tw-h-3.5 tw-w-3.5 tw-opacity-50'} />
        </components.ClearIndicator>
    );
};

export const MultiValueRemove = (props) => {
    return (
        <components.MultiValueRemove className='tw-bg-red-100' {...props}>
            <X className={'tw-h-3 tw-w-3 tw-opacity-50'} />
        </components.MultiValueRemove>
    );
};

export const Option = (props) => {
    return (
        <components.Option {...props}>
            <div className={cn("tw-flex tw-items-center tw-justify-between", props.isSelected && '')}>
                <div>{props.data.label}</div>
                {props.isSelected && <Check size={16} />}
            </div>
        </components.Option>
    );
};