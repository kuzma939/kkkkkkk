/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true, // Увімкнення строгого режиму React
    images: {
      formats: ['image/webp'], // Підтримка формату WebP
      remotePatterns: [
        {
          protocol: 'https',
          hostname: 'shoopingsite-my9e.vercel.app', // Ваш основний домен
        },
        // Додайте сюди інші домени, якщо потрібно
        // {
        //   protocol: 'https',
        //   hostname: 'cdn.example.com',
        // },
        // {
        //   protocol: 'https',
        //   hostname: 'images.unsplash.com',
        // },
      ],
    },
  };
  
  export default nextConfig;