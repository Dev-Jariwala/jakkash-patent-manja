import {
    add,
    eachMonthOfInterval,
    endOfYear,
    format,
    isEqual,
    isFuture,
    parse,
    startOfMonth,
    startOfToday,
} from 'date-fns';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import * as React from 'react';
import { Button } from './button';
import { cn } from '../../lib/utils';

function getStartOfCurrentMonth() {
    return startOfMonth(startOfToday());
}


export default function MonthSelecter({ currentMonth, onMonthChange, className }) {
    // const [currentYear, setCurrentYear] = React.useState(
    //     format(currentMonth, 'yyyy')
    // );
    const currentMonthDate = currentMonth ? new Date(currentMonth) : null;
    const [currentYear, setCurrentYear] = React.useState(currentMonthDate ? format(currentMonthDate, "yyyy") : format(new Date(), "yyyy"));
    const firstDayCurrentYear = parse(currentYear, "yyyy", new Date());

    const months = eachMonthOfInterval({
        start: firstDayCurrentYear,
        end: endOfYear(firstDayCurrentYear),
    });

    function previousYear() {
        const firstDayNextYear = add(firstDayCurrentYear, { years: -1 });
        setCurrentYear(format(firstDayNextYear, "yyyy"));
    }

    function nextYear() {
        const firstDayNextYear = add(firstDayCurrentYear, { years: 1 });
        setCurrentYear(format(firstDayNextYear, "yyyy"));
    }

    return (
        <div className={cn("tw-p-3 tw-w-full", className)}>
            <div className="tw-space-y-4 tw-grid tw-items-center tw-justify-center">
                <div className="tw-flex tw-items-center tw-justify-between tw-pt-1 tw-px-2">
                    <Button
                        name="previous-year"
                        aria-label="Go to previous year"
                        variant="outline"

                        className={cn(
                            'tw-h-7 tw-w-7 tw-bg-transparent tw-p-0 hover:tw-opacity-100',
                            'tw-left-1'
                        )}
                        type="button"
                        onClick={previousYear}
                    >
                        <ChevronLeft className="tw-h-4 tw-w-4" />
                    </Button>
                    <div
                        className="tw-text-sm tw-font-medium"
                        aria-live="polite"
                        role="presentation"
                        id="month-picker"
                    >
                        {format(firstDayCurrentYear, 'yyyy')}
                    </div>
                    <Button
                        name="next-year"
                        aria-label="Go to next year"
                        variant="outline"
                        className={cn(
                            'tw-h-7 tw-w-7 tw-bg-transparent tw-p-0 hover:tw-opacity-100',
                            'tw-right-1 tw-disabled:tw-bg-slate-100'
                        )}
                        type="button"
                        disabled={isFuture(add(firstDayCurrentYear, { years: 1 }))}
                        onClick={nextYear}
                    >
                        <ChevronRight className="tw-h-4 tw-w-4" />
                    </Button>
                </div>
                <div
                    className="tw-grid tw-w-full tw-grid-cols-3 tw-gap-2"
                    role="grid"
                    aria-labelledby="month-picker"
                >
                    {months.map((month) => (
                        <div
                            key={month.toString()}
                            className="tw-flex tw-items-center tw-justify-center tw-h-9 tw-w-12"
                            role="presentation"
                        >
                            <Button
                                name="day"
                                variant='none'
                                className={cn(
                                    'tw-h-9 tw-w-12 tw-p-0 hover:tw-bg-slate-100 hover:tw-text-slate-900 focus-visible:tw-outline-none focus-visible:tw-ring-2 focus-visible:tw-ring-slate-400 focus-visible:tw-ring-offset-2 dark:tw-ring-offset-slate-950 dark:hover:tw-bg-slate-800 dark:hover:tw-text-slate-50 dark:focus-visible:tw-ring-slate-800',
                                    isEqual(month, currentMonth) &&
                                    'tw-bg-indigo-500 tw-text-slate-50 hover:tw-bg-indigo-600 hover:tw-text-slate-50 focus:tw-bg-indigo-600 focus:tw-text-slate-50 dark:tw-bg-slate-50 dark:tw-text-slate-900 dark:hover:tw-bg-slate-50 dark:hover:tw-text-slate-900 dark:focus:tw-bg-slate-50 dark:focus:tw-text-slate-900',
                                    !isEqual(month, currentMonth) &&
                                    isEqual(month, getStartOfCurrentMonth()) &&
                                    'tw-bg-slate-100 tw-text-slate-900 dark:tw-bg-slate-800 dark:tw-text-slate-50'
                                )}
                                disabled={isFuture(month)}
                                role="gridcell"
                                tabIndex={-1}
                                type="button"
                                onClick={() => onMonthChange(month)}
                            >
                                <time dateTime={format(month, 'yyyy-MM-dd')}>
                                    {format(month, 'MMM')}
                                </time>
                            </Button>
                        </div>
                    ))}
                </div>
            </div>
        </div>

    );
}