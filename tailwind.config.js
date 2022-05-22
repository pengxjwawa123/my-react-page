module.exports = {
  content: ["./src/**/*.{html,js,tsx,jsx}"],
  theme: {
    fontFamily: {
      sans: ['Inter', 'sans-serif'],
      serif: ['Merriweather', 'serif'],
    },
    extend: {
      animation: {
        'slowSpin': 'slowspin 15s linear infinite',
        'slowPulse': 'slowpulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        slowspin: {
          from: {transform: 'rotate(0deg)'},
          to: {transform: 'rotate(360deg)'}
        },
        slowpulse: {
          '50%': {opacity: 0.5}
        }
      }
    },
  },
  plugins: [
    require("daisyui"),
    require('@tailwindcss/typography')
  ],
  daisyui: {
    themes: [
      {
        mytheme: {  
          "primary": "#0f766e",
          "secondary": "#f59e0b",
          "accent": "#0e7490",
          "neutral": "#1c1917",
          "base-100": "#ffffff",
          "base-200": "#f2d0ab",
          "info": "#6ECFE2",
          "base": "#f2d0ab",
          "success": "#10b981",
          "warning": "#EC6584",
          "error": "#e11d48",
        },
      },
    ],
    styled: true,
    base: true,
    utils: true,
    logs: true,
    rtl: false,
    prefix: "",
    darkTheme: "light",
  },

}
