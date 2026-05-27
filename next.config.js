module.exports = {
  images: {
    unoptimized: true
  },
  async redirects() {
    return [
      {
        source: '/author',
        destination: '/',
        permanent: true,
      },
    ];
  },
}; 