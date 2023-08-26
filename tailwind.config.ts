import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        base:{
          25: '#FCFCFD',
          50: '#F8FAFC',
          100: '#EEF2F6',
          200: '#E3E8EF',
          300: '#CDD5DF',
          400: '#9AA4B2',
          500: '#697586',
          600: '#4B5565',
          700: '#364152',
          800: '#202939',
          900: '#121926',
        },
  
        primary: {
          main: '#4C4DDC',
          surface: '#F5F5FF',
          border: '#DBDBFF',
          hover: '#3334CC',
          pressed: '#21217A',
          focused: '#D3D7F7',
        },
  
        success: {
          main: '#43936C',
          surface: '#F2FFF9',
          border: '#B8DBCA',
          hover: '#367A59',
          pressed: '#20573D',
          focused:'#D1E5E1',
        },
  
        warning: {
          main: '#CD7B2E',
          surface: '#FFF9F2',
          border: '#EECEB0',
          hover: '#BF6919',
          pressed: '#734011',
          focused:'#EDE1D4',
        },
  
        error: {
          main: '#CB3A31',
          surface: '#FFF4F2',
          border: '#EEB4B0',
          hover: '#BD1C13',
          pressed: '#731912',
          focused:'#EDD4D5',
          
        },
      },
    },
  },
  plugins: [],
}
export default config
