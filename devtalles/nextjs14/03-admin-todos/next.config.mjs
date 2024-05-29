import { SiProtocolsdotio } from 'react-icons/si';

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [{
      protocol: 'https',
      hostname: 'tailus.io'
    }]
  }
};

export default nextConfig;
