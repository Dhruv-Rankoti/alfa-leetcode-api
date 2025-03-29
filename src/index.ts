import app from './app';
import config from './config';

// Only start the server if we're not in a serverless environment
if (!process.env.VERCEL_URL) {
  app.listen(config.port, () => {
    console.log(`Server is running at => http://localhost:${config.port} ⚙️`);
  });
}

// Export the Express app for serverless use
export default app;
