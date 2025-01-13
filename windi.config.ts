import { defineConfig } from 'windicss/helpers'
import type { Plugin } from 'windicss/types/interfaces'
import colors from 'windicss/colors'
import defaultTheme from 'windicss/defaultTheme'
import TypographyPlugin from 'windicss/plugin/typography'
import AspectRatioPlugin from 'windicss/plugin/aspect-ratio'
import FiltersPlugin from 'windicss/plugin/filters'

export default defineConfig({
  darkMode: 'class',
  attributify: false,
  extract: {
    include: [
      './components/**/*.{vue,js}',
      './composables/**/*.{js,ts}',
      './layouts/**/*.vue',
      './pages/**/*.vue',
      './plugins/**/*.{js,ts}',
      './utils/**/*.{js,ts}',
      './app.vue',
    ],
  },
  theme: {
    extend: {
      maxWidth: {
        '8xl': '90rem',
      },
      colors: {
        primary: colors.blue,
        blue: colors.blue,
        red: colors.red,
        indigo: colors.indigo,
        slate: colors.slate,
      },
      fontFamily: {
        sans: ['Pretendard', ...defaultTheme.fontFamily.sans],
      },
    },
  },
  shortcuts: {
    'light-img': 'block dark:hidden',
    'dark-img': 'hidden dark:block',
  },
  plugins: [
    FiltersPlugin as Plugin,
    TypographyPlugin as Plugin,
    AspectRatioPlugin as Plugin,
  ] as Plugin[],
})
