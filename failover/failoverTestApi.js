// failoverTestApi.js
const express = require('express');
const app = express();

app.use(express.json());

// Simulated failover endpoint
app.get('/backup/test', (req, res) => {
  console.log('✅ Failover Test API hit!');
  res.status(200).json({
    message: 'Backup Test API is running smoothly 🚀',
    timestamp: new Date()
  });
});

const PORT = 7070;
app.listen(PORT, () => {
  console.log(`🛡️  Failover Test API running on http://localhost:${PORT}/backup/test`);
});