import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* ローカル画像のみ<Image>で最適化。外部画像(Unsplash)は<img>で直接配信 */
  async redirects() {
    return [
      { source: '/huyouhin/yamato', destination: '/', permanent: true },
      { source: '/fuyouhin/jimoto-gyousha', destination: '/', permanent: true },
      { source: '/fuyouhin/kaitori-souro', destination: '/', permanent: true },
      { source: '/ihinseiri/soudan', destination: '/yamato', permanent: true },
      { source: '/sodaigomi/yamato', destination: '/', permanent: true },
    ];
  },
};

export default nextConfig;
