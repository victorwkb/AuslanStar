/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    BEDROCK_AWS_REGION: process.env.BEDROCK_AWS_REGION,
    BEDROCK_AWS_ACCESS_KEY_ID: process.env.BEDROCK_AWS_ACCESS_KEY_ID,
    BEDROCK_AWS_SECRET_ACCESS_KEY: process.env.BEDROCK_AWS_SECRET_ACCESS_KEY,
    SUPABASE_ANON_KEY: process.env.SUPABASE_ANON_KEY,
    SUPABASE_URL: process.env.SUPABASE_URL,
    MONGO_URI: process.env.MONGO_URI,
  },
};

export default nextConfig;
