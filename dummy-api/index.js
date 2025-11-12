const express = require('express');
const app = express();

const PORT = 6060;

// Simulated API route
app.get('/test', (req, res) => {
  const randomDelay = Math.floor(Math.random() * 4000); // Delay between 0–4s

  setTimeout(() => {
    // 20% chance of error response
    if (Math.random() < 0.2) {
      return res.status(500).json({ error: 'Simulated server error' });
    }

    res.status(200).json({
      message: '✅ Dummy API working',
      delay: `${randomDelay}ms`,
      timestamp: new Date().toISOString()
    });
  }, randomDelay);
});

app.listen(PORT, () => {
  console.log(`🧪 Dummy API server running on http://localhost:${PORT}/test`);
});