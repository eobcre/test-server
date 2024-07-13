const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const dotenv = require('dotenv');
const repoRouter = require('./routes/repo');
const emailRouter = require('./routes/email');

dotenv.config();

app.use(cors({ origin: 'https://main.d2rold8y41bgnw.amplifyapp.com' }));
// app.use(cors());
app.use(bodyParser.json());
app.use('/api', repoRouter);
app.use('/api', emailRouter);

app.listen(process.env.PORT, () => {
  console.log(`Server started on port ${process.env.PORT}`);
});
