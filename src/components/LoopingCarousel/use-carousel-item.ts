import {getCurrentInstance, inject, onMounted, onUnmounted, Ref, ref} from "vue";
import {carouselContextKey} from "./constants.ts";

export const useCarouselItem = (
    dom: Ref<HTMLElement | null>
) => {
    const translate = ref<number>(0);
    const instance = getCurrentInstance();
    const carouselContext = inject(carouselContextKey);
    const offsetLeft = ref<number>(0);
    const clientWidth = ref<number>(0);

    if (!instance || !carouselContext) {
        throw new Error("use-carousel-item, 实例不存在或未捕获到依赖");
    }

    const move = (x: number) => {
        dom.value?.classList.remove("no-animation");
        let updated = translate.value + x;
        if (-1 * updated > clientWidth.value + offsetLeft.value) {
            updated += carouselContext.totalWidth.value;
            dom.value?.classList.add("no-animation")
        }
        translate.value = updated;
    }

    onMounted(() => {
        if (dom.value) {
            offsetLeft.value = dom.value.offsetLeft;
            clientWidth.value = dom.value.clientWidth;
        }

        carouselContext.addItem({
            uid: instance.uid,
            width: clientWidth.value,
            move: move
        })
    })

    onUnmounted(() => {
        carouselContext?.removeItem(instance.uid)
    })

    return {
        translate,
    }
}
