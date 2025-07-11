import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			colors: {
				// Forka Brand Colors
				bg: '#FEF7E0',
				primary: {
					DEFAULT: '#2563EB',
					foreground: '#FFFFFF'
				},
				accent: {
					DEFAULT: '#2563EB',
					foreground: '#FFFFFF'
				},
				border: '#1E40AF',
				text: {
					DEFAULT: '#333333',
					primary: '#2563EB',
					white: '#FFFFFF'
				},
				// Shadcn compatibility
				background: '#FEF7E0',
				foreground: '#333333',
				input: '#FFFFFF',
				ring: '#2563EB',
				secondary: {
					DEFAULT: '#F3F4F6',
					foreground: '#333333'
				},
				destructive: {
					DEFAULT: '#EF4444',
					foreground: '#FFFFFF'
				},
				muted: {
					DEFAULT: '#F9FAFB',
					foreground: '#6B7280'
				},
				popover: {
					DEFAULT: '#FFFFFF',
					foreground: '#333333'
				},
				card: {
					DEFAULT: '#FFFFFF',
					foreground: '#333333'
				},
				sidebar: {
					DEFAULT: '#FFFFFF',
					foreground: '#333333',
					primary: '#2563EB',
					'primary-foreground': '#FFFFFF',
					accent: '#F3F4F6',
					'accent-foreground': '#333333',
					border: '#E5E7EB',
					ring: '#2563EB'
				}
			},
			fontFamily: {
				heading: ['"Poppins"', 'sans-serif'],
				body: ['"Inter"', 'sans-serif'],
				retro: ['"Fredoka One"', 'sans-serif']
			},
			fontSize: {
				'heading-lg': ['3rem', { lineHeight: '1.1', letterSpacing: '0.1em' }],
				'heading-md': ['2rem', { lineHeight: '1.2', letterSpacing: '0.1em' }],
				'heading-sm': ['1.5rem', { lineHeight: '1.3', letterSpacing: '0.1em' }],
				'body-lg': ['1.125rem', { lineHeight: '1.6', letterSpacing: '0.02em' }],
				'body-md': ['1rem', { lineHeight: '1.5', letterSpacing: '0.02em' }],
				'body-sm': ['0.875rem', { lineHeight: '1.4', letterSpacing: '0.02em' }]
			},
			spacing: {
				'base': '1rem',
				'2base': '2rem',
				'3base': '3rem',
				'4base': '4rem'
			},
			borderRadius: {
				DEFAULT: '4px',
				forka: '4px',
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			borderWidth: {
				DEFAULT: '2px',
				forka: '2px'
			},
			boxShadow: {
				forka: '0 4px 0 #1E40AF',
				retro: '0 4px 0 #1E40AF',
				'forka-hover': '0 6px 0 #1E40AF'
			},
			strokeWidth: {
				DEFAULT: '4px',
				forka: '4px'
			},
			keyframes: {
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
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out'
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
