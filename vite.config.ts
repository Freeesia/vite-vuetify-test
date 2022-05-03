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
      dts: 'src/components.d.ts',
    }),
  ],
});
