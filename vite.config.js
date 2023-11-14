import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

//added
import eslint from 'vite-plugin-eslint';

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  plugins: [
    react(),
    eslint({
      lintOnStart: true,  //enables linter to run at build time
      failOnError: mode === "production"   //equal to false, when mode is in development
    })
  ],
  server: { //automatically opens browser window when server starts
    open: true
  }
}));
