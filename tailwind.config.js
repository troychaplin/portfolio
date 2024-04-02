// First, convert the `require` statements to `import` statements.
import aspectRatio from '@tailwindcss/aspect-ratio';
import containerQueries from '@tailwindcss/container-queries';
import typography from '@tailwindcss/typography';

/** @type {import('tailwindcss').Config} */
const config = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./src/**/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      typography: ({ theme }) => ({
        dark: {
          css: {
            '--tw-prose-headings': theme('colors.zinc[200]'),
            '--tw-prose-body': theme('colors.zinc[200]'),
            '--tw-prose-links': theme('colors.cyan[500]'),
            '--tw-prose-bullets': theme('colors.zinc[500]'),
          },
        },
        DEFAULT: {
          css: {
            a: {
              'font-weight': 'semibold',
              'text-decoration': 'none',
              '&:hover': {
                'color': '#f97316',
                // 'text-decoration': 'underline',
              },
            },
          },
        },
        lg: {
          css: {
            h1: {
              'font-size': '3.2em',
              'font-weight': '500',
            },
            h2: {
              'font-size': '2.0em',
            },
            h3: {
              'font-size': '1.5em',
            },
            h4: {
              'font-size': '1.35em',
            },
            'h2, h3, h4': {
              // 'font-weight': '600',
              'margin-bottom': '0.5em',
            },
          },
        },
      }),
    },
  },
  plugins: [
    aspectRatio,
    containerQueries,
    typography,
  ],
};

export default config;
