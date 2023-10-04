import {ComputedRef, InjectionKey} from "vue";

export const carouselContextKey = Symbol() as InjectionKey<{
    addItem: (item: carouselItemContext) => void
    removeItem: (uid: number) => void,
    totalWidth: ComputedRef<number>
}>

export type carouselItemContext =  {
    uid: number,
    width: number,
    move: (x: number) => void
}

