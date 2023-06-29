/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    MAILER_LITE_KEY: process.env.MAILER_LITE_KEY,
  },
};

module.exports = nextConfig;
