// copy from element-plus

import {
    isVNode
} from 'vue'
import type {
    VNode,
    VNodeNormalizedChildren,
    VNodeChild,
} from 'vue'
import { isArray } from '@vue/shared'
export type VNodeChildAtom = Exclude<VNodeChild, Array<any>>
export type FlattenVNodes = Array<VNodeChildAtom | RawSlots>
export type RawSlots = Exclude<
    VNodeNormalizedChildren,
    Array<any> | null | string
>
export const flattedChildren = (
    children: FlattenVNodes | VNode | VNodeNormalizedChildren
): FlattenVNodes => {
    const vNodes = isArray(children) ? children : [children]
    const result: FlattenVNodes = []

    vNodes.forEach((child) => {
        if (isArray(child)) {
            result.push(...flattedChildren(child))
        } else if (isVNode(child) && isArray(child.children)) {
            result.push(...flattedChildren(child.children))
        } else {
            result.push(child)
            if (isVNode(child) && child.component?.subTree) {
                result.push(...flattedChildren(child.component.subTree))
            }
        }
    })
    return result
}
