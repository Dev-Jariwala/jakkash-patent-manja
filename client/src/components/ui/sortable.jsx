import * as React from "react"
import {
    closestCenter,
    defaultDropAnimationSideEffects,
    DndContext,
    DragOverlay,
    KeyboardSensor,
    MouseSensor,
    TouchSensor,
    useSensor,
    useSensors,
} from "@dnd-kit/core"
import {
    restrictToParentElement,
    restrictToVerticalAxis,
} from "@dnd-kit/modifiers"
import {
    arrayMove,
    SortableContext,
    useSortable,
    verticalListSortingStrategy,
} from "@dnd-kit/sortable"
import { CSS } from "@dnd-kit/utilities"
import { Slot } from "@radix-ui/react-slot"
import { composeRefs } from "../../lib/compose-refs"
import { cn } from "../../lib/utils"
import { Button } from "./button"

function Sortable({
    value,
    onValueChange,
    collisionDetection = closestCenter,
    modifiers = [restrictToVerticalAxis, restrictToParentElement],
    strategy = verticalListSortingStrategy,
    onMove,
    children,
    overlay,
    ...props
}) {
    const [activeId, setActiveId] = React.useState(null)

    const sensors = useSensors(
        useSensor(MouseSensor),
        useSensor(TouchSensor),
        useSensor(KeyboardSensor)
    )

    return (
        <DndContext
            modifiers={modifiers}
            sensors={sensors}
            onDragStart={({ active }) => setActiveId(active.id)}
            onDragEnd={({ active, over }) => {
                if (over && active.id !== over?.id) {
                    const activeIndex = value.findIndex((item) => item.id === active.id)
                    const overIndex = value.findIndex((item) => item.id === over.id)

                    if (onMove) {
                        onMove({ activeIndex, overIndex })
                    } else {
                        onValueChange?.(arrayMove(value, activeIndex, overIndex))
                    }
                }
                setActiveId(null)
            }}
            onDragCancel={() => setActiveId(null)}
            collisionDetection={collisionDetection}
            {...props}
        >
            <SortableContext items={value} strategy={strategy}>
                {children}
            </SortableContext>
            {overlay ? (
                <SortableOverlay activeId={activeId}>{overlay}</SortableOverlay>
            ) : null}
        </DndContext>
    )
}

const dropAnimationOpts = {
    sideEffects: defaultDropAnimationSideEffects({
        styles: {
            active: {
                opacity: "0.4",
            },
        },
    }),
}

function SortableOverlay({
    activeId,
    dropAnimation = dropAnimationOpts,
    children,
    ...props
}) {
    return (
        <DragOverlay dropAnimation={dropAnimation} {...props}>
            {activeId ? (
                <SortableItem value={activeId} asChild>
                    {children}
                </SortableItem>
            ) : null}
        </DragOverlay>
    )
}

const SortableItemContext = React.createContext({
    attributes: {},
    listeners: undefined,
})

function useSortableItem() {
    const context = React.useContext(SortableItemContext)

    if (!context) {
        throw new Error("useSortableItem must be used within a SortableItem")
    }

    return context
}

const SortableItem = React.forwardRef(
    ({ asChild, className, value, ...props }, ref) => {
        const {
            attributes,
            listeners,
            setNodeRef,
            transform,
            transition,
            isDragging,
        } = useSortable({ id: value })

        const context = React.useMemo(
            () => ({
                attributes,
                listeners,
            }),
            [attributes, listeners]
        )
        const style = {
            opacity: isDragging ? 0.4 : undefined,
            transform: CSS.Translate.toString(transform),
            transition,
        }

        const Comp = asChild ? Slot : "div"

        return (
            <SortableItemContext.Provider value={context}>
                <Comp
                    className={cn(isDragging && "cursor-grabbing", className)}
                    ref={composeRefs(ref, setNodeRef)}
                    style={style}
                    {...props}
                />
            </SortableItemContext.Provider>
        )
    }
)
SortableItem.displayName = "SortableItem"

const SortableDragHandle = React.forwardRef(({ className, ...props }, ref) => {
    const { attributes, listeners } = useSortableItem()

    return (
        <Button
            ref={composeRefs(ref)}
            className={cn("cursor-grab", className)}
            {...attributes}
            {...listeners}
            {...props}
        />
    )
})
SortableDragHandle.displayName = "SortableDragHandle"

export { Sortable, SortableDragHandle, SortableItem, SortableOverlay }