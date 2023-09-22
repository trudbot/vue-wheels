import components from "../../router/components.ts";

interface Menu {
    routeName: string,
    label: string
}

const menus: Menu[] = components.map(e => {
    return {
        routeName: e.routeName,
        label: e.label
    }
})

export default menus;
