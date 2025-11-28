import app from '../src/app.js';

export default async (req, res) => {
  // Handle preflight requests
  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }
  
  // Pass the request to your Express app
  return app(req, res);
};
