/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'model-1': "url('assets/image/model-1.jpg')",
        'model-2': "url('assets/image/model-2.jpg')",
        'gradient': "linear-gradient(90deg, red, blue)"
      }
    },
    fontFamily: {
      palanquin: ['"Palanquin"' , 'sans-serif'],
      climatecrisis: ['"Climate Crisis"', 'sans-serif'],
      urbanist: ['"Urbanist"', 'sans-serif'],
      gluten: ['"Gluten"', 'cursive']
    }
  },
  plugins: [],
}

