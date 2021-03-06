import { defineConfig } from "vite";
import { createVuePlugin } from "vite-plugin-vue2";
import Components from "unplugin-vue-components/vite";
import { VuetifyResolver } from "unplugin-vue-components/resolvers";

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      "@": __dirname + "/src",
    },
  },
  plugins: [
    createVuePlugin(),
    Components({
      resolvers: [VuetifyResolver()],
      dts: "src/components.d.ts",
    }),
  ],
  build: {
    chunkSizeWarningLimit: 1000,
  },
  css: {
    // sassのバージョン上げれば動くけど、Vuetifyで警告が出る…
    // preprocessorOptions: {
    //   sass: { charset: false },
    //   scss: { charset: false },
    // },
    postcss: {
      plugins: [
        {
          postcssPlugin: "internal:charset-removal",
          AtRule: {
            charset: (atRule) => {
              if (atRule.name === "charset") {
                atRule.remove();
              }
            },
          },
        },
      ],
    },
  },
});
