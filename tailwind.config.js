/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      fontFamily: {
        "sansy": ['Sofia Sans', 'sans-serif' ]
      }
    },
    colors: {
      gray: "#575756",
      brown: "#847748",
      white: "#F5F3E4",
      bgbrown: "#F5F3E4"
    }
  },
  plugins: [require('@tailwindcss/forms')],
}

