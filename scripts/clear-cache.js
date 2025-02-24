const fetch = require('node-fetch');

const token = process.env.CACHE_TOKEN;
const domain = process.env.VERCEL_URL || 'irishlottoonline.com';

const url = `https://${domain}/api/clear-cache?token=${token}`;

const clearCache = async () => {
  try {
    const response = await fetch(url);
    const data = await response.json();
    console.log('Cache clearing response:', data);
  } catch (err) {
    console.log("Error clearing cache:", err.message);
  }
};

clearCache();
