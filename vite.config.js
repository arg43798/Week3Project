// vite.config.js
import { defineConfig } from "vite";
import { resolve } from "path";

export default defineConfig({
    base: "/Week3Project/",
    build: {
        outDir: "docs",
        rollupOptions: {
            input: {
                main: resolve(__dirname, "index.html"),
                about: resolve(__dirname, "about/index.html"),
                clicker:resolve(__dirname,"Clicker/index.html"),
                dream:resolve(__dirname, "My Dream Project/index.html"),
                whyistarted:resolve(__dirname, "Why-I-Started/index.html"),
                
            },
        },
    },
});