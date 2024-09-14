import { AliasOptions, defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
import svgr from 'vite-plugin-svgr';

export default defineConfig({
    plugins: [react(), svgr()],
    server: {
        port: 3000,
        open: true,
    },
    resolve: {
        alias: {
            "@": path.resolve(__dirname, "src"),
        } as AliasOptions,
    },
});
