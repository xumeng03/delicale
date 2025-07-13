import {computed, defineComponent, type ExtractPropTypes, toRefs} from "vue";
import {ButtonProps, ButtonName} from "./type"
import "./style.scss"

export default defineComponent({
    name: ButtonName,
    props: ButtonProps,
    emits: ["click"],
    setup(props: ExtractPropTypes<typeof ButtonProps>, {slots, emit}) {
        const module = ButtonName
        const {theme, shape, type, size, display, status} = toRefs(props);
        const classes = computed(() => [
            `${module}`,
            `${module}-${theme.value}`,
            `${module}-${shape.value}`,
            `${module}-${type.value}`,
            `${module}-${size.value}`,
            `${module}-${display.value}`,
            `${module}-${status.value}`,
        ])
        const handleClick = (e: MouseEvent) => {
            if (status.value === 'normal') {
                emit('click', e);
            } else {
                console.log("The button is " + status.value)
            }
        };
        return () => {
            return (
                <div tabindex="0" class={classes.value} onClick={handleClick}>
                    <span class={module + "-content"}>
                        {slots.default?.() || "Button"}
                    </span>
                </div>
            );
        };
    },
});
