import laravel from 'laravel-vite-plugin'
import { defineConfig } from 'vite'

export default defineConfig({
  plugins: [
    (() => {
      return {
        name: 'monaco-editor:rewrite-worker',
        transform(code, id) {
          if (this.environment.mode !== 'dev') {
            return
          }

          if (id.includes('worker')) {
            return code.replace(
              '__laravel_vite_placeholder__.test',
              'laravel-monaco-editor.test',
            )
          }
        },
      }
    })(),
    laravel({
      input: ['resources/css/app.css', 'resources/js/app.js'],
      refresh: true,
    }),
  ],

  optimizeDeps: {
    include: ['monaco-editor'],
  },
})
