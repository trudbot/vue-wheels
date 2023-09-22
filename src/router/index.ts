import {createRouter, createWebHashHistory} from "vue-router";
import components from "./components.ts";

const modules = import.meta.glob('../components/*/*.vue')

export default createRouter({
    history: createWebHashHistory(),
    routes: [
        {
            path: '/',
            redirect: {
                name: 'ResizableSplitView'
            }
        },
        ...components.map(e => {
            return {
                path: e.routeLink,
                name: e.routeName,
                component: modules[e.demoPath]
            }
        })
    ]
})
