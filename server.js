// Task 4 & 5: Express server with all required routes
const express = require('express');

const app = express();
const PORT = process.env.PORT || 3000;

// GET / — Welcome route
app.get('/', (req, res) => {
  res.status(200).send('Welcome to Lab 1 – Node.js and Express Server!');
});

// GET /about — Returns JSON with name and section
app.get('/about', (req, res) => {
  res.status(200).json({
    name: 'Udayagiri Likhith',
    regNo: '252U1R3098',
    section: 'Section A',   // TODO: update section if needed
  });
});

// GET /time — Returns current date and time
app.get('/time', (req, res) => {
  const now = new Date();
  res.status(200).json({
    currentDateTime: now.toISOString(),
    readable: now.toLocaleString(),
  });
});

// Task 6: 404 handler for unknown routes (must be LAST)
app.use((req, res) => {
  res.status(404).json({
    error: 'Route not found',
    path: req.originalUrl,
  });
});

// Task 4: Start the server
app.listen(PORT, () => {
  console.log(`Express server is running at http://localhost:${PORT}`);
  console.log('Available routes:');
  console.log('  GET /       → 200 Welcome message');
  console.log('  GET /about  → 200 JSON with name and section');
  console.log('  GET /time   → 200 JSON with current date/time');
  console.log('  GET /*      → 404 Route not found');
});
