import type {PropType} from "vue";

export const ButtonName = 'd-button'

const theme = ["none", "light", "dark"] as const;
const shape = ["radius"] as const;
const type = ["primary", "secondary", "tertiary", "warning", "danger", "success"] as const;
const size = ["small", "medium", "large"] as const;
const display = ["inline", "block"] as const;
const status = ["normal", "disabled"] as const;

export const ButtonProps = {
    theme: {
        type: String as PropType<typeof theme[number]>,
        default: "none",
    },
    shape: {
        type: String as PropType<typeof shape[number]>,
        default: "radius",
    },
    type: {
        type: String as PropType<typeof type[number]>,
        default: "primary",
    },
    size: {
        type: String as PropType<typeof size[number]>,
        default: "medium",
    },
    display: {
        type: String as PropType<typeof display[number]>,
        default: "inline",
    },
    status: {
        type: String as PropType<typeof status[number]>,
        default: "normal",
    },
};