import path from "path"
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import svgr from "vite-plugin-svgr"

const svgrConfig = {
  // svgr options: https://react-svgr.com/docs/options/
  svgrOptions: { exportType: "default", ref: true, svgo: false, titleProp: true },
  include: "**/*.svg",
}

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), svgr(svgrConfig)],
  resolve: {
    alias: {
      "@": path.resolve(import.meta.dirname, "./src"),
    }
  }
})
