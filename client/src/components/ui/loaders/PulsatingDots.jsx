import { motion } from 'framer-motion'
import { cn } from '../../../lib/utils'

export default function PulsatingDots({ className }) {
    return (
        <div className="tw-flex tw-items-center tw-justify-center">
            <div className="tw-flex tw-space-x-2">
                <motion.div
                    className={cn("tw-size-3 tw-rounded-full tw-bg-indigo-500", className)}
                    animate={{
                        scale: [1, 1.5, 1],
                        opacity: [0.5, 1, 0.5],
                    }}
                    transition={{
                        duration: 1,
                        ease: 'easeInOut',
                        repeat: Infinity,
                    }}
                />
                <motion.div
                    className={cn("tw-size-3 tw-rounded-full tw-bg-indigo-500", className)}
                    animate={{
                        scale: [1, 1.5, 1],
                        opacity: [0.5, 1, 0.5],
                    }}
                    transition={{
                        duration: 1,
                        ease: 'easeInOut',
                        repeat: Infinity,
                        delay: 0.3,
                    }}
                />
                <motion.div
                    className={cn("tw-size-3 tw-rounded-full tw-bg-indigo-500", className)}
                    animate={{
                        scale: [1, 1.5, 1],
                        opacity: [0.5, 1, 0.5],
                    }}
                    transition={{
                        duration: 1,
                        ease: 'easeInOut',
                        repeat: Infinity,
                        delay: 0.6,
                    }}
                />
            </div>
        </div>
    )
}