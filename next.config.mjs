/** @type {import('next').NextConfig} */
const nextConfig = {

    images: {
        domains: ['firebasestorage.googleapis.com'],
    },
    typescript: {
        ignoreBuildErrors: true,
    },
    env: {
        NEXT_PUBLIC_APIKEY: process.env.NEXT_PUBLIC_APIKEY,
        NEXT_PUBLIC_AUTHDOMAIN: process.env.NEXT_PUBLIC_AUTHDOMAIN,
        NEXT_PUBLIC_PROJECTID: process.env.NEXT_PUBLIC_PROJECTID,
        NEXT_PUBLIC_STORAGEBUCKET: process.env.NEXT_PUBLIC_STORAGEBUCKET,
        NEXT_PUBLIC_MESSAGINGSENDERID: process.env.NEXT_PUBLIC_MESSAGINGSENDERID,
        NEXT_PUBLIC_APPID: process.env.NEXT_PUBLIC_APPID
    }
};

export default nextConfig;
