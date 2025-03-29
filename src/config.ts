const config = {
  port: process.env.PORT || process.env.VERCEL_URL ? 80 : 3000,
  leetcodeApiUrl: process.env.LEETCODE_API_URL || 'https://leetcode.com/graphql',
  isDev: process.env.NODE_ENV !== 'production'
};

export default config;
