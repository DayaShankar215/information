import express from 'express';
import { join } from 'path';
const serveStatic = express.static;
import { join } from 'path';
const app = express();
const PORT = 3000;

// Serve JSX files with correct MIME type
app.get('*.jsx', (req, res, next) => {
  res.type('application/javascript'); // change MIME type
  next();
});
app.use(expressStatic(join(__dirname, 'public'))); // Assuming your HTML and JS files are in /public
// Serve static files
app.use(serveStatic(join(__dirname, 'public'))); // Assuming your HTML and JS files are in /public

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
