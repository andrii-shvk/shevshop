import { AliasOptions, defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
import svgr from 'vite-plugin-svgr';
import dotenv from "dotenv";
dotenv.config();

export default defineConfig({
    plugins: [react(), svgr()],
    server: {
        port: 3000,
        open: true,
    },
    define: {
        __API__: JSON.stringify(`${process.env.VITE_MAIN_URL}`)
    },
    resolve: {
        alias: {
            "@": path.resolve(__dirname, "src"),
        } as AliasOptions,
    },
});
