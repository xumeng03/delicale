import components from "./components.ts";
import {makeInstaller} from "@delicate/utils";
import "@delicate/theme/index.scss"

export default makeInstaller(components);
export * from "@delicate/components";