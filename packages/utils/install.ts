import type {App, Component, Plugin} from "vue"

type SFCWithInstall<T> = T & Plugin

export function withInstall<T extends Component>(component: T): SFCWithInstall<T> {
    (component as SFCWithInstall<T>).install = (app: App) => {
        app.component(component.name!, component);
    };
    return component as SFCWithInstall<T>;
}

export function makeInstaller(components: Plugin[]) {
    return (app: App) => {
        components.forEach(component => {
            app.use(component)
        })
    }
}