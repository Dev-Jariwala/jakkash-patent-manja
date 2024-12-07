import * as React from "react"
import { cn } from "../../lib/utils"
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogDescription, AlertDialogContent, AlertDialogFooter, AlertDialogTitle, AlertDialogHeader } from "./alert-dialog"

const BlockSvg = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width='72' height='72' viewBox="0 0 36 36"><path fill="#EFEFEF" d="M4.167 8.377c0 6.917-3.583 11.667-3.583 15S2.5 33.71 17.833 33.71s17.583-9.417 17.583-13.083C35.417 3.46 4.167-3.873 4.167 8.377z" /><path fill="#A4AFC1" d="m31.796 4.32 1.415-1.414.707.707-1.415 1.415zM31.972 7.68l.707-.707 1.414 1.414-.707.707zM27.906 3.613l.707-.707 1.415 1.415-.707.707z" /><path fill="#F3F3F1" d="M23.5 7.75h-11L6.75 18l5.75 10.25h11L29.25 18z" /><path fill="#2FDF84" d="M18.5 24.25c1.54-.012 2.745-.739 3.667-3.335.922-2.596 1.833-2.032 1.833-2.804 0-.284-.306-.611-1.222-.611-1.456 0-2.028 1.5-2.028 1.5v-6.25a1 1 0 0 0-2 0v4-5a1 1 0 0 0-2 0v5.5-4.5a1 1 0 0 0-2 0v5-3a1 1 0 0 0-2 0v5.5a4 4 0 0 0 4 4h1.75z" /><path fill="#D5DBE1" d="M15 7.75h-2.5L6.75 18l5.75 10.25H15L9.25 18z" /><path fill="#00B871" d="M15 20.25v-5.5a1 1 0 0 1 2 0v-2a1 1 0 0 1 1-1c.304 0 .567.143.75.357v-.357a1 1 0 0 0-2 0v1a1 1 0 0 0-2 0v2a1 1 0 0 0-2 0v5.5a4 4 0 0 0 4 4h1.75c.1-.001.195-.014.292-.021A3.99 3.99 0 0 1 15 20.25z" /><path d="M23.5 29h-11a.75.75 0 0 1-.654-.383l-5.75-10.25a.75.75 0 0 1 0-.734l5.75-10.25A.75.75 0 0 1 12.5 7h11a.75.75 0 0 1 .654.383l5.75 10.25a.75.75 0 0 1 0 .734l-5.75 10.25A.75.75 0 0 1 23.5 29zm-10.561-1.5H23.06l5.33-9.5-5.329-9.5H12.939L7.61 18l5.329 9.5z" /><path d="M18.5 25h-1.75A4.756 4.756 0 0 1 12 20.25v-5.5c0-1.05.986-1.877 2-1.732v-.268a1.752 1.752 0 0 1 2.148-1.704c.272-.615.887-1.046 1.602-1.046s1.33.431 1.602 1.046A1.752 1.752 0 0 1 21.5 12.75v4.315a2.67 2.67 0 0 1 1.277-.315c1.456 0 1.973.733 1.973 1.361 0 .683-.419.984-.669 1.165-.287.207-.721.52-1.207 1.89-.936 2.635-2.283 3.816-4.368 3.834H18.5zm-4.75-10.5a.25.25 0 0 0-.25.25v5.5a3.254 3.254 0 0 0 3.25 3.25h1.747c.95-.009 2.04-.237 2.963-2.836.501-1.41 1.02-2.021 1.488-2.409a2.879 2.879 0 0 0-.171-.005c-.929 0-1.322 1.007-1.326 1.017A.751.751 0 0 1 20 19v-6.25c0-.275-.5-.275-.5 0v4a.75.75 0 0 1-1.5 0v-5c0-.275-.5-.275-.5 0v5.5a.75.75 0 0 1-1.5 0v-4.5c0-.275-.5-.275-.5 0v5a.75.75 0 0 1-1.5 0v-3a.25.25 0 0 0-.25-.25zM2 27.5h32V29H2z" /></svg>
)
export const BlockAlert = ({ title, open, onOpenChange, description, onConfirm, onCancel, className, ...props }) => {

    return (
        <AlertDialog open={open} onOpenChange={onOpenChange} className={cn("block-alert", className)} {...props}>
            <AlertDialogContent style={{ fontFamily: 'Nunito, "Segoe UI", arial' }}>
                <AlertDialogHeader>
                    <AlertDialogTitle>{title}</AlertDialogTitle>
                </AlertDialogHeader>
                <AlertDialogDescription>
                    <div className='tw-flex tw-flex-col tw-items-center tw-gap-4'>
                        <BlockSvg />
                        <p className='tw-text-center tw-text-xl tw-text-gray-800'>{description}</p>
                    </div>
                </AlertDialogDescription>
                <AlertDialogFooter className='sm:tw-justify-start'>
                    <AlertDialogAction size='sm' onClick={onConfirm} variant='none' intent='red' >Close</AlertDialogAction>
                    <AlertDialogCancel size='sm' onClick={onCancel}>Cancel</AlertDialogCancel>
                </AlertDialogFooter>
            </AlertDialogContent>

        </AlertDialog>


    )
}


