import {defineConfig} from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsxPlugin from "@vitejs/plugin-vue-jsx";

// https://vite.dev/config/
export default defineConfig({
    plugins: [vue(), vueJsxPlugin({})],
})
