/** @type {import('next').NextConfig} */
const nextConfig = {
    env: {
        NEXT_PUBLIC_HOSTNAME: "http://localhost:3000/api/",
        MONGODB_URI: "mongodb+srv://admin:admin@cluster0.qtxawf3.mongodb.net/",
        NEXTAUTH_SECRET: "codingmstrsecret",
        NEXTAUTH_URL: "http://localhost:3000",
        SECRET: "RAMDOM_STRING",
    },
};

export default nextConfig;
