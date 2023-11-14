import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    extensions: ['.tsx', '.ts', '.jsx', '.js', '.json'],
    alias: {
      '@styles/text': './src/styles/text.ts',
      '@styles/theme/colors': './src/styles/theme/colors.ts',
      '@components': path.resolve(__dirname, 'src/components'),
    }
  }
})
