// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   webpack: (config) => {
//     config.externals.push("pino-pretty", "lokijs", "encoding");
//     return config;
//   },
// };

// export default nextConfig;


/** @type {import('next').NextConfig} */
const nextConfig = {
  // next.config.js

  typescript: {
    ignoreBuildErrors: true,
  },

  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: [{ loader: "@svgr/webpack", options: { icon: true } }],
    });
    return config;
  },
};

export default nextConfig;