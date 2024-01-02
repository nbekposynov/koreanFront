import { ref, onMounted, onUnmounted } from "vue";

export default function useBreakpoint(breakpoint) {
    const isSmaller = ref(false);
    function setBreakpoint() {
        isSmaller.value = window.innerWidth < breakpoint;
        return isSmaller;
    }
    onMounted(() => {
        window.addEventListener('resize', setBreakpoint);
        setBreakpoint();
    });
    onUnmounted(() => {
        window.removeEventListener('resize', setBreakpoint);
    });
    return setBreakpoint();
}