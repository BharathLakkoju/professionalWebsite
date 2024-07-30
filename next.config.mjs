/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "avatars.githubusercontent.com",
        port: '',
        pathname: "/u/**"
      },
      {
        protocol: "https",
        hostname: "img.icons8.com",
        port: '',
        pathname: "/**"
      },
      {
        protocol: "https",
        hostname: "images.crunchbase.com",
        port: '',
        pathname: "/**"
      },
      {
        protocol: "https",
        hostname: "zod.dev",
        port: '',
        pathname: "/**"
      },
      {
        protocol: "https",
        hostname: "next-auth.js.org",
        port: '',
        pathname: "/**"
      },
      {
        protocol: "https",
        hostname: "www.themoviedb.org",
        port: '',
        pathname: "/**"
      },
      {
        protocol: "https",
        hostname: "swapi.dev",
        port: '',
        pathname: "/**"
      },
      {
        protocol: "https",
        hostname: "openweathermap.org",
        port: '',
        pathname: "/**"
      },
      {
        protocol: "https",
        hostname: "lbh-resume.vercel.app",
        port: '',
        pathname: "/**"
      },
      {
        protocol: "https",
        hostname: "etimg.etb2bimg.com",
        port: '',
        pathname: "/**"
      }
    ]
  },
};

export default nextConfig;
