/// <reference types="vitest" />
/// <reference types="vite/client" />

import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'
import tsconfigPaths from 'vite-tsconfig-paths'

export default defineConfig({
  /* Vite config */
  plugins: [react(), tsconfigPaths()],
  server: { port: 3000 },
  base: '/',

  /* Vitest config */
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: './src/test/setup.ts',
    coverage: {
      enabled: true,
      provider: 'v8',
      reporter: ['text', 'html'],
      exclude: [
        'node_modules',
        '**/*.style.ts',
        '**/*.test.ts',
        '**/*.test.tsx',
        '**/test/**',
        '**/*.config.js',
        '**/*.config.ts',
        '**/*.d.ts',
        'src/main.tsx',
      ],
    },
  },
})
