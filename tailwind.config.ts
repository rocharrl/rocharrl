
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
			fontFamily: {
				clash: ['"Clash Display"', 'sans-serif'],
			},
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
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
				},
				// Cores para o NaturalCloud
				naturalCloud: {
					green: '#00797F', // Verde institucional Newsupri
					turquoise: '#1EAEDB', // Azul turquesa para elementos digitais
					orange: '#E30613', // Mudando de #F97316 para #E30613 (vermelho)
					forest: {
						light: '#F2FCE2', // Tom claro de verde floresta
						medium: '#4D7C0F', // Tom médio de verde floresta
						dark: '#3F6212', // Tom escuro de verde floresta
					}
				}
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
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
				},
				pulse: {
					'0%, 100%': { opacity: '1' },
					'50%': { opacity: '0.5' },
				},
				float: {
					'0%, 100%': { transform: 'translateY(0)' },
					'50%': { transform: 'translateY(-10px)' },
				},
				glow: {
					'0%, 100%': { boxShadow: '0 0 5px rgba(30, 174, 219, 0.5)' },
					'50%': { boxShadow: '0 0 20px rgba(30, 174, 219, 0.8)' },
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'pulse-slow': 'pulse 3s infinite',
				'float': 'float 6s ease-in-out infinite',
				'glow': 'glow 3s infinite',
			},
			backgroundImage: {
				'hero-pattern': "url('/lovable-uploads/c4efc426-5c04-43f3-bcca-f0ff265d49a9.png')",
				'dhi-pattern': "url('/lovable-uploads/e613da41-764d-4428-b826-f8f00c9b5aad.png')",
				'contract-pattern': "url('/lovable-uploads/ff0d14db-9083-4055-96b6-a307edb28ec9.png')",
				'pillars-pattern': "url('/lovable-uploads/95983023-c0a3-490f-979d-9fa06b2ec068.png')",
				'podcast-pattern': "url('/lovable-uploads/138ed279-77e0-495b-b3d2-d9677f9e992c.png')",
			},
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
