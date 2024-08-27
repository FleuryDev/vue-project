/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
     fontSize: {
      xs: ['12px','16px'],
      sm: ['14px', '20px'],
      base: ['15px', '22px'],
      lg: ['16px', '24px'],
      xl: ['18px', '28px'],
    },
    extend: {},
  },
  plugins: [
    require('daisyui'),
  ],
}

