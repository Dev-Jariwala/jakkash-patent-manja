import React, { useState, useEffect } from 'react'
import { Button } from './button'
import { cn } from '../../lib/utils'
import { Copy, Check } from 'lucide-react'
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from "../ui/tooltip"

const CopyToClipboard = ({ getValue, className, variant, text, size }) => {
    const [copied, setCopied] = useState(false)
    const [showTooltip, setShowTooltip] = useState(false)

    const handleCopy = async (e) => {
        e.preventDefault()
        e.stopPropagation()
        if (!navigator.clipboard) {
            console.log('no access to clipboard')
            return
        }

        try {
            await navigator.clipboard.writeText(getValue())
            setCopied(true)
            setShowTooltip(true)
        } catch (error) {
            console.log('error copying to clipboard', error)
        }
    }

    useEffect(() => {
        if (!copied) return
        const timeout = setTimeout(() => {
            setCopied(false)
            setShowTooltip(false)
        }, 2000)

        return () => clearTimeout(timeout)
    }, [copied])

    return (
        <TooltipProvider>
            <Tooltip open={showTooltip}>
                <TooltipTrigger asChild>
                    <Button
                        onClick={(e) => handleCopy(e)}
                        type='button'
                        size={size || 'icon'}
                        variant={variant || "ghost"}
                        className={cn('tw-flex tw-items-center', className)}
                    >
                        {copied ? <Check size={14} /> : <Copy absoluteStrokeWidth={false} size={14} />}
                        {text && <span className="tw-ml-2">{text}</span>}
                        <span className="tw-sr-only">Copy</span>
                    </Button>
                </TooltipTrigger>
                <TooltipContent>
                    <p className='tw-mb-0'>Copied to clipboard!</p>
                </TooltipContent>
            </Tooltip>
        </TooltipProvider>
    )
}

export default CopyToClipboard