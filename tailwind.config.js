/** @type {import('tailwindcss').Config} */
export default {
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
    theme: {
        extend: {
            borderColor: {
                darkBlue: '#00008B',
            },
            fontFamily: {
                inter: ['Inter', 'Arial', 'Helvetica', 'sans-serif'],
            },
            fontSize: {
                clamp_xsm: 'clamp(0.6rem, 1.5vw, 0.75rem)',
                clamp_sm: 'clamp(0.85rem, 1.8vw, 0.9rem)',
                clamp_md: 'clamp(0.95rem, 2vw, 1.2rem)',
                clamp_lg: 'clamp(2.5rem, 4.5vw, 2.75rem)',
            },
            backgroundColor: {
                darkBlue: '#00008B',
                solidOrange: '#F0833B',
                solidYellow: '#FFE600',
            },
            textColor: {
                darkBlue: '#00008B',
                solidOrange: '#F0833B',
                solidYellow: '#FFE600',
            },
            backgroundImage: {
                banner: "url('@assets/home-banner.jpg')",
                solution: "url('@assets/bg-1.jpg')",
                about: "url('@assets/about-bg.jpg')",
            },
            borderColor: {
                solidOrange: '#F0833B',
                solidYellow: '#FFE600',
            },
        },
    },
    plugins: [require('tailwind-scrollbar-hide')],
}
