import tailwindcssAnimate from 'tailwindcss-animate'
import tailwindcssTypography from '@tailwindcss/typography';

/** @type {import('tailwindcss').Config} */
export default {
  prefix: 'tw-',
  important: false,
  darkMode: ['class', '[class="dark"]'],
  content: [
    './pages/**/*.{js,jsx}',
    './components/**/*.{js,jsx}',
    './app/**/*.{js,jsx}',
    './src/**/*.{js,jsx}',
  ],
  theme: {
    container: {
      center: 'true',
      padding: '2rem',
      screens: {
        '2xl': '1400px',
      }
    },
    extend: {
      colors: {
        plum: {
          '50': '#F6EEF1',
          '100': '#EEDDE2',
          '200': '#DCBCC5',
          '300': '#CB9AA8',
          '400': '#B9798B',
          '500': '#A7576E',
          '600': '#864658',
          '700': '#653442',
          '800': '#43232C',
          '900': '#221116',
          '950': '#11090B'
        },
        berry: {
          '50': '#f7eef5',
          '100': '#efdce9',
          '200': '#e0b9d2',
          '300': '#d196ba',
          '400': '#b1528a',
          '500': '#8e4585',
          '600': '#7f3e78',
          '700': '#693364',
          '800': '#542850',
          '900': '#3f1e3c'
        },
        blueGray: {
          '50': '#eceff1',
          '100': '#cfd8dc',
          '200': '#b0bec5',
          '300': '#90a4ae',
          '400': '#78909c',
          '500': '#607d8b',
          '600': '#546e7a',
          '700': '#455a64',
          '800': '#37474f',
          '900': '#263238'
        },
        brown: {
          '50': '#efebe9',
          '100': '#d7ccc8',
          '200': '#bcaaa4',
          '300': '#a1887f',
          '400': '#8d6e63',
          '500': '#795548',
          '600': '#6d4c41',
          '700': '#5d4037',
          '800': '#4e342e',
          '900': '#3e2723'
        },
        lightBlue: {
          '50': '#e1f5fe',
          '100': '#b3e5fc',
          '200': '#81d4fa',
          '300': '#4fc3f7',
          '400': '#29b6f6',
          '500': '#03a9f4',
          '600': '#039be5',
          '700': '#0288d1',
          '800': '#0277bd',
          '900': '#01579b'
        },
        lightGreen: {
          '50': '#f1f8e9',
          '100': '#dcedc8',
          '200': '#c5e1a5',
          '300': '#aed581',
          '400': '#9ccc65',
          '500': '#8bc34a',
          '600': '#7cb342',
          '700': '#689f38',
          '800': '#558b2f',
          '900': '#33691e'
        },
        deepOrange: {
          '50': '#fbe9e7',
          '100': '#ffccbc',
          '200': '#ffab91',
          '300': '#ff8a65',
          '400': '#ff7043',
          '500': '#ff5722',
          '600': '#f4511e',
          '700': '#e64a19',
          '800': '#d84315',
          '900': '#bf360c'
        },
        lightOrange: {
          '50': '#fff3e0',
          '100': '#ffe0b2',
          '200': '#ffcc80',
          '300': '#ffb74d',
          '400': '#ffa726',
          '500': '#ff9800',
          '600': '#fb8c00',
          '700': '#f57c00',
          '800': '#ef6c00',
          '900': '#e65100'
        },
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        link: 'hsl(var(--link))',
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))'
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))'
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))'
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))'
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          hover: 'hsl(var(--accent-hover))',
          foreground: 'hsl(var(--accent-foreground))'
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))'
        },
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))'
        },
        sidebar: {
          DEFAULT: 'hsl(var(--sidebar-background))',
          foreground: 'hsl(var(--sidebar-foreground))',
          primary: 'hsl(var(--sidebar-primary))',
          'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
          accent: 'hsl(var(--sidebar-accent))',
          'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
          border: 'hsl(var(--sidebar-border))',
          ring: 'hsl(var(--sidebar-ring))'
        }
      },
      backgroundColor: {
        container: 'hsl(var(--container))',
        'gray-primary': 'hsl(var(--gray-primary))',
        'gray-secondary': 'hsl(var(--gray-secondary))',
        'gray-tertiary': 'hsl(var(--gray-tertiary))',
        'left-panel': 'hsl(var(--left-panel))',
        'chat-hover': 'hsl(var(--chat-hover))',
        'green-primary': 'hsl(var(--green-primary))',
        'green-secondary': 'hsl(var(--green-secondary))',
        'green-chat': 'hsl(var(--green-chat))'
      },
      boxShadow: {
        input: '0 0 0 .15rem hsl(var(--input))'
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)'
      },
      keyframes: {
        'skeleton-loading': {
          '0%': {
            backgroundPosition: '-200% 0'
          },
          '100%': {
            backgroundPosition: 'calc(200% + 100px) 0'
          }
        },
        'accordion-down': {
          from: {
            height: '0'
          },
          to: {
            height: 'var(--radix-accordion-content-height)'
          }
        },
        'accordion-up': {
          from: {
            height: 'var(--radix-accordion-content-height)'
          },
          to: {
            height: '0'
          }
        },
        spinner: {
          from: {
            opacity: '1'
          },
          to: {
            opacity: '0.15'
          }
        },
        'collapsible-down': {
          from: {
            height: '0'
          },
          to: {
            height: 'var(--radix-collapsible-content-height)'
          }
        },
        'collapsible-up': {
          from: {
            height: 'var(--radix-collapsible-content-height)'
          },
          to: {
            height: '0'
          }
        },
        slideDownAndFade: {
          from: {
            opacity: '0',
            transform: 'translateY(-2px)'
          },
          to: {
            opacity: '1',
            transform: 'translateY(0)'
          }
        },
        slideLeftAndFade: {
          from: {
            opacity: '0',
            transform: 'translateX(2px)'
          },
          to: {
            opacity: '1',
            transform: 'translateX(0)'
          }
        },
        slideUpAndFade: {
          from: {
            opacity: '0',
            transform: 'translateY(2px)'
          },
          to: {
            opacity: '1',
            transform: 'translateY(0)'
          }
        },
        slideRightAndFade: {
          from: {
            opacity: '0',
            transform: 'translateX(-2px)'
          },
          to: {
            opacity: '1',
            transform: 'translateX(0)'
          }
        },
        'caret-blink': {
          '0%,70%,100%': {
            opacity: '1'
          },
          '20%,50%': {
            opacity: '0'
          }
        },
        hide: {
          from: {
            opacity: '1'
          },
          to: {
            opacity: '0'
          }
        },
        fadeIn: {
          '0%': {
            opacity: '0',
            transform: 'scale(0.95)'
          },
          '100%': {
            opacity: '1',
            transform: 'scale(1)'
          }
        },
        fadeOut: {
          '0%': {
            opacity: '1',
            transform: 'scale(1)'
          },
          '100%': {
            opacity: '0',
            transform: 'scale(0.95)'
          }
        },
        'slide-in': {
          '0%': {
            opacity: '0',
            transform: 'translateY(-64px)'
          },
          '100%': {
            opacity: '1',
            transform: 'translateY(0)'
          }
        },
        'slide-out': {
          '0%': {
            opacity: '1',
            transform: 'translateY(0)'
          },
          '100%': {
            opacity: '0',
            transform: 'translateY(-64px)'
          }
        },
        'backdrop-in': {
          '0%': {
            opacity: '0'
          },
          '100%': {
            opacity: '1'
          }
        },
        'backdrop-out': {
          '0%': {
            opacity: '1'
          },
          '100%': {
            opacity: '0'
          }
        },
        'loading-dots-blink': {
          '0%, 100%': {
            opacity: '0.2'
          },
          '20%': {
            opacity: '1'
          }
        },
        shake: {
          '10%, 90%': {
            transform: 'translate3d(-1px, 0, 0)'
          },
          '20%, 80%': {
            transform: 'translate3d(2px, 0, 0)'
          },
          '30%, 50%, 70%': {
            transform: 'translate3d(-4px, 0, 0)'
          },
          '40%, 60%': {
            transform: 'translate3d(4px, 0, 0)'
          }
        },
        "typing-dot-bounce": {
          "0%,40%": { transform: "translateY(0)" },
          "20%": { transform: "translateY(-0.25rem)" },
        },
      },
      animation: {
        'skeleton-loading': 'skeleton-loading 1.5s infinite',
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
        spinner: 'spinner 1s linear infinite',
        'collapsible-down': 'collapsible-down 0.2s ease-out',
        'collapsible-up': 'collapsible-up 0.2s ease-out',
        hide: 'hide 150ms cubic-bezier(0.16, 1, 0.3, 1)',
        slideDownAndFade: 'slideDownAndFade 150ms cubic-bezier(0.16, 1, 0.3, 1)',
        slideLeftAndFade: 'slideLeftAndFade 150ms cubic-bezier(0.16, 1, 0.3, 1)',
        slideUpAndFade: 'slideUpAndFade 150ms cubic-bezier(0.16, 1, 0.3, 1)',
        slideRightAndFade: 'slideRightAndFade 150ms cubic-bezier(0.16, 1, 0.3, 1)',
        'caret-blink': 'caret-blink 1.25s ease-out infinite',
        fadeIn: 'fadeIn 0.1s ease-out',
        fadeOut: 'fadeOut 0.08s ease-in',
        'dialog-in': 'slide-in 200ms ease-in-out',
        'dialog-out': 'slide-out 100ms ease-in-out',
        'backdrop-in': 'backdrop-in 200ms ease-in-out',
        'backdrop-out': 'backdrop-out 100ms ease-in-out',
        'loading-dots-blink': 'loading-dots-blink 1400ms both infinite',
        shake: 'shake 0.82s cubic-bezier(.36,.07,.19,.97) both',
        "typing-dot-bounce": "typing-dot-bounce 1.25s ease-out infinite",
      },
      backgroundImage: {
        'skeleton-gradient': 'linear-gradient(90deg, #ebebeb 25%, #f5f5f5 50%, #ebebeb 75%)'
      },
      zIndex: {
        overlay: '50',
        modal: '60'
      }
    }
  },
  plugins: [tailwindcssAnimate, tailwindcssTypography],
}
