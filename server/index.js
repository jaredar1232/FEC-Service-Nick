const express = require('express');
const bodyParser = require('body-parser');
const path = require('path')
const app = express();
const PORT = 5001;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// UNCOMMENT FOR REACT
app.use(express.static(path.join(__dirname + '/../client-react/dist')));

app.get('/api/blogs', function(req, res) {
  // TODO - your code here!
});

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});