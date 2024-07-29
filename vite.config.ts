import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  define: {
    "process.env.VITE_API_URL": JSON.stringify(process.env.VITE_API_URL),
  },
  resolve: {
    alias: [
      { find: "@src", replacement: path.resolve(__dirname, "./src") },
      { find: "@pages", replacement: path.resolve(__dirname, "./src/pages") },
      {
        find: "@comp",
        replacement: path.resolve(__dirname, "./src/component"),
      },
      { find: "@utils", replacement: path.resolve(__dirname, "./src/utils") },
      { find: "@hooks", replacement: path.resolve(__dirname, "./src/hooks") },
      { find: "@apis", replacement: path.resolve(__dirname, "./src/apis") },
    ],
  },
});
