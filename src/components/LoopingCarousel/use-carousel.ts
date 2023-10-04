import {computed, getCurrentInstance, onMounted, onUnmounted, provide, ref} from "vue";
import {useOrderedChildren} from "./hooks/useOrderedChildren.ts";
import {carouselContextKey, carouselItemContext} from "./constants.ts";

const speed = 100;
export const useCarousel = () => {
    const instance = getCurrentInstance();

    const {
        children: items,
        addChild: addItem,
        removeChild: removeItem,
    } = useOrderedChildren<carouselItemContext>(instance!, 'trudbot');

    const timer = ref<ReturnType<typeof setInterval> | null>(null)

    const totalWidth = computed(() => {
        return items.value.reduce((pre, curr) => {
            return pre + curr.width
        }, 0);
    })

    function pauseTimer() {
        if (timer.value) {
            clearInterval(timer.value)
            timer.value = null
        }
    }

    function startTimer() {
        if (timer.value) return
        timer.value = setInterval(() => playSlides(), 10)
    }

    function playSlides() {
        items.value.forEach(item => {
            item.move(-0.5);
        })
    }

    onMounted(() => {
        startTimer();
    })

    onUnmounted(() => {
        pauseTimer();
    })

    provide(carouselContextKey, {
        addItem,
        removeItem,
        totalWidth
    })
}
