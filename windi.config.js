import { defineConfig } from 'windicss/helpers'

export default defineConfig({
  attributify: true,
  preflight: false,
  extract: {
    include: ['src/**/*.{html,vue,jsx,tsx,svelte}'],
    exclude: ['node_modules', '.git'],
  },
  plugins: [
    // require('windicss/plugin/forms'),  // disable base input style
    require('windicss/plugin/typography'),
    require('windicss/plugin/line-clamp'),
    require('windicss/plugin/aspect-ratio'),
    require('windicss/plugin/scroll-snap'),
  ],
})
