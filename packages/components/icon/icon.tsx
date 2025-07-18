import {computed, defineComponent, type ExtractPropTypes, toRefs} from "vue";
import {IconName, IconProps} from "./type.ts";
import "./style.scss"

const icons: Record<string, string> = import.meta.glob('../../assets/svg/*.svg', {
    query: '?raw',
    import: 'default',
    eager: true
});
const ICON_MAP: { [key: string]: String } = {}
for (const icon in icons) {
    const name = icon.replace(/^.*\/(.*)\.svg$/, '$1');
    ICON_MAP[name] = icons[icon].replace(/^\s*<svg[^>]*>/i, '').replace(/<\/svg>\s*$/i, '').trim();
}

// all icon name
// console.log(Object.keys(ICON_MAP));

export default defineComponent({
    name: IconName,
    props: IconProps,
    setup(props: ExtractPropTypes<typeof IconProps>) {
        const module = IconName
        const {name, size, color, spin} = toRefs(props);
        const classes = computed(() => [
            `${module}`,
            spin.value ? `${module}-spin` : '',
        ])
        return () => (
            <i class={classes.value} style={{'color': color.value, 'fontSize': size.value}}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"
                     v-html={ICON_MAP[name.value] || ''}>
                </svg>
            </i>
        );
    }
});