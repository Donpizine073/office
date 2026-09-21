const express = require('express');
const path = require('path');
const app = express();

// Serve the HTML page
app.use(express.static(path.join(__dirname, 'public'))); 
// or just app.use(express.static(__dirname)); if index.html is in root

// This is the important part – the redirect happens here
app.post('/verify', (req, res) => {
  // You can put the URL you want here
  res.redirect('https://google.com');   // ← change this URL
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
